import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const completion = await openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  messages: [
    {
      role: "user",
      content: "What is the most important thing to keep in mind in life?",
    },
  ],
});

console.log(completion.choices[0].message);

export default openai;
