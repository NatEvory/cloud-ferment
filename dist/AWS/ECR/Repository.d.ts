import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Repository extends AWSResource<Repository_ResourceProperties> {
    constructor(name: string, properties: Repository_ResourceProperties);
}
export interface Repository_ResourceProperties extends AWSResourceProperties {
    LifecyclePolicy?: Repository_LifecyclePolicy;
    RepositoryName?: AWSStringProperty;
    RepositoryPolicyText?: any;
}
export interface Repository_LifecyclePolicy {
    LifecyclePolicyText?: AWSStringProperty;
    RegistryId?: AWSStringProperty;
}
