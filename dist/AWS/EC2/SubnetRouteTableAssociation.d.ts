import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class SubnetRouteTableAssociation extends AWSResource<SubnetRouteTableAssociation_ResourceProperties> {
    constructor(name: string, properties: SubnetRouteTableAssociation_ResourceProperties, dependsOn?: string[]);
}
export interface SubnetRouteTableAssociation_ResourceProperties extends AWSResourceProperties {
    RouteTableId: AWSStringProperty;
    SubnetId: AWSStringProperty;
}
