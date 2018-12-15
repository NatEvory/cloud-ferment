import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class ReplicationTask extends AWSResource<ReplicationTask_ResourceProperties> {
	constructor(name:string,properties:ReplicationTask_ResourceProperties){
		super(name,properties,"AWS::DMS::ReplicationTask");
	}
}

export interface ReplicationTask_ResourceProperties extends AWSResourceProperties {
	ReplicationTaskSettings?:AWSStringProperty;
	TableMappings:AWSStringProperty;
	ReplicationTaskIdentifier?:AWSStringProperty;
	SourceEndpointArn:AWSStringProperty;
	MigrationType:AWSStringProperty;
	TargetEndpointArn:AWSStringProperty;
	ReplicationInstanceArn:AWSStringProperty;
	Tags?:Tag[];
	CdcStartTime?:number;

}
