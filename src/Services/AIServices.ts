import { aiClient } from "../Clients/OpenAI";
import { Logger } from "./Logger";

const COMPLETION_MODEL = "text-davinci-003";
const TEMPERATURE = 0;

export class AIServices {
  private _client: any;

  constructor() {
    this._client = aiClient;
    this.getCompletion = this.getCompletion.bind(this);
  }

  public async getCompletion(prompt: string): Promise<string | ErrorEvent> {
    try {
      const completion = await this._client.createCompletion({
        model: COMPLETION_MODEL,
        prompt: prompt,
        temperature: TEMPERATURE,
      });
      Logger.info("Generated completion response", JSON.stringify(completion.data));
      if (completion?.data?.choices[0]?.text) {
        return completion.data.choices[0].text as string;
      } else {
        throw new Error("Failed to parse completion response");
      }
    } catch (error: any) {
      Logger.error("Failed to get Completion;" + error.message);
      throw error;
    }
  }
}
