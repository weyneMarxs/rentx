import { ICategoriesRepository } from "../../repositories/ICategoriesRepository"

class ListCategoriesUseCase {
  constructor(private _categoriesRepository: ICategoriesRepository) { }

  execute() {
    const categories = this._categoriesRepository.list();

    return categories
  }
}

export { ListCategoriesUseCase }