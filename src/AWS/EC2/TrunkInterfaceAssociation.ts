import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class TrunkInterfaceAssociation extends AWSResource<TrunkInterfaceAssociation_ResourceProperties> {
	constructor(name:string,properties:TrunkInterfaceAssociation_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::EC2::TrunkInterfaceAssociation",dependsOn);
	}
}

export interface TrunkInterfaceAssociation_ResourceProperties extends AWSResourceProperties {
	BranchInterfaceId:AWSStringProperty;
	GREKey?:number;
	TrunkInterfaceId:AWSStringProperty;
	VLANId?:number;

}
