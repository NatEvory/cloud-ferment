import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Rule extends AWSResource<Rule_ResourceProperties> {
    constructor(name: string, properties: Rule_ResourceProperties, dependsOn?: string[]);
}
export interface Rule_ResourceProperties extends AWSResourceProperties {
    MetricName: AWSStringProperty;
    Name: AWSStringProperty;
    Predicates?: Rule_Predicate[];
}
export interface Rule_Predicate {
    DataId: AWSStringProperty;
    Negated: boolean;
    Type: AWSStringProperty;
}
