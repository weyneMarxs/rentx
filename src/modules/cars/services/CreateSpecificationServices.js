"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSpecificationServices = void 0;
class CreateSpecificationServices {
    constructor(_specificationRepository) {
        this._specificationRepository = _specificationRepository;
    }
    execute({ name, description }) {
        const specificationAlreadyExists = this._specificationRepository.fidByName(name);
        if (specificationAlreadyExists) {
            throw new Error("Specifications already exists!");
        }
        this._specificationRepository.create({ name, description });
    }
}
exports.CreateSpecificationServices = CreateSpecificationServices;
