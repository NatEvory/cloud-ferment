import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class Step extends AWSResource<Step_ResourceProperties> {
    constructor(name: string, properties: Step_ResourceProperties, dependsOn?: string[]);
}
export interface Step_ResourceProperties extends AWSResourceProperties {
    ActionOnFailure: AWSStringProperty;
    HadoopJarStep: Step_HadoopJarStepConfig;
    JobFlowId: AWSStringProperty;
    Name: AWSStringProperty;
}
export interface Step_HadoopJarStepConfig {
    Args?: AWSStringListProperty;
    Jar: AWSStringProperty;
    MainClass?: AWSStringProperty;
    StepProperties?: Step_KeyValue[];
}
export interface Step_KeyValue {
    Key?: AWSStringProperty;
    Value?: AWSStringProperty;
}
