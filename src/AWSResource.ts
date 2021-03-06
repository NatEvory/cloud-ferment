
import { CloudFormationFunctionResult } from './CloudFormationFunctionResult';

export interface AWSResourceProperties {}

export type AWSStringProperty = CloudFormationFunctionResult|string;
export type AWSStringListProperty = (CloudFormationFunctionResult|string)[] | CloudFormationFunctionResult;

export interface Tag {
	Key?:string;
	Value?:string;
}

export class AWSResource<T extends AWSResourceProperties> {

	constructor( public name:string, private resourceProperties:T, private typeName:string, private dependsOn?:string[]){

	}

	getResourceProperties():T{
		return this.resourceProperties;
	}
	getTypeName(){
		return this.typeName;
	}

	getDependencies():string[]{
		return this.dependsOn;
	}

}
