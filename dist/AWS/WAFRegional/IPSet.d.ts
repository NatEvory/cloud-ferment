import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class IPSet extends AWSResource<IPSet_ResourceProperties> {
    constructor(name: string, properties: IPSet_ResourceProperties);
}
export interface IPSet_ResourceProperties extends AWSResourceProperties {
    IPSetDescriptors?: IPSet_IPSetDescriptor[];
    Name: AWSStringProperty;
}
export interface IPSet_IPSetDescriptor {
    Type: AWSStringProperty;
    Value: AWSStringProperty;
}
