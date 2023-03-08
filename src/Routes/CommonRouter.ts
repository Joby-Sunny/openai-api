import { Router as R } from "express";
import { CommonHandler } from "../Handlers/CommonHandlers";

const FALLBACK_ROUTE = "/**";

export class CommonRouter {
  private _router = R();
  private _handler: CommonHandler;

  constructor() {
    this._handler = new CommonHandler();
    this._router.all(this.basePath, this._handler.notFound);
  }

  public get router() {
    return this._router;
  }

  private get basePath() {
    return FALLBACK_ROUTE;
  }
}
