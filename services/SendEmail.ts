"use server";

import nodemailer from "nodemailer";

export const sendEmail = async (formData: FormData) => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;
    try {
        const transport = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: Number(process.env.MAIL_HOST_PORT), // Port should be a number
            auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD,
            },
        });

        const mailoptions = {
            from: email,
            to: "katalkarshreyas@gmail.com",
            subject: subject,
            html: `<h1>Hi Shreyas I'm ${name}</h1>
            <pre>${message}</pre>`,
        };

        const mailresponse = await transport.sendMail(mailoptions);

        // Server actions should return serializable data or nothing
        return { success: true, messageId: mailresponse.messageId };
    } catch (error: any) {
        console.error("Email error:", error);
        return { success: false, error: error.message };
    }
};
