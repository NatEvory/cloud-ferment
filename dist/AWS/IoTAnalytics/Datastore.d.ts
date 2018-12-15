import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Datastore extends AWSResource<Datastore_ResourceProperties> {
    constructor(name: string, properties: Datastore_ResourceProperties);
}
export interface Datastore_ResourceProperties extends AWSResourceProperties {
    DatastoreName?: AWSStringProperty;
    RetentionPeriod?: Datastore_RetentionPeriod;
    Tags?: Tag[];
}
export interface Datastore_RetentionPeriod {
    NumberOfDays?: number;
    Unlimited?: boolean;
}
