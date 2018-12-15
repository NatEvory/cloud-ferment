import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class BasePathMapping extends AWSResource<BasePathMapping_ResourceProperties> {
    constructor(name: string, properties: BasePathMapping_ResourceProperties);
}
export interface BasePathMapping_ResourceProperties extends AWSResourceProperties {
    BasePath?: AWSStringProperty;
    DomainName: AWSStringProperty;
    RestApiId?: AWSStringProperty;
    Stage?: AWSStringProperty;
}
