import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Domain extends AWSResource<Domain_ResourceProperties> {
    constructor(name: string, properties: Domain_ResourceProperties, dependsOn?: string[]);
}
export interface Domain_ResourceProperties extends AWSResourceProperties {
    Description?: AWSStringProperty;
}
