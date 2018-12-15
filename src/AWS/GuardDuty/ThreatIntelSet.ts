import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class ThreatIntelSet extends AWSResource<ThreatIntelSet_ResourceProperties> {
	constructor(name:string,properties:ThreatIntelSet_ResourceProperties){
		super(name,properties,"AWS::GuardDuty::ThreatIntelSet");
	}
}

export interface ThreatIntelSet_ResourceProperties extends AWSResourceProperties {
	Format:AWSStringProperty;
	Activate:boolean;
	DetectorId:AWSStringProperty;
	Name?:AWSStringProperty;
	Location:AWSStringProperty;

}
