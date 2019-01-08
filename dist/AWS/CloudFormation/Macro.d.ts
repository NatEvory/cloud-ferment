import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Macro extends AWSResource<Macro_ResourceProperties> {
    constructor(name: string, properties: Macro_ResourceProperties, dependsOn?: string[]);
}
export interface Macro_ResourceProperties extends AWSResourceProperties {
    Description?: AWSStringProperty;
    FunctionName: AWSStringProperty;
    LogGroupName?: AWSStringProperty;
    LogRoleARN?: AWSStringProperty;
    Name: AWSStringProperty;
}
