import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class Model extends AWSResource<Model_ResourceProperties> {
    constructor(name: string, properties: Model_ResourceProperties);
}
export interface Model_ResourceProperties extends AWSResourceProperties {
    ExecutionRoleArn: AWSStringProperty;
    PrimaryContainer?: Model_ContainerDefinition;
    ModelName?: AWSStringProperty;
    VpcConfig?: Model_VpcConfig;
    Containers?: Model_ContainerDefinition[];
    Tags?: Tag[];
}
export interface Model_VpcConfig {
    Subnets: AWSStringListProperty;
    SecurityGroupIds: AWSStringListProperty;
}
export interface Model_ContainerDefinition {
    ContainerHostname?: AWSStringProperty;
    Environment?: any;
    ModelDataUrl?: AWSStringProperty;
    Image: AWSStringProperty;
}
