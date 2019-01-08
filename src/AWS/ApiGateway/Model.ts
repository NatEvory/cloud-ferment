import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Model extends AWSResource<Model_ResourceProperties> {
	constructor(name:string,properties:Model_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::ApiGateway::Model",dependsOn);
	}
}

export interface Model_ResourceProperties extends AWSResourceProperties {
	ContentType?:AWSStringProperty;
	Description?:AWSStringProperty;
	Name?:AWSStringProperty;
	RestApiId:AWSStringProperty;
	Schema?:any;

}
