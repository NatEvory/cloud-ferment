import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class MetricFilter extends AWSResource<MetricFilter_ResourceProperties> {
    constructor(name: string, properties: MetricFilter_ResourceProperties, dependsOn?: string[]);
}
export interface MetricFilter_ResourceProperties extends AWSResourceProperties {
    FilterPattern: AWSStringProperty;
    LogGroupName: AWSStringProperty;
    MetricTransformations: MetricFilter_MetricTransformation[];
}
export interface MetricFilter_MetricTransformation {
    DefaultValue?: number;
    MetricName: AWSStringProperty;
    MetricNamespace: AWSStringProperty;
    MetricValue: AWSStringProperty;
}
