import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class ElasticLoadBalancerAttachment extends AWSResource<ElasticLoadBalancerAttachment_ResourceProperties> {
    constructor(name: string, properties: ElasticLoadBalancerAttachment_ResourceProperties, dependsOn?: string[]);
}
export interface ElasticLoadBalancerAttachment_ResourceProperties extends AWSResourceProperties {
    ElasticLoadBalancerName: AWSStringProperty;
    LayerId: AWSStringProperty;
}
