import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class BucketPolicy extends AWSResource<BucketPolicy_ResourceProperties> {
	constructor(name:string,properties:BucketPolicy_ResourceProperties){
		super(name,properties,"AWS::S3::BucketPolicy");
	}
}

export interface BucketPolicy_ResourceProperties extends AWSResourceProperties {
	Bucket:AWSStringProperty;
	PolicyDocument:any;

}
