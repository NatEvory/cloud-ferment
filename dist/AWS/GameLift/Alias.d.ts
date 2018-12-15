import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Alias extends AWSResource<Alias_ResourceProperties> {
    constructor(name: string, properties: Alias_ResourceProperties);
}
export interface Alias_ResourceProperties extends AWSResourceProperties {
    Description?: AWSStringProperty;
    Name: AWSStringProperty;
    RoutingStrategy: Alias_RoutingStrategy;
}
export interface Alias_RoutingStrategy {
    FleetId?: AWSStringProperty;
    Message?: AWSStringProperty;
    Type: AWSStringProperty;
}
