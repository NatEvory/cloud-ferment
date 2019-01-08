import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Parameter extends AWSResource<Parameter_ResourceProperties> {
    constructor(name: string, properties: Parameter_ResourceProperties, dependsOn?: string[]);
}
export interface Parameter_ResourceProperties extends AWSResourceProperties {
    Type: AWSStringProperty;
    Description?: AWSStringProperty;
    AllowedPattern?: AWSStringProperty;
    Value: AWSStringProperty;
    Name?: AWSStringProperty;
}
