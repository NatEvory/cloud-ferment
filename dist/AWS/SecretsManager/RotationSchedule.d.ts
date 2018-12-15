import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class RotationSchedule extends AWSResource<RotationSchedule_ResourceProperties> {
    constructor(name: string, properties: RotationSchedule_ResourceProperties);
}
export interface RotationSchedule_ResourceProperties extends AWSResourceProperties {
    SecretId: AWSStringProperty;
    RotationLambdaARN?: AWSStringProperty;
    RotationRules?: RotationSchedule_RotationRules;
}
export interface RotationSchedule_RotationRules {
    AutomaticallyAfterDays?: number;
}
