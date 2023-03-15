import { Request, Response } from "express";

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
  constructor(private _importCategoryUseCase: ImportCategoryUseCase) { }
  handle(request: Request, response: Response): Response {
    const { file } = request
    this._importCategoryUseCase.execute(file)
    return response.send()
  }
}

export { ImportCategoryController }