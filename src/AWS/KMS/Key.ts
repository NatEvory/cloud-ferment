import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Key extends AWSResource<Key_ResourceProperties> {
	constructor(name:string,properties:Key_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::KMS::Key",dependsOn);
	}
}

export interface Key_ResourceProperties extends AWSResourceProperties {
	Description?:AWSStringProperty;
	EnableKeyRotation?:boolean;
	Enabled?:boolean;
	KeyPolicy:any;
	KeyUsage?:AWSStringProperty;
	PendingWindowInDays?:number;
	Tags?:Tag[];

}
