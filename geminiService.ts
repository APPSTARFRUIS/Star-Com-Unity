import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  // Using direct initialization within methods to follow the guideline: "Create a new GoogleGenAI instance right before making an API call"

  async refinePostContent(content: string): Promise<string> {
    try {
      // Always use new GoogleGenAI({ apiKey: process.env.API_KEY });
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Veuillez affiner et professionnaliser le contenu du message de communication interne suivant. Rendez-le attrayant mais formel. Contenu : "${content}"`,
      });
      // Correctly access .text property (not a method)
      return response.text || content;
    } catch (error) {
      console.error('L\'affinage Gemini a échoué', error);
      return content;
    }
  }

  async generatePostTitle(content: string): Promise<string> {
    try {
      // Always use new GoogleGenAI({ apiKey: process.env.API_KEY });
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Créez un titre court et accrocheur pour une publication d'entreprise interne avec ce contenu : "${content}"`,
      });
      // Correctly access .text property
      return response.text?.replace(/"/g, '') || 'Mise à jour';
    } catch (error) {
      console.error('La génération de titre Gemini a échoué', error);
      return 'Nouvelle Publication';
    }
  }
}

export const geminiService = new GeminiService();