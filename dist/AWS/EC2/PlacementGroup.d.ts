import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class PlacementGroup extends AWSResource<PlacementGroup_ResourceProperties> {
    constructor(name: string, properties: PlacementGroup_ResourceProperties);
}
export interface PlacementGroup_ResourceProperties extends AWSResourceProperties {
    Strategy?: AWSStringProperty;
}
