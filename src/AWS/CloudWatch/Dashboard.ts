import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Dashboard extends AWSResource<Dashboard_ResourceProperties> {
	constructor(name:string,properties:Dashboard_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::CloudWatch::Dashboard",dependsOn);
	}
}

export interface Dashboard_ResourceProperties extends AWSResourceProperties {
	DashboardName?:AWSStringProperty;
	DashboardBody:AWSStringProperty;

}
