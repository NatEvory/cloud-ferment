import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class DeploymentConfig extends AWSResource<DeploymentConfig_ResourceProperties> {
    constructor(name: string, properties: DeploymentConfig_ResourceProperties);
}
export interface DeploymentConfig_ResourceProperties extends AWSResourceProperties {
    DeploymentConfigName?: AWSStringProperty;
    MinimumHealthyHosts?: DeploymentConfig_MinimumHealthyHosts;
}
export interface DeploymentConfig_MinimumHealthyHosts {
    Type: AWSStringProperty;
    Value: number;
}
