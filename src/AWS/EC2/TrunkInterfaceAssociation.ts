import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class TrunkInterfaceAssociation extends AWSResource<TrunkInterfaceAssociation_ResourceProperties> {
	constructor(name:string,properties:TrunkInterfaceAssociation_ResourceProperties){
		super(name,properties,"AWS::EC2::TrunkInterfaceAssociation");
	}
}

export interface TrunkInterfaceAssociation_ResourceProperties extends AWSResourceProperties {
	BranchInterfaceId:AWSStringProperty;
	GREKey?:number;
	TrunkInterfaceId:AWSStringProperty;
	VLANId?:number;

}
