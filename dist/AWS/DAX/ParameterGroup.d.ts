import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class ParameterGroup extends AWSResource<ParameterGroup_ResourceProperties> {
    constructor(name: string, properties: ParameterGroup_ResourceProperties);
}
export interface ParameterGroup_ResourceProperties extends AWSResourceProperties {
    ParameterNameValues?: any;
    Description?: AWSStringProperty;
    ParameterGroupName?: AWSStringProperty;
}
