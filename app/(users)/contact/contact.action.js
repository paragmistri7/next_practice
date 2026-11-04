"use server";

import pool from "@/lib/db";

export const contactAction = async (_previousState, formData) => {
    try {
        const { name, email, description } =
            Object.fromEntries(formData.entries());

        console.log("Form Data:", { name, email, description });

        const result = await pool.query(
            `INSERT INTO contact_data 
            (full_name, email, description) 
            VALUES ($1, $2, $3)
            RETURNING *`,
            [name, email, description]
        );

        console.log("Inserted Data:", result.rows[0]);

        return {
            success: true,
            message: "Contact submitted successfully!"
        };

    } catch (error) {
        console.error("Contact Insert Error:", error);

        return {
            success: false,
            message: "Something went wrong!"
        };
    }
};