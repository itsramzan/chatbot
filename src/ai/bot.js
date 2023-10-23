import { config } from "dotenv";
import OpenAI from "openai";
import { join } from "path";
import __dirname from "../utils/__dirname.js";

// Config dotenv
config({ path: join(__dirname, "../../.env") });

const openai = new OpenAI({ apiKey: process.env.API_KEY });

const messages = [];

const bot = async (question) => {
  messages.push({ role: "user", content: question });

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages,
  });

  const message = response.choices[0].message;

  messages.push(message);

  return message?.content;
};

export default bot;
