import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class Table extends AWSResource<Table_ResourceProperties> {
    constructor(name: string, properties: Table_ResourceProperties);
}
export interface Table_ResourceProperties extends AWSResourceProperties {
    AttributeDefinitions?: Table_AttributeDefinition[];
    BillingMode?: AWSStringProperty;
    GlobalSecondaryIndexes?: Table_GlobalSecondaryIndex[];
    KeySchema: Table_KeySchema[];
    LocalSecondaryIndexes?: Table_LocalSecondaryIndex[];
    PointInTimeRecoverySpecification?: Table_PointInTimeRecoverySpecification;
    ProvisionedThroughput?: Table_ProvisionedThroughput;
    SSESpecification?: Table_SSESpecification;
    StreamSpecification?: Table_StreamSpecification;
    TableName?: AWSStringProperty;
    Tags?: Tag[];
    TimeToLiveSpecification?: Table_TimeToLiveSpecification;
}
export interface Table_TimeToLiveSpecification {
    AttributeName: AWSStringProperty;
    Enabled: boolean;
}
export interface Table_AttributeDefinition {
    AttributeName: AWSStringProperty;
    AttributeType: AWSStringProperty;
}
export interface Table_LocalSecondaryIndex {
    IndexName: AWSStringProperty;
    KeySchema: Table_KeySchema[];
    Projection: Table_Projection;
}
export interface Table_ProvisionedThroughput {
    ReadCapacityUnits: number;
    WriteCapacityUnits: number;
}
export interface Table_GlobalSecondaryIndex {
    IndexName: AWSStringProperty;
    KeySchema: Table_KeySchema[];
    Projection: Table_Projection;
    ProvisionedThroughput?: Table_ProvisionedThroughput;
}
export interface Table_KeySchema {
    AttributeName: AWSStringProperty;
    KeyType: AWSStringProperty;
}
export interface Table_Projection {
    NonKeyAttributes?: AWSStringListProperty;
    ProjectionType?: AWSStringProperty;
}
export interface Table_PointInTimeRecoverySpecification {
    PointInTimeRecoveryEnabled?: boolean;
}
export interface Table_SSESpecification {
    SSEEnabled: boolean;
}
export interface Table_StreamSpecification {
    StreamViewType: AWSStringProperty;
}
