import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class EndpointConfig extends AWSResource<EndpointConfig_ResourceProperties> {
    constructor(name: string, properties: EndpointConfig_ResourceProperties);
}
export interface EndpointConfig_ResourceProperties extends AWSResourceProperties {
    ProductionVariants: EndpointConfig_ProductionVariant[];
    KmsKeyId?: AWSStringProperty;
    EndpointConfigName?: AWSStringProperty;
    Tags?: Tag[];
}
export interface EndpointConfig_ProductionVariant {
    ModelName: AWSStringProperty;
    VariantName: AWSStringProperty;
    InitialInstanceCount: number;
    InstanceType: AWSStringProperty;
    AcceleratorType?: AWSStringProperty;
    InitialVariantWeight: number;
}
