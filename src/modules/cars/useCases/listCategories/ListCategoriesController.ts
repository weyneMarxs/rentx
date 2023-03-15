import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private _listCategoriesUseCase: ListCategoriesUseCase) {

  }
  handle(request: Request, response: Response): Response {
    const getAll = this._listCategoriesUseCase.execute()
    return response.json(getAll)
  }
}

export { ListCategoriesController }