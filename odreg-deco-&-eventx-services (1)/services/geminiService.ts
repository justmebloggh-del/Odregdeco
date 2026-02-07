
import { GoogleGenAI } from "@google/genai";

export const getEventAdvice = async (userPrompt: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `You are the AI Eventx Consultant for ODREG DECO & EVENTX SERVICES. 
        ODREG is located at 15 Manvers Street, Kingston upon Hull, UK. 
        Contacts: +447442852562, +4474468855270, +233202350250. 
        Email: odregconsult@gmail.com. 
        We specialize in Eventx Consulting, Decoration, Coordination, Protocol, and Tour Management in both UK and Ghana. 
        Provide helpful, elegant, and professional advice to potential clients. Keep responses concise and always encourage them to contact us for a detailed quote.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm sorry, I'm having trouble connecting. Please contact our human consultants directly at +447442852562!";
  }
};
