import xlsx from 'node-xlsx';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const parseExcel = () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const workSheetsFromFile = xlsx.parse(`${__dirname}/../sheet/Emp_data.xlsx`);
    return workSheetsFromFile;
}

export {parseExcel};