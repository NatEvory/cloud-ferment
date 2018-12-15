import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class GraphQLSchema extends AWSResource<GraphQLSchema_ResourceProperties> {
	constructor(name:string,properties:GraphQLSchema_ResourceProperties){
		super(name,properties,"AWS::AppSync::GraphQLSchema");
	}
}

export interface GraphQLSchema_ResourceProperties extends AWSResourceProperties {
	Definition?:AWSStringProperty;
	DefinitionS3Location?:AWSStringProperty;
	ApiId:AWSStringProperty;

}
