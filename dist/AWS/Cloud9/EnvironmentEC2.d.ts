import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class EnvironmentEC2 extends AWSResource<EnvironmentEC2_ResourceProperties> {
    constructor(name: string, properties: EnvironmentEC2_ResourceProperties, dependsOn?: string[]);
}
export interface EnvironmentEC2_ResourceProperties extends AWSResourceProperties {
    Repositories?: EnvironmentEC2_Repository[];
    OwnerArn?: AWSStringProperty;
    Description?: AWSStringProperty;
    AutomaticStopTimeMinutes?: number;
    SubnetId?: AWSStringProperty;
    InstanceType: AWSStringProperty;
    Name?: AWSStringProperty;
}
export interface EnvironmentEC2_Repository {
    PathComponent: AWSStringProperty;
    RepositoryUrl: AWSStringProperty;
}
