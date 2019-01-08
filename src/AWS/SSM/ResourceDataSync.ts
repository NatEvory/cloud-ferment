import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class ResourceDataSync extends AWSResource<ResourceDataSync_ResourceProperties> {
	constructor(name:string,properties:ResourceDataSync_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::SSM::ResourceDataSync",dependsOn);
	}
}

export interface ResourceDataSync_ResourceProperties extends AWSResourceProperties {
	KMSKeyArn?:AWSStringProperty;
	BucketName:AWSStringProperty;
	BucketRegion:AWSStringProperty;
	SyncFormat:AWSStringProperty;
	SyncName:AWSStringProperty;
	BucketPrefix?:AWSStringProperty;

}
