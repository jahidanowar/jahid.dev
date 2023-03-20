import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

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

  // curl --request POST \
  // --url https://api.sendgrid.com/v3/mail/send \
  // --header "Authorization: Bearer $SENDGRID_API_KEY" \
  // --header 'Content-Type: application/json' \
  // --data '{"personalizations": [{"to": [{"email": "test@example.com"}]}],"from": {"email": "test@example.com"},"subject": "Sending with SendGrid is Fun","content": [{"type": "text/plain", "value": "and easy to do anywhere, even with cURL"}]}'

  await $fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: "hello@jahid.dev" }] }],
      from: { email: "contact@jahid.dev" },
      subject: "New contact form submission",
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
