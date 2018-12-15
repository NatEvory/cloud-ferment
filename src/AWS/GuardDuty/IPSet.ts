import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class IPSet extends AWSResource<IPSet_ResourceProperties> {
	constructor(name:string,properties:IPSet_ResourceProperties){
		super(name,properties,"AWS::GuardDuty::IPSet");
	}
}

export interface IPSet_ResourceProperties extends AWSResourceProperties {
	Format:AWSStringProperty;
	Activate:boolean;
	DetectorId:AWSStringProperty;
	Name?:AWSStringProperty;
	Location:AWSStringProperty;

}
