import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class RouteTable extends AWSResource<RouteTable_ResourceProperties> {
    constructor(name: string, properties: RouteTable_ResourceProperties, dependsOn?: string[]);
}
export interface RouteTable_ResourceProperties extends AWSResourceProperties {
    Tags?: Tag[];
    VpcId: AWSStringProperty;
}
