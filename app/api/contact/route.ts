import { appendToSheet } from "@/lib/googleSheets";

export async function POST(request: Request) {
  const body = await request.json();

  const { name, phone, email, description } = body;

  if (!name || !phone || !email || !description) {
    return Response.json(
      {
        message: "All fields are required",
      },
      {
        status: 400,
      }
    );
  }

  await appendToSheet([
    name,
    phone,
    email,
    description,
    new Date().toLocaleDateString(),
  ]);

  console.log(body);

  return Response.json({
    message: "Data received successfully",
    data: body,
  });
}