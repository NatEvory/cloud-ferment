import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Skill extends AWSResource<Skill_ResourceProperties> {
	constructor(name:string,properties:Skill_ResourceProperties){
		super(name,properties,"Alexa::ASK::Skill");
	}
}

export interface Skill_ResourceProperties extends AWSResourceProperties {
	AuthenticationConfiguration:Skill_AuthenticationConfiguration;
	VendorId:AWSStringProperty;
	SkillPackage:Skill_SkillPackage;

}
export interface Skill_SkillPackage {
	S3BucketRole?:AWSStringProperty;
	S3ObjectVersion?:AWSStringProperty;
	S3Bucket:AWSStringProperty;
	S3Key:AWSStringProperty;
	Overrides?:Skill_Overrides;

}
export interface Skill_Overrides {
	Manifest?:any;

}
export interface Skill_AuthenticationConfiguration {
	RefreshToken:AWSStringProperty;
	ClientSecret:AWSStringProperty;
	ClientId:AWSStringProperty;

}
