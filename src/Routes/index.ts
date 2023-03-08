import { Router as R } from "express";
import { AIRouter } from "./AIRoutes";
import { CommonRouter } from "./CommonRouter";

const API_VERSION = process.env.API_VERSION;

export class Router {
  private _router: R;
  private _aiRouter: AIRouter;
  private _commonRouter: CommonRouter;

  constructor() {
    this._router = R();
    this._aiRouter = new AIRouter();
    this._commonRouter = new CommonRouter();

    this.attachRoutes();
  }

  public get router() {
    return this._router;
  }

  private get baseRoute() {
    return `/${API_VERSION}`;
  }

  attachRoutes() {
    this._router.use(this.baseRoute, this._aiRouter.router);
    this._router.use(this.baseRoute, this._commonRouter.router);
  }
}
