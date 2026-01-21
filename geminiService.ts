
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  // Removed getApiKey method to comply with exclusively using process.env.API_KEY

  async refinePostContent(content: string): Promise<string> {
    // Fix: Access API key from process.env.API_KEY exclusively as per guidelines
    const apiKey = process.env.API_KEY;
    if (!apiKey) return content;

    try {
      // Fix: Always initialize GoogleGenAI with a named parameter apiKey from process.env.API_KEY directly before call
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Veuillez affiner le message suivant : "${content}"`,
      });
      // Fix: Access text output using .text property instead of a method
      return response.text || content;
    } catch (error) {
      return content;
    }
  }

  async generatePostTitle(content: string): Promise<string> {
    // Fix: Access API key from process.env.API_KEY exclusively as per guidelines
    const apiKey = process.env.API_KEY;
    if (!apiKey) return 'Nouvelle Publication';

    try {
      // Fix: Always initialize GoogleGenAI with a named parameter apiKey from process.env.API_KEY directly before call
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Titre court pour : "${content}"`,
      });
      // Fix: Access text output using .text property instead of a method
      return response.text?.replace(/"/g, '') || 'Mise à jour';
    } catch (error) {
      return 'Nouvelle Publication';
    }
  }
}

export const geminiService = new GeminiService();
