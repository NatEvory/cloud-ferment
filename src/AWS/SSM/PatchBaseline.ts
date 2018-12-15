import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class PatchBaseline extends AWSResource<PatchBaseline_ResourceProperties> {
	constructor(name:string,properties:PatchBaseline_ResourceProperties){
		super(name,properties,"AWS::SSM::PatchBaseline");
	}
}

export interface PatchBaseline_ResourceProperties extends AWSResourceProperties {
	OperatingSystem?:AWSStringProperty;
	ApprovedPatches?:AWSStringListProperty;
	RejectedPatchesAction?:AWSStringProperty;
	PatchGroups?:AWSStringListProperty;
	Description?:AWSStringProperty;
	ApprovedPatchesComplianceLevel?:AWSStringProperty;
	ApprovedPatchesEnableNonSecurity?:boolean;
	ApprovalRules?:PatchBaseline_RuleGroup;
	GlobalFilters?:PatchBaseline_PatchFilterGroup;
	Sources?:PatchBaseline_PatchSource[];
	Name:AWSStringProperty;
	RejectedPatches?:AWSStringListProperty;

}
export interface PatchBaseline_RuleGroup {
	PatchRules?:PatchBaseline_Rule[];

}
export interface PatchBaseline_PatchFilter {
	Values?:AWSStringListProperty;
	Key?:AWSStringProperty;

}
export interface PatchBaseline_Rule {
	EnableNonSecurity?:boolean;
	PatchFilterGroup?:PatchBaseline_PatchFilterGroup;
	ApproveAfterDays?:number;
	ComplianceLevel?:AWSStringProperty;

}
export interface PatchBaseline_PatchFilterGroup {
	PatchFilters?:PatchBaseline_PatchFilter[];

}
export interface PatchBaseline_PatchSource {
	Products?:AWSStringListProperty;
	Configuration?:AWSStringProperty;
	Name?:AWSStringProperty;

}
