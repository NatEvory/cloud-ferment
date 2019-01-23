import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class LayerVersionPermission extends AWSResource<LayerVersionPermission_ResourceProperties> {
    constructor(name: string, properties: LayerVersionPermission_ResourceProperties, dependsOn?: string[]);
}
export interface LayerVersionPermission_ResourceProperties extends AWSResourceProperties {
    Action: AWSStringProperty;
    LayerVersionArn: AWSStringProperty;
    OrganizationId?: AWSStringProperty;
    Principal: AWSStringProperty;
}
