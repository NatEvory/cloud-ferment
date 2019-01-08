import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class ReplicationTask extends AWSResource<ReplicationTask_ResourceProperties> {
    constructor(name: string, properties: ReplicationTask_ResourceProperties, dependsOn?: string[]);
}
export interface ReplicationTask_ResourceProperties extends AWSResourceProperties {
    ReplicationTaskSettings?: AWSStringProperty;
    TableMappings: AWSStringProperty;
    ReplicationTaskIdentifier?: AWSStringProperty;
    SourceEndpointArn: AWSStringProperty;
    MigrationType: AWSStringProperty;
    TargetEndpointArn: AWSStringProperty;
    ReplicationInstanceArn: AWSStringProperty;
    Tags?: Tag[];
    CdcStartTime?: number;
}
