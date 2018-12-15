import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class SubnetRouteTableAssociation extends AWSResource<SubnetRouteTableAssociation_ResourceProperties> {
	constructor(name:string,properties:SubnetRouteTableAssociation_ResourceProperties){
		super(name,properties,"AWS::EC2::SubnetRouteTableAssociation");
	}
}

export interface SubnetRouteTableAssociation_ResourceProperties extends AWSResourceProperties {
	RouteTableId:AWSStringProperty;
	SubnetId:AWSStringProperty;

}
