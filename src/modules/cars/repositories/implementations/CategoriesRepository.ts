import { Category } from "../../model/Cantegory";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";

//DTO => data transfer object


class CategoriesRepository implements ICategoriesRepository {
  private _categories: Category[];
  private static INSTANCE: CategoriesRepository

  private constructor() {
    this._categories = [];
  }

  public static getInstance(): CategoriesRepository {

    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository()
    }
    return CategoriesRepository.INSTANCE

  }
  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date()
    })
    this._categories.push(category)
  }
  list(): Category[] {
    return this._categories;
  }
  findByName(name: String): Category {
    const category = this._categories.find(category => category.name === name);
    return category
  }
}

export { CategoriesRepository };