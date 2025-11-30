import { GoogleGenAI, Type } from "@google/genai";
import { AiConsultationResponse } from "../types";

const genAI = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeBusinessPainPoint = async (painPoint: string): Promise<AiConsultationResponse> => {
  try {
    const model = "gemini-2.5-flash";
    const prompt = `
      You are a senior AI Automation Consultant for "NexFlow AI". 
      A potential client has described a business pain point: "${painPoint}".
      
      Provide a structured solution using AI automation tools (Zapier, Python, LLMs, AI Agents).
      Keep it brief, professional, and convincing.
      
      Return JSON with:
      - analysis: A 1-sentence empathy statement acknowledging the problem.
      - solution: A specific technical recommendation (e.g., "Implement a Python script with Gemini API to parse PDFs...").
      - estimatedSavings: A realistic estimate of time or money saved (e.g., "Saves 15 hours/week").
    `;

    const response = await genAI.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            analysis: { type: Type.STRING },
            solution: { type: Type.STRING },
            estimatedSavings: { type: Type.STRING },
          },
          required: ["analysis", "solution", "estimatedSavings"],
        },
      },
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as AiConsultationResponse;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      analysis: "We encountered an issue analyzing your request.",
      solution: "Please schedule a manual consultation call with our team.",
      estimatedSavings: "N/A"
    };
  }
};