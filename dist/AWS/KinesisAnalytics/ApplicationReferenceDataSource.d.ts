import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class ApplicationReferenceDataSource extends AWSResource<ApplicationReferenceDataSource_ResourceProperties> {
    constructor(name: string, properties: ApplicationReferenceDataSource_ResourceProperties);
}
export interface ApplicationReferenceDataSource_ResourceProperties extends AWSResourceProperties {
    ApplicationName: AWSStringProperty;
    ReferenceDataSource: ApplicationReferenceDataSource_ReferenceDataSource;
}
export interface ApplicationReferenceDataSource_S3ReferenceDataSource {
    BucketARN: AWSStringProperty;
    FileKey: AWSStringProperty;
    ReferenceRoleARN: AWSStringProperty;
}
export interface ApplicationReferenceDataSource_MappingParameters {
    JSONMappingParameters?: ApplicationReferenceDataSource_JSONMappingParameters;
    CSVMappingParameters?: ApplicationReferenceDataSource_CSVMappingParameters;
}
export interface ApplicationReferenceDataSource_JSONMappingParameters {
    RecordRowPath: AWSStringProperty;
}
export interface ApplicationReferenceDataSource_RecordFormat {
    MappingParameters?: ApplicationReferenceDataSource_MappingParameters;
    RecordFormatType: AWSStringProperty;
}
export interface ApplicationReferenceDataSource_RecordColumn {
    Mapping?: AWSStringProperty;
    SqlType: AWSStringProperty;
    Name: AWSStringProperty;
}
export interface ApplicationReferenceDataSource_CSVMappingParameters {
    RecordRowDelimiter: AWSStringProperty;
    RecordColumnDelimiter: AWSStringProperty;
}
export interface ApplicationReferenceDataSource_ReferenceSchema {
    RecordEncoding?: AWSStringProperty;
    RecordColumns: ApplicationReferenceDataSource_RecordColumn[];
    RecordFormat: ApplicationReferenceDataSource_RecordFormat;
}
export interface ApplicationReferenceDataSource_ReferenceDataSource {
    ReferenceSchema: ApplicationReferenceDataSource_ReferenceSchema;
    TableName?: AWSStringProperty;
    S3ReferenceDataSource?: ApplicationReferenceDataSource_S3ReferenceDataSource;
}
