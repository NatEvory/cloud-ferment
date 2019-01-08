import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class DBInstance extends AWSResource<DBInstance_ResourceProperties> {
	constructor(name:string,properties:DBInstance_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::Neptune::DBInstance",dependsOn);
	}
}

export interface DBInstance_ResourceProperties extends AWSResourceProperties {
	DBParameterGroupName?:AWSStringProperty;
	DBInstanceClass:AWSStringProperty;
	AllowMajorVersionUpgrade?:boolean;
	DBClusterIdentifier?:AWSStringProperty;
	AvailabilityZone?:AWSStringProperty;
	PreferredMaintenanceWindow?:AWSStringProperty;
	AutoMinorVersionUpgrade?:boolean;
	DBSubnetGroupName?:AWSStringProperty;
	DBInstanceIdentifier?:AWSStringProperty;
	DBSnapshotIdentifier?:AWSStringProperty;
	Tags?:Tag[];

}
