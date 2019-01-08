import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class DeploymentGroup extends AWSResource<DeploymentGroup_ResourceProperties> {
    constructor(name: string, properties: DeploymentGroup_ResourceProperties, dependsOn?: string[]);
}
export interface DeploymentGroup_ResourceProperties extends AWSResourceProperties {
    AlarmConfiguration?: DeploymentGroup_AlarmConfiguration;
    ApplicationName: AWSStringProperty;
    AutoRollbackConfiguration?: DeploymentGroup_AutoRollbackConfiguration;
    AutoScalingGroups?: AWSStringListProperty;
    Deployment?: DeploymentGroup_Deployment;
    DeploymentConfigName?: AWSStringProperty;
    DeploymentGroupName?: AWSStringProperty;
    DeploymentStyle?: DeploymentGroup_DeploymentStyle;
    Ec2TagFilters?: DeploymentGroup_EC2TagFilter[];
    Ec2TagSet?: DeploymentGroup_EC2TagSet;
    LoadBalancerInfo?: DeploymentGroup_LoadBalancerInfo;
    OnPremisesInstanceTagFilters?: DeploymentGroup_TagFilter[];
    OnPremisesTagSet?: DeploymentGroup_OnPremisesTagSet;
    ServiceRoleArn: AWSStringProperty;
    TriggerConfigurations?: DeploymentGroup_TriggerConfig[];
}
export interface DeploymentGroup_LoadBalancerInfo {
    ElbInfoList?: DeploymentGroup_ELBInfo[];
    TargetGroupInfoList?: DeploymentGroup_TargetGroupInfo[];
}
export interface DeploymentGroup_RevisionLocation {
    GitHubLocation?: DeploymentGroup_GitHubLocation;
    RevisionType?: AWSStringProperty;
    S3Location?: DeploymentGroup_S3Location;
}
export interface DeploymentGroup_S3Location {
    Bucket: AWSStringProperty;
    BundleType?: AWSStringProperty;
    ETag?: AWSStringProperty;
    Key: AWSStringProperty;
    Version?: AWSStringProperty;
}
export interface DeploymentGroup_TriggerConfig {
    TriggerEvents?: AWSStringListProperty;
    TriggerName?: AWSStringProperty;
    TriggerTargetArn?: AWSStringProperty;
}
export interface DeploymentGroup_TagFilter {
    Key?: AWSStringProperty;
    Type?: AWSStringProperty;
    Value?: AWSStringProperty;
}
export interface DeploymentGroup_GitHubLocation {
    CommitId: AWSStringProperty;
    Repository: AWSStringProperty;
}
export interface DeploymentGroup_TargetGroupInfo {
    Name?: AWSStringProperty;
}
export interface DeploymentGroup_EC2TagSet {
    Ec2TagSetList?: DeploymentGroup_EC2TagSetListObject[];
}
export interface DeploymentGroup_ELBInfo {
    Name?: AWSStringProperty;
}
export interface DeploymentGroup_AlarmConfiguration {
    Alarms?: DeploymentGroup_Alarm[];
    Enabled?: boolean;
    IgnorePollAlarmFailure?: boolean;
}
export interface DeploymentGroup_OnPremisesTagSetListObject {
    OnPremisesTagGroup?: DeploymentGroup_TagFilter[];
}
export interface DeploymentGroup_DeploymentStyle {
    DeploymentOption?: AWSStringProperty;
    DeploymentType?: AWSStringProperty;
}
export interface DeploymentGroup_Alarm {
    Name?: AWSStringProperty;
}
export interface DeploymentGroup_EC2TagFilter {
    Key?: AWSStringProperty;
    Type?: AWSStringProperty;
    Value?: AWSStringProperty;
}
export interface DeploymentGroup_OnPremisesTagSet {
    OnPremisesTagSetList?: DeploymentGroup_OnPremisesTagSetListObject[];
}
export interface DeploymentGroup_AutoRollbackConfiguration {
    Enabled?: boolean;
    Events?: AWSStringListProperty;
}
export interface DeploymentGroup_Deployment {
    Description?: AWSStringProperty;
    IgnoreApplicationStopFailures?: boolean;
    Revision: DeploymentGroup_RevisionLocation;
}
export interface DeploymentGroup_EC2TagSetListObject {
    Ec2TagGroup?: DeploymentGroup_EC2TagFilter[];
}
