import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class Connection extends AWSResource<Connection_ResourceProperties> {
    constructor(name: string, properties: Connection_ResourceProperties, dependsOn?: string[]);
}
export interface Connection_ResourceProperties extends AWSResourceProperties {
    ConnectionInput: Connection_ConnectionInput;
    CatalogId: AWSStringProperty;
}
export interface Connection_ConnectionInput {
    Description?: AWSStringProperty;
    ConnectionType: AWSStringProperty;
    MatchCriteria?: AWSStringListProperty;
    PhysicalConnectionRequirements?: Connection_PhysicalConnectionRequirements;
    ConnectionProperties: any;
    Name?: AWSStringProperty;
}
export interface Connection_PhysicalConnectionRequirements {
    AvailabilityZone?: AWSStringProperty;
    SecurityGroupIdList?: AWSStringListProperty;
    SubnetId?: AWSStringProperty;
}
