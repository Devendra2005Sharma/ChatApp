import { GoogleGenAI } from "@google/genai";
import { partialDeepStrictEqual } from "assert";
import { resolve } from "path";
import readlineSync from 'readline-sync';

const ai =new GoogleGenAI({apiKey:"AIzaSyAO7BUTSJjNbnEgbqghI_X1Uvi-bRN5yYE"});
 const chat=ai.chats.create({
    model:"gemini-2.0-flash",
    History:[],
 })


async function main(){
    const userproblem=readlineSync.question("Ask me anything");
    const response=await chat.sendMessage({
        message:userproblem,
        
    }) 
    console.log(response.text); 
    main();
}

await main();
import { GoogleGenAI } from "@google/genai"; import readlinesync from "readlinesync"; const ai = new GoogleGenAI({apiKey:"AIzaSyC-RQdIBPsPWY5NB4y9oGkW1PWd0BIcLuA"}); const History=[] async function chatting(userproblem) { History.push({ role:'user', parts:[{text:userproblem}] }) const response = await ai.models.generateContent({ model: "gemini-2.5-flash", contents: History, config:{ SystemInstructions:"You have to behave like my friend.His name is Rathore ,he used to call me Dixit and He is very honest person and Helpful,his hobby is reading books,he work as software enginner my name is dixit i call him rathore I am helpful to him he does not allow mein to go out he is also known as proxy expert ", }, }); History.push({ role:"model", parts:[{text:response.text}] }) console.log("\n"); console.log(response.text); } async function main(){ const userproblem =readlineSync.question("Ask me anything"); await Chatting(userproblem); main(); } await main(); write code using this code only also add some chat in which rohit taking to his girlfriend