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