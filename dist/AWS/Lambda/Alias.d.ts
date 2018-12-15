import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Alias extends AWSResource<Alias_ResourceProperties> {
    constructor(name: string, properties: Alias_ResourceProperties);
}
export interface Alias_ResourceProperties extends AWSResourceProperties {
    Description?: AWSStringProperty;
    FunctionName: AWSStringProperty;
    FunctionVersion: AWSStringProperty;
    Name: AWSStringProperty;
    RoutingConfig?: Alias_AliasRoutingConfiguration;
}
export interface Alias_AliasRoutingConfiguration {
    AdditionalVersionWeights: Alias_VersionWeight[];
}
export interface Alias_VersionWeight {
    FunctionVersion: AWSStringProperty;
    FunctionWeight: number;
}
