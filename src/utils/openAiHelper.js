import { GoogleGenerativeAI } from "@google/generative-ai";
import {OPEN_AI_KEY} from './constant';

// export const openai = new OpenAI({
//   apiKey: OPEN_AI_KEY,
//   dangerouslyAllowBrowser: true // This is the default and can be omitted
// });

export const genAI = new GoogleGenerativeAI({OPEN_AI_KEY});
export const model = genAI.getGenerativeModel({ model: "gemini-pro" });

