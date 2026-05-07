import nodemailer from "nodemailer";

export const sendEmail = async ({ name, email, subject, message }: any) => {
    try {

        const transport = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_HOST_PORT,
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
        return mailresponse;
    } catch (error: any) {
        throw new Error(error.message);
    }
};
