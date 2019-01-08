import { Tag, AWSResource, AWSResourceProperties } from '../../AWSResource';
export declare class InternetGateway extends AWSResource<InternetGateway_ResourceProperties> {
    constructor(name: string, properties: InternetGateway_ResourceProperties, dependsOn?: string[]);
}
export interface InternetGateway_ResourceProperties extends AWSResourceProperties {
    Tags?: Tag[];
}
