import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Table extends AWSResource<Table_ResourceProperties> {
	constructor(name:string,properties:Table_ResourceProperties){
		super(name,properties,"AWS::Glue::Table");
	}
}

export interface Table_ResourceProperties extends AWSResourceProperties {
	TableInput:Table_TableInput;
	DatabaseName:AWSStringProperty;
	CatalogId:AWSStringProperty;

}
export interface Table_SkewedInfo {
	SkewedColumnNames?:AWSStringListProperty;
	SkewedColumnValues?:AWSStringListProperty;
	SkewedColumnValueLocationMaps?:any;

}
export interface Table_StorageDescriptor {
	StoredAsSubDirectories?:boolean;
	Parameters?:any;
	BucketColumns?:AWSStringListProperty;
	SkewedInfo?:Table_SkewedInfo;
	InputFormat?:AWSStringProperty;
	NumberOfBuckets?:number;
	OutputFormat?:AWSStringProperty;
	Columns?:Table_Column[];
	SerdeInfo?:Table_SerdeInfo;
	SortColumns?:Table_Order[];
	Compressed?:boolean;
	Location?:AWSStringProperty;

}
export interface Table_TableInput {
	Owner?:AWSStringProperty;
	ViewOriginalText?:AWSStringProperty;
	Description?:AWSStringProperty;
	TableType?:AWSStringProperty;
	Parameters?:any;
	ViewExpandedText?:AWSStringProperty;
	StorageDescriptor?:Table_StorageDescriptor;
	PartitionKeys?:Table_Column[];
	Retention?:number;
	Name?:AWSStringProperty;

}
export interface Table_SerdeInfo {
	Parameters?:any;
	SerializationLibrary?:AWSStringProperty;
	Name?:AWSStringProperty;

}
export interface Table_Order {
	Column:AWSStringProperty;
	SortOrder:number;

}
export interface Table_Column {
	Comment?:AWSStringProperty;
	Type?:AWSStringProperty;
	Name:AWSStringProperty;

}
