import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class EgressOnlyInternetGateway extends AWSResource<EgressOnlyInternetGateway_ResourceProperties> {
    constructor(name: string, properties: EgressOnlyInternetGateway_ResourceProperties, dependsOn?: string[]);
}
export interface EgressOnlyInternetGateway_ResourceProperties extends AWSResourceProperties {
    VpcId: AWSStringProperty;
}
