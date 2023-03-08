type Response = any | null;
type Error = any | null;
type ResponseType = {
  data: any;
  message: string;
  error: boolean;
};

export class ResponseService {
  public static getResponse(res: Response, err: Error):ResponseType {
    if (res) {
      return ResponseService.getSuccessResponse(res);
    } else {
      return ResponseService.getErrorResponse(err);
    }
  }

  private static getSuccessResponse(res: Response):ResponseType {
    return {
      data: res.data,
      message: res.message,
      error: false,
    };
  }

  private static getErrorResponse(err: Error):ResponseType {
    return {
      data: err.data,
      message: err.message,
      error: true,
    };
  }
}
