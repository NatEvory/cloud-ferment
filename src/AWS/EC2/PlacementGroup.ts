import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class PlacementGroup extends AWSResource<PlacementGroup_ResourceProperties> {
	constructor(name:string,properties:PlacementGroup_ResourceProperties){
		super(name,properties,"AWS::EC2::PlacementGroup");
	}
}

export interface PlacementGroup_ResourceProperties extends AWSResourceProperties {
	Strategy?:AWSStringProperty;

}
