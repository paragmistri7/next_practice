import pool from "@/lib/db";

export async function GET(request) {
    console.log("Request received:", request);
    try {
        const result = await pool.query("SELECT * FROM users");
        console.log("Database Result:", result.rows);
        return Response.json({
            success: true,
            message: "Users retrieved successfully!",
            data: result.rows,
        });

    } catch (error) {
        console.error("Database Error:", error);
        return Response.json({
            success: false,
            message: "Database connection failed",
        }, {
            status: 500
        })

    }
}


// POST API - Insert new user
export async function POST(request) {
    try {
        const body = await request.json();

        const { name, email, phone, age, city } = body;

        const result = await pool.query(
            `INSERT INTO users (name, email, phone, age, city)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
            [name, email, phone, age, city]
        );

        return Response.json(
            {
                success: true,
                message: "User created successfully",
                data: result.rows[0],
            },
            { status: 201 }
        );

    } catch (error) {
        if (error && error.code === "23505") {
            return Response.json(
                {
                    success: false,
                    message: "This email address is already registered. Please use a different email address.",
                },
                { status: 409 }
            );
        }

        console.error("POST User Error:", error);

        return Response.json(
            {
                success: false,
                message: "Failed to create user",
            },
            { status: 500 }
        );
    }
}


// UPDATE USER
export async function PUT(request, { params }) {
    try {
        const { id } = await params;

        const { name, email, phone, age, city } =
            await request.json();

        const result = await pool.query(
            `UPDATE users
       SET name = $1,
           email = $2,
           phone = $3,
           age = $4,
           city = $5
       WHERE id = $6
       RETURNING *`,
            [name, email, phone || null, age, city, id]
        );

        if (result.rows.length === 0) {
            return Response.json(
                {
                    success: false,
                    message: "User not found",
                },
                { status: 404 }
            );
        }

        return Response.json({
            success: true,
            message: "User updated successfully",
            data: result.rows[0],
        });

    } catch (error) {
        console.error("Update User Error:", error);

        if (error.code === "23505") {
            return Response.json(
                {
                    success: false,
                    message: "Email already exists",
                },
                { status: 409 }
            );
        }

        return Response.json(
            {
                success: false,
                message: "Failed to update user",
            },
            { status: 500 }
        );
    }
}



// DELETE USER
export async function DELETE(request, { params }) {
    try {
        const { id } = await params;

        const result = await pool.query(
            `DELETE FROM users
       WHERE id = $1
       RETURNING *`,
            [id]
        );

        if (result.rows.length === 0) {
            return Response.json(
                {
                    success: false,
                    message: "User not found",
                },
                { status: 404 }
            );
        }

        return Response.json({
            success: true,
            message: "User deleted successfully",
            data: result.rows[0],
        });

    } catch (error) {
        console.error("Delete User Error:", error);

        return Response.json(
            {
                success: false,
                message: "Failed to delete user",
            },
            { status: 500 }
        );
    }
}
