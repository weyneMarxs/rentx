import { Parser } from 'csv-parse'
import fs from 'fs'
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'

interface IImportCategory {
  name: String;
  description: String;
}

class ImportCategoryUseCase {
  constructor(private _categoriesRepository: ICategoriesRepository) { }

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const categories: IImportCategory[] = []
      const steam = fs.createReadStream(file.path)
      const parseFile = new Parser({})
      steam.pipe(parseFile)
      parseFile.on('data', async (line) => {
        const [name, description] = line
        categories.push({
          name,
          description
        })
      }).on('end', () => {
        fs.promises.unlink(file.path)
        resolve(categories)
      }).on('error', (err) => {
        reject(err)
      })
    })
  }
  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file)

    categories.map(async (category) => {
      const { name, description } = category

      const existsCategory = this._categoriesRepository.findByName(name)

      if (!existsCategory) {
        this._categoriesRepository.create({
          name,
          description
        })
      }
    })
  }
}

export { ImportCategoryUseCase }