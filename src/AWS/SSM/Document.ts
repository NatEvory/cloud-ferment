import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Document extends AWSResource<Document_ResourceProperties> {
	constructor(name:string,properties:Document_ResourceProperties){
		super(name,properties,"AWS::SSM::Document");
	}
}

export interface Document_ResourceProperties extends AWSResourceProperties {
	Content:any;
	DocumentType?:AWSStringProperty;
	Tags?:Tag[];

}
