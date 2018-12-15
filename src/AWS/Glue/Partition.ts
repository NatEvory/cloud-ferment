import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Partition extends AWSResource<Partition_ResourceProperties> {
	constructor(name:string,properties:Partition_ResourceProperties){
		super(name,properties,"AWS::Glue::Partition");
	}
}

export interface Partition_ResourceProperties extends AWSResourceProperties {
	TableName:AWSStringProperty;
	DatabaseName:AWSStringProperty;
	CatalogId:AWSStringProperty;
	PartitionInput:Partition_PartitionInput;

}
export interface Partition_SerdeInfo {
	Parameters?:any;
	SerializationLibrary?:AWSStringProperty;
	Name?:AWSStringProperty;

}
export interface Partition_StorageDescriptor {
	StoredAsSubDirectories?:boolean;
	Parameters?:any;
	BucketColumns?:AWSStringListProperty;
	SkewedInfo?:Partition_SkewedInfo;
	InputFormat?:AWSStringProperty;
	NumberOfBuckets?:number;
	OutputFormat?:AWSStringProperty;
	Columns?:Partition_Column[];
	SerdeInfo?:Partition_SerdeInfo;
	SortColumns?:Partition_Order[];
	Compressed?:boolean;
	Location?:AWSStringProperty;

}
export interface Partition_Order {
	Column:AWSStringProperty;
	SortOrder?:number;

}
export interface Partition_SkewedInfo {
	SkewedColumnNames?:AWSStringListProperty;
	SkewedColumnValues?:AWSStringListProperty;
	SkewedColumnValueLocationMaps?:any;

}
export interface Partition_Column {
	Comment?:AWSStringProperty;
	Type?:AWSStringProperty;
	Name:AWSStringProperty;

}
export interface Partition_PartitionInput {
	Parameters?:any;
	StorageDescriptor?:Partition_StorageDescriptor;
	Values:AWSStringListProperty;

}
