class GenericFile {

	name = "None";
	absolutePath = "None"
	relativePath = "None"
	sizeKO = 0;
	

  constructor(name, absolutePath, sizeKO, relativePath) {
    this.name = name;
    this.absolutePath = absolutePath;
    this.sizeKO = sizeKO;
    this.relativePath = relativePath;
  }
}

class Folder extends GenericFile {
	subGenericFiles = [];

	constructor(name, subGenericFiles, absolutePath, sizeKO, relativePath){
		super(name, absolutePath, sizeKO, relativePath);
		this.subGenericFiles = subGenericFiles;
	}
}

class File extends GenericFile {
	type = "None";

	constructor(name, type, absolutePath, sizeKO, relativePath){
		super(name, absolutePath, sizeKO, relativePath);
		this.type = type;
	}
}

module.exports = { GenericFile, Folder, File };