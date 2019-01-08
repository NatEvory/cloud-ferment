import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class StackFleetAssociation extends AWSResource<StackFleetAssociation_ResourceProperties> {
    constructor(name: string, properties: StackFleetAssociation_ResourceProperties, dependsOn?: string[]);
}
export interface StackFleetAssociation_ResourceProperties extends AWSResourceProperties {
    FleetName: AWSStringProperty;
    StackName: AWSStringProperty;
}
