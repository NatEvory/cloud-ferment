import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class EgressOnlyInternetGateway extends AWSResource<EgressOnlyInternetGateway_ResourceProperties> {
	constructor(name:string,properties:EgressOnlyInternetGateway_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::EC2::EgressOnlyInternetGateway",dependsOn);
	}
}

export interface EgressOnlyInternetGateway_ResourceProperties extends AWSResourceProperties {
	VpcId:AWSStringProperty;

}
