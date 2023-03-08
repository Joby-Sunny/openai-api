import { AIServices } from "../Services/AIServices";
import { Logger } from "../Services/Logger";
import { ResponseService } from "../Services/ResponseService";

export class AIHandler {
  private _aiService: AIServices;

  constructor() {
    this._aiService = new AIServices();
    this.getZodiacSign = this.getZodiacSign.bind(this);
  }

  public async helloWorld(_: any, res: any) {
    Logger.info("hello world");
    try {
      res.json(
        ResponseService.getResponse(
          { data: "Hello. World !!", message: "Fetched data successfully" },
          null
        )
      );
    } catch (error: any) {
      res
        .status(500)
        .send(ResponseService.getResponse(null, { data: {}, ...error }));
    }
  }

  public async getZodiacSign(req: any, res: any) {
    try {
      const { year, month, date } = req.query;
      const prompt_string = `What is my zodiac sign if I am born in ${year}, ${month} ${date}`;
      const data = await this._aiService.getCompletion(prompt_string);
      res.status(201).json(
        ResponseService.getResponse(
          {
            data: data,
            message: "Fetched your Zodian sign successsfully",
          },
          null
        )
      );
    } catch (error: any) {
      Logger.error(error);
      res.status(500).send(
        ResponseService.getResponse(null, {
          data: error,
          message: error.message,
        })
      );
    }
  }
}
