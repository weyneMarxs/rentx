import { ISpecificationsRepository, ICreateSpecificationDTO } from "../ISpecificationsRepository";
import { Specification } from "../../model/Specification";


class SpecificationsRepository implements ISpecificationsRepository {
  private _specifications: Specification[];
  constructor() {
    this._specifications = []
  }


  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification()

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });
    this._specifications.push(specification);
  }
  list(): Specification[] {
    return this._specifications;
  }
  fidByName(name: String): Specification {
    const specification = this._specifications.find(specification => specification.name === name)
    return specification
  }

}
export { SpecificationsRepository }; 