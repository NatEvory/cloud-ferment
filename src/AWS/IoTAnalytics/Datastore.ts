import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Datastore extends AWSResource<Datastore_ResourceProperties> {
	constructor(name:string,properties:Datastore_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::IoTAnalytics::Datastore",dependsOn);
	}
}

export interface Datastore_ResourceProperties extends AWSResourceProperties {
	DatastoreName?:AWSStringProperty;
	RetentionPeriod?:Datastore_RetentionPeriod;
	Tags?:Tag[];

}
export interface Datastore_RetentionPeriod {
	NumberOfDays?:number;
	Unlimited?:boolean;

}
