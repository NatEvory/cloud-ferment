import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Placement extends AWSResource<Placement_ResourceProperties> {
    constructor(name: string, properties: Placement_ResourceProperties);
}
export interface Placement_ResourceProperties extends AWSResourceProperties {
    PlacementName?: AWSStringProperty;
    ProjectName: AWSStringProperty;
    AssociatedDevices?: any;
    Attributes?: any;
}
