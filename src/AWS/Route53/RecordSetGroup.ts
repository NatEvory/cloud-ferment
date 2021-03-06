import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class RecordSetGroup extends AWSResource<RecordSetGroup_ResourceProperties> {
	constructor(name:string,properties:RecordSetGroup_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::Route53::RecordSetGroup",dependsOn);
	}
}

export interface RecordSetGroup_ResourceProperties extends AWSResourceProperties {
	Comment?:AWSStringProperty;
	HostedZoneId?:AWSStringProperty;
	HostedZoneName?:AWSStringProperty;
	RecordSets?:RecordSetGroup_RecordSet[];

}
export interface RecordSetGroup_RecordSet {
	AliasTarget?:RecordSetGroup_AliasTarget;
	Comment?:AWSStringProperty;
	Failover?:AWSStringProperty;
	GeoLocation?:RecordSetGroup_GeoLocation;
	HealthCheckId?:AWSStringProperty;
	HostedZoneId?:AWSStringProperty;
	HostedZoneName?:AWSStringProperty;
	MultiValueAnswer?:boolean;
	Name:AWSStringProperty;
	Region?:AWSStringProperty;
	ResourceRecords?:AWSStringListProperty;
	SetIdentifier?:AWSStringProperty;
	TTL?:AWSStringProperty;
	Type:AWSStringProperty;
	Weight?:number;

}
export interface RecordSetGroup_GeoLocation {
	ContinentCode?:AWSStringProperty;
	CountryCode?:AWSStringProperty;
	SubdivisionCode?:AWSStringProperty;

}
export interface RecordSetGroup_AliasTarget {
	DNSName:AWSStringProperty;
	EvaluateTargetHealth?:boolean;
	HostedZoneId:AWSStringProperty;

}
