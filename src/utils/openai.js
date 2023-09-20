import OpenAI from 'openai';

export const openai = new OpenAI({
  apiKey: import.meta.env.OPEN_AI_KEY, // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser: true
});