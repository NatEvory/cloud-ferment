import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Rule extends AWSResource<Rule_ResourceProperties> {
    constructor(name: string, properties: Rule_ResourceProperties, dependsOn?: string[]);
}
export interface Rule_ResourceProperties extends AWSResourceProperties {
    MetricName: AWSStringProperty;
    Predicates?: Rule_Predicate[];
    Name: AWSStringProperty;
}
export interface Rule_Predicate {
    Type: AWSStringProperty;
    DataId: AWSStringProperty;
    Negated: boolean;
}
