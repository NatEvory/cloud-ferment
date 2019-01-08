import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Application extends AWSResource<Application_ResourceProperties> {
    constructor(name: string, properties: Application_ResourceProperties, dependsOn?: string[]);
}
export interface Application_ResourceProperties extends AWSResourceProperties {
    ApplicationName?: AWSStringProperty;
    Inputs: Application_Input[];
    ApplicationDescription?: AWSStringProperty;
    ApplicationCode?: AWSStringProperty;
}
export interface Application_MappingParameters {
    JSONMappingParameters?: Application_JSONMappingParameters;
    CSVMappingParameters?: Application_CSVMappingParameters;
}
export interface Application_CSVMappingParameters {
    RecordRowDelimiter: AWSStringProperty;
    RecordColumnDelimiter: AWSStringProperty;
}
export interface Application_KinesisStreamsInput {
    ResourceARN: AWSStringProperty;
    RoleARN: AWSStringProperty;
}
export interface Application_Input {
    NamePrefix: AWSStringProperty;
    InputSchema: Application_InputSchema;
    KinesisStreamsInput?: Application_KinesisStreamsInput;
    KinesisFirehoseInput?: Application_KinesisFirehoseInput;
    InputProcessingConfiguration?: Application_InputProcessingConfiguration;
    InputParallelism?: Application_InputParallelism;
}
export interface Application_InputSchema {
    RecordEncoding?: AWSStringProperty;
    RecordColumns: Application_RecordColumn[];
    RecordFormat: Application_RecordFormat;
}
export interface Application_RecordColumn {
    Mapping?: AWSStringProperty;
    SqlType: AWSStringProperty;
    Name: AWSStringProperty;
}
export interface Application_RecordFormat {
    MappingParameters?: Application_MappingParameters;
    RecordFormatType: AWSStringProperty;
}
export interface Application_KinesisFirehoseInput {
    ResourceARN: AWSStringProperty;
    RoleARN: AWSStringProperty;
}
export interface Application_InputParallelism {
    Count?: number;
}
export interface Application_InputProcessingConfiguration {
    InputLambdaProcessor?: Application_InputLambdaProcessor;
}
export interface Application_JSONMappingParameters {
    RecordRowPath: AWSStringProperty;
}
export interface Application_InputLambdaProcessor {
    ResourceARN: AWSStringProperty;
    RoleARN: AWSStringProperty;
}
