import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Destination extends AWSResource<Destination_ResourceProperties> {
    constructor(name: string, properties: Destination_ResourceProperties);
}
export interface Destination_ResourceProperties extends AWSResourceProperties {
    DestinationName: AWSStringProperty;
    DestinationPolicy: AWSStringProperty;
    RoleArn: AWSStringProperty;
    TargetArn: AWSStringProperty;
}
