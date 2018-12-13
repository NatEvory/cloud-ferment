export interface PropertyType {
	Documentation:string,
	Properties:{[Name:string]:Property}
}

export interface Property {
	Documentation:string,
	DuplicatesAllowed:boolean,
	ItemType?:string,
	PrimitiveType?:"String"|"Long"|"Integer"|"Double"|"Boolean"|"Timestamp"|"Json",
	PrimitiveItemType?:"String"|"Long"|"Integer"|"Double"|"Boolean"|"Timestamp"|"Json",
	Required:boolean,
	Type?:string,
	UpdateType:"Mutable"|"Immutable"|"Conditional"
}


export interface Attribute {
	ItemType:Property,
	PrimitiveItemType:"String"|"Long"|"Integer"|"Double"|"Boolean"|"Timestamp"|"Json",
	PrimitiveType:"String"|"Long"|"Integer"|"Double"|"Boolean"|"Timestamp"|"Json",
	Type:Property|"List"|"Map"
}

export interface ResourceType {
	Attributes:{[Name:string]:Attribute},
	Documentation:string,
	Properties:{[Name:string]:Property}
}

export interface Specification {
	PropertyTypes:{[Name:string]:PropertyType},
	ResourceTypes:{[Name:string]:ResourceType}
}

