import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: String;
  description: String;
}

class CreateSpecificationUseCase {
  constructor(private _specificationRepository: ISpecificationsRepository) { }
  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists = this._specificationRepository.fidByName(name);
    if (specificationAlreadyExists) {
      throw new Error("Specifications already exists!")
    }
    this._specificationRepository.create({ name, description })

  }
}

export { CreateSpecificationUseCase };