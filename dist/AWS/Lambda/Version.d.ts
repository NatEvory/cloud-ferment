import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Version extends AWSResource<Version_ResourceProperties> {
    constructor(name: string, properties: Version_ResourceProperties);
}
export interface Version_ResourceProperties extends AWSResourceProperties {
    CodeSha256?: AWSStringProperty;
    Description?: AWSStringProperty;
    FunctionName: AWSStringProperty;
}
