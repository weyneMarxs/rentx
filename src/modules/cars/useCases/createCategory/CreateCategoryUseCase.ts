import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: String;
  description: String;
}

class CreateCategoryUseCase {
  constructor(private _categoriesRepository: ICategoriesRepository) {

  }
  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this._categoriesRepository.findByName(name)
    if (categoryAlreadyExists) {
      throw new Error("category already exists !")
    }
    this._categoriesRepository.create({ name, description })
  }
}

export { CreateCategoryUseCase };