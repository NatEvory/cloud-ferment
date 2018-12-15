import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Dashboard extends AWSResource<Dashboard_ResourceProperties> {
	constructor(name:string,properties:Dashboard_ResourceProperties){
		super(name,properties,"AWS::CloudWatch::Dashboard");
	}
}

export interface Dashboard_ResourceProperties extends AWSResourceProperties {
	DashboardName?:AWSStringProperty;
	DashboardBody:AWSStringProperty;

}
