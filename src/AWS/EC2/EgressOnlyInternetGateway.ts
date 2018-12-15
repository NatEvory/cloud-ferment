import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class EgressOnlyInternetGateway extends AWSResource<EgressOnlyInternetGateway_ResourceProperties> {
	constructor(name:string,properties:EgressOnlyInternetGateway_ResourceProperties){
		super(name,properties,"AWS::EC2::EgressOnlyInternetGateway");
	}
}

export interface EgressOnlyInternetGateway_ResourceProperties extends AWSResourceProperties {
	VpcId:AWSStringProperty;

}
