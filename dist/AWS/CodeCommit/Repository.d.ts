import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class Repository extends AWSResource<Repository_ResourceProperties> {
    constructor(name: string, properties: Repository_ResourceProperties, dependsOn?: string[]);
}
export interface Repository_ResourceProperties extends AWSResourceProperties {
    RepositoryName: AWSStringProperty;
    Triggers?: Repository_RepositoryTrigger[];
    RepositoryDescription?: AWSStringProperty;
}
export interface Repository_RepositoryTrigger {
    Events?: AWSStringListProperty;
    Branches?: AWSStringListProperty;
    CustomData?: AWSStringProperty;
    DestinationArn?: AWSStringProperty;
    Name?: AWSStringProperty;
}
