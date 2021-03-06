import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class Filter extends AWSResource<Filter_ResourceProperties> {
    constructor(name: string, properties: Filter_ResourceProperties, dependsOn?: string[]);
}
export interface Filter_ResourceProperties extends AWSResourceProperties {
    Action: AWSStringProperty;
    Description: AWSStringProperty;
    DetectorId: AWSStringProperty;
    FindingCriteria: Filter_FindingCriteria;
    Rank: number;
    Name?: AWSStringProperty;
}
export interface Filter_FindingCriteria {
    Criterion?: any;
    ItemType?: Filter_Condition;
}
export interface Filter_Condition {
    Lt?: number;
    Gte?: number;
    Neq?: AWSStringListProperty;
    Eq?: AWSStringListProperty;
    Lte?: number;
}
