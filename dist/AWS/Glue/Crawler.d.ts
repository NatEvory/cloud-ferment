import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class Crawler extends AWSResource<Crawler_ResourceProperties> {
    constructor(name: string, properties: Crawler_ResourceProperties);
}
export interface Crawler_ResourceProperties extends AWSResourceProperties {
    Role: AWSStringProperty;
    Classifiers?: AWSStringListProperty;
    Description?: AWSStringProperty;
    SchemaChangePolicy?: Crawler_SchemaChangePolicy;
    Configuration?: AWSStringProperty;
    Schedule?: Crawler_Schedule;
    DatabaseName: AWSStringProperty;
    Targets: Crawler_Targets;
    TablePrefix?: AWSStringProperty;
    Name?: AWSStringProperty;
}
export interface Crawler_Targets {
    S3Targets?: Crawler_S3Target[];
    JdbcTargets?: Crawler_JdbcTarget[];
}
export interface Crawler_JdbcTarget {
    ConnectionName?: AWSStringProperty;
    Path?: AWSStringProperty;
    Exclusions?: AWSStringListProperty;
}
export interface Crawler_Schedule {
    ScheduleExpression?: AWSStringProperty;
}
export interface Crawler_S3Target {
    Path?: AWSStringProperty;
    Exclusions?: AWSStringListProperty;
}
export interface Crawler_SchemaChangePolicy {
    UpdateBehavior?: AWSStringProperty;
    DeleteBehavior?: AWSStringProperty;
}
