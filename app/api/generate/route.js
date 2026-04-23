import OpenAI from 'openai';

export async function POST(req) {
try {
const openai = new OpenAI({
apiKey: process.env.OPENAI_API_KEY,
});

`
const body = await req.json();

const response = await openai.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [{ role: "user", content: body.prompt }]
});

return Response.json({
  output: response.choices[0].message.content
});
`

} catch (err) {
return Response.json(
{ error: err.message },
{ status: 500 }
);
}
}