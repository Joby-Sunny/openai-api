import { Configuration, OpenAIApi } from "openai";
import { Logger } from "../Services/Logger";

class OpenAIClient {
  private _client: any;
  private _configuration: any;

  constructor(apiKey: string) {
    this._configuration = new Configuration({ apiKey: apiKey });

    if (!this._configuration.apiKey) {
      Logger.error("OpenAIClient generation failed");
    }

    this._client = new OpenAIApi(this._configuration);
  }

  public get client() {
    return this._client;
  }
}

export const aiClient = new OpenAIClient(process.env.OPENAI_API_KEY!).client;
