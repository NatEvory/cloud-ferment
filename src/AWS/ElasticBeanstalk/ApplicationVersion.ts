import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class ApplicationVersion extends AWSResource<ApplicationVersion_ResourceProperties> {
	constructor(name:string,properties:ApplicationVersion_ResourceProperties){
		super(name,properties,"AWS::ElasticBeanstalk::ApplicationVersion");
	}
}

export interface ApplicationVersion_ResourceProperties extends AWSResourceProperties {
	ApplicationName:AWSStringProperty;
	Description?:AWSStringProperty;
	SourceBundle:ApplicationVersion_SourceBundle;

}
export interface ApplicationVersion_SourceBundle {
	S3Bucket:AWSStringProperty;
	S3Key:AWSStringProperty;

}
