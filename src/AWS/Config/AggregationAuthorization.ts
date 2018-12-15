import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class AggregationAuthorization extends AWSResource<AggregationAuthorization_ResourceProperties> {
	constructor(name:string,properties:AggregationAuthorization_ResourceProperties){
		super(name,properties,"AWS::Config::AggregationAuthorization");
	}
}

export interface AggregationAuthorization_ResourceProperties extends AWSResourceProperties {
	AuthorizedAccountId:AWSStringProperty;
	AuthorizedAwsRegion:AWSStringProperty;

}
