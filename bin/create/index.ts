import fse from 'fs-extra'
import inquirer from 'inquirer'
import { createForm } from './form/index.js'
import { createTable } from './table/index.js'
export function create() {
  inquirer
    .prompt([
      { type: 'list', name: 'funcType', choices: ['form', 'table'] },
      {
        type: 'input',
        name: 'fileName',
      },
    ])
    .then(async (answers) => {
      const { fileName, funcType } = answers
      let content = ''
      switch (funcType) {
        case 'form':
          content = await createForm(fileName)
          break
        case 'table':
          content = createTable(fileName)
          break
        default:
          console.log('失败')
      }
      fse.outputFile(`./${fileName}.vue`, content)
    })
}
