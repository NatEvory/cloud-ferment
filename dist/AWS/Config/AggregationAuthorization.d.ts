import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class AggregationAuthorization extends AWSResource<AggregationAuthorization_ResourceProperties> {
    constructor(name: string, properties: AggregationAuthorization_ResourceProperties, dependsOn?: string[]);
}
export interface AggregationAuthorization_ResourceProperties extends AWSResourceProperties {
    AuthorizedAccountId: AWSStringProperty;
    AuthorizedAwsRegion: AWSStringProperty;
}
