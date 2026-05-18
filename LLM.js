import { GoogleGenAI } from "@google/genai";
import { partialDeepStrictEqual } from "assert";
import { resolve } from "path";
import readlineSync from 'readline-sync';

const ai =new GoogleGenAI({apiKey:"AIzaSyAO7BUTSJjNbnEgbqghI_X1Uvi-bRN5yYE"});
const History=[]

async function Chatting(userproblem) {
    History.push({
        role:"user",
        parts:[{text:userproblem}]
    })
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents:History
  });
  History.push({
        role:"model",
        parts:[{text:response.text}]
    })
  console.log("\n")
  console.log(response.text);
}
async function main(){
    const userproblem =readlineSync.question("Ask me anything");
    await Chatting(userproblem);
    main();
}

await main();
