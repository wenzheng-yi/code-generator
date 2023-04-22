var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fse from 'fs-extra';
import inquirer from 'inquirer';
import { createForm } from './form/index.js';
import { createTable } from './table/index.js';
export function create() {
    inquirer
        .prompt([
        { type: 'list', name: 'funcType', choices: ['form', 'table'] },
        {
            type: 'input',
            name: 'fileName',
        },
    ])
        .then((answers) => __awaiter(this, void 0, void 0, function* () {
        const { fileName, funcType } = answers;
        let content = '';
        switch (funcType) {
            case 'form':
                content = yield createForm(fileName);
                break;
            case 'table':
                content = createTable(fileName);
                break;
            default:
                console.log('失败');
        }
        fse.outputFile(`./${fileName}.vue`, content);
    }));
}
