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
