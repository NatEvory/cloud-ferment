import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class FlowLog extends AWSResource<FlowLog_ResourceProperties> {
    constructor(name: string, properties: FlowLog_ResourceProperties);
}
export interface FlowLog_ResourceProperties extends AWSResourceProperties {
    DeliverLogsPermissionArn?: AWSStringProperty;
    LogDestination?: AWSStringProperty;
    LogDestinationType?: AWSStringProperty;
    LogGroupName?: AWSStringProperty;
    ResourceId: AWSStringProperty;
    ResourceType: AWSStringProperty;
    TrafficType: AWSStringProperty;
}
