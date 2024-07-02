import { GoogleGenerativeAI } from "@google/generative-ai";
import {VITE_API_KEY} from './constant';

// export const openai = new OpenAI({
//   apiKey: OPEN_AI_KEY,
//   dangerouslyAllowBrowser: true // This is the default and can be omitted
// });

export const genAI = new GoogleGenerativeAI({VITE_API_KEY});
console.log(genAI)
export const model = genAI.getGenerativeModel({ model: "gemini-pro" });
console.log(model)
