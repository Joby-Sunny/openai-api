import { Router as R } from "express";
import { AIHandler } from "../Handlers/AIHandler";

const AI_ROUTE = "/ai";

export class AIRouter {
  private _router = R();
  private _handler: AIHandler;

  constructor() {
    this._handler = new AIHandler();
    this._router.get(`${this.basePath}/hello`, this._handler.helloWorld);
    this._router.get(`${this.basePath}/myzodiacsign`, this._handler.getZodiacSign);
  }

  private get basePath(): string {
    return AI_ROUTE;
  }

  public get router() {
    return this._router;
  }
}
