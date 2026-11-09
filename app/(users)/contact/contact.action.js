"use server";

import pool from "@/lib/db";
import { redirect } from "next/navigation";

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

        redirect("/");
        // revalidatePath("/"); // Revalidate the home page after redirect
        // return {
        //     success: true,
        //     message: "Contact submitted successfully!"
        // };

    } catch (error) {
        if (error.message === "NEXT_REDIRECT") {
            throw error; // Rethrow the redirect error to be handled by Next.js
        }
        console.error("Contact Insert Error:", error);

        return {
            success: false,
            message: "Something went wrong!"
        };
    }
};