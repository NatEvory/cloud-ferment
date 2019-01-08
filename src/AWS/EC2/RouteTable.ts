import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class RouteTable extends AWSResource<RouteTable_ResourceProperties> {
	constructor(name:string,properties:RouteTable_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::EC2::RouteTable",dependsOn);
	}
}

export interface RouteTable_ResourceProperties extends AWSResourceProperties {
	Tags?:Tag[];
	VpcId:AWSStringProperty;

}
