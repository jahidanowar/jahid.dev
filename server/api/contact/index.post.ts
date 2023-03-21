import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig();

  if (!body.name || !body.email || !body.message) {
    throw createError({
      statusCode: 400,
      message: "Missing required fields",
    });
  }

  const client = serverSupabaseClient<any>(event);

  const { data, error } = await client.from("contacts").insert([
    {
      name: body.name,
      email: body.email,
      message: body.message,
      subject: body.subject,
    },
  ]);

  await $fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.sendGridApiKey}`,
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: config.adminEmail }] }],
      from: { email: config.emailFrom },
      subject: `Jahid.dev New contact form submission`,
      reply_to: { email: body.email, name: body.name },
      content: [
        {
          type: "text/plain",
          value: `Name: ${body.name}\nEmail: ${body.email}\nSubject: ${body.subject}\nMessage: ${body.message}`,
        },
      ],
    }),
  });

  if (error) {
    console.error(error);
    throw createError({
      statusCode: 500,
      message: "Error inserting contact",
    });
  }

  event.node.res.statusCode = 201;

  return {};
});
