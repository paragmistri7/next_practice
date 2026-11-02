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

