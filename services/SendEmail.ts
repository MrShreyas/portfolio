import nodemailer from "nodemailer";

export const sendEmail = async ({ name, email, subject, message }: any) => {
    try {

        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "418499208dfd28",
                pass: "4d14c82b48a0cc",
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
