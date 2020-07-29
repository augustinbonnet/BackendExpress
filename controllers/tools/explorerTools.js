const path = require('path');
const fs = require('fs');
const FileType = require('file-type');
const {GenericFile, Folder, File} = require('../../models/GenericFile');

const directoryPath = path.join(__dirname, '../../storage/');

function searchInPath(customPath, parentFolder, relativePath) {
  fs.readdirSync(customPath).forEach(file => {
        const typeFile = path.extname(file).substring(1).toLowerCase();
        const sizeKO = fs.statSync(customPath + file)["size"] / 1000.0;
        var genericFile;
        if (typeFile == ""){ // Folder
        	genericFile = new Folder(file, [], customPath + file, sizeKO,);
        	searchInPath(customPath  + genericFile.name+ "\\", genericFile, relativePath + genericFile.name + "\\");
        }else{ // File
        	genericFile = new File(file, typeFile, customPath + file, sizeKO, relativePath + file);
        }
        parentFolder.subGenericFiles.push(genericFile);
    });

  return parentFolder;
}

function getJSONFolder() {
	var fold = new Folder("", [], directoryPath, 0,'.\\');
	//console.log(searchInPath(directoryPath, fold));
	searchInPath(directoryPath, fold, ".\\");
	//console.log(fold);
	return fold;
}

module.exports = {
    getJSONFolder: function (){
        return getJSONFolder();
    }
};

