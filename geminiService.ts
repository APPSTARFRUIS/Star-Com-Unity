
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private getApiKey(): string {
    try {
      // @ts-ignore
      return import.meta.env.VITE_API_KEY || (globalThis as any)?.process?.env?.API_KEY || '';
    } catch (e) {
      return '';
    }
  }

  async refinePostContent(content: string): Promise<string> {
    const apiKey = this.getApiKey();
    if (!apiKey) return content;

    try {
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Veuillez affiner le message suivant : "${content}"`,
      });
      return response.text || content;
    } catch (error) {
      return content;
    }
  }

  async generatePostTitle(content: string): Promise<string> {
    const apiKey = this.getApiKey();
    if (!apiKey) return 'Nouvelle Publication';

    try {
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Titre court pour : "${content}"`,
      });
      return response.text?.replace(/"/g, '') || 'Mise à jour';
    } catch (error) {
      return 'Nouvelle Publication';
    }
  }
}

export const geminiService = new GeminiService();
