import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class DBInstance extends AWSResource<DBInstance_ResourceProperties> {
	constructor(name:string,properties:DBInstance_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::DocDB::DBInstance",dependsOn);
	}
}

export interface DBInstance_ResourceProperties extends AWSResourceProperties {
	DBInstanceClass:AWSStringProperty;
	DBClusterIdentifier:AWSStringProperty;
	AvailabilityZone?:AWSStringProperty;
	PreferredMaintenanceWindow?:AWSStringProperty;
	AutoMinorVersionUpgrade?:boolean;
	DBInstanceIdentifier?:AWSStringProperty;
	Tags?:Tag[];

}
