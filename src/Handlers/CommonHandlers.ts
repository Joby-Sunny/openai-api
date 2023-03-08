import { Logger } from "../Services/Logger";
import { ResponseService } from "../Services/ResponseService";

export class CommonHandler {
  constructor() {}

  async notFound(req: any, res: any) {
    Logger.info(req.path);
    try {
      res.json(
        ResponseService.getResponse(
          { data: `Resource ${req.path} not found`, message: "Not Found" },
          null
        )
      );
    } catch (error: any) {
      res.error(ResponseService.getResponse(null, { data: {}, ...error }));
    }
  }
}
