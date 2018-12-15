import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class ConfigurationAssociation extends AWSResource<ConfigurationAssociation_ResourceProperties> {
	constructor(name:string,properties:ConfigurationAssociation_ResourceProperties){
		super(name,properties,"AWS::AmazonMQ::ConfigurationAssociation");
	}
}

export interface ConfigurationAssociation_ResourceProperties extends AWSResourceProperties {
	Broker:AWSStringProperty;
	Configuration:ConfigurationAssociation_ConfigurationId;

}
export interface ConfigurationAssociation_ConfigurationId {
	Revision:number;
	Id:AWSStringProperty;

}
