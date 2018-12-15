import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class Association extends AWSResource<Association_ResourceProperties> {
    constructor(name: string, properties: Association_ResourceProperties);
}
export interface Association_ResourceProperties extends AWSResourceProperties {
    AssociationName?: AWSStringProperty;
    DocumentVersion?: AWSStringProperty;
    InstanceId?: AWSStringProperty;
    Name: AWSStringProperty;
    OutputLocation?: Association_InstanceAssociationOutputLocation;
    Parameters?: Map<string, Association_ParameterValues>;
    ScheduleExpression?: AWSStringProperty;
    Targets?: Association_Target[];
}
export interface Association_InstanceAssociationOutputLocation {
    S3Location?: Association_S3OutputLocation;
}
export interface Association_Target {
    Key: AWSStringProperty;
    Values: AWSStringListProperty;
}
export interface Association_ParameterValues {
    ParameterValues: AWSStringListProperty;
}
export interface Association_S3OutputLocation {
    OutputS3BucketName?: AWSStringProperty;
    OutputS3KeyPrefix?: AWSStringProperty;
}
