

export class SpecificationNamespace{

	private namespaceParts:string[];

	constructor(public fullyQualifiedNamespace:string){
		let namespaceParts = this.getNamespaceParts(fullyQualifiedNamespace);
		if(namespaceParts.length < 3){
			throw new Error(`${fullyQualifiedNamespace} is not a valid fully qualified specification namespace`);
		}
		this.namespaceParts = namespaceParts;
	}

	getRoot(){
		return this.namespaceParts[0];
	}

	getService(){
		return this.namespaceParts[1];
	}

	getResource(){
		return this.namespaceParts[2];
	}

	getProperty(){
		if(this.namespaceParts.length < 4)
			return undefined;
		else
			return this.namespaceParts[3];
	}

	getNamespaceParts(fullyQualifiedNamespace:string):string[]{
		let result = /([^:]*)::([^:]*)::([^.]*)\.?(\w*)?/g.exec(fullyQualifiedNamespace);
		if(result.length<2)
			return [];
		else
			return result.filter((value,index)=>{return index!=0 && value});
	}

}
