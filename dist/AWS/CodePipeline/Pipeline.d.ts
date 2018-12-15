import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Pipeline extends AWSResource<Pipeline_ResourceProperties> {
    constructor(name: string, properties: Pipeline_ResourceProperties);
}
export interface Pipeline_ResourceProperties extends AWSResourceProperties {
    ArtifactStore?: Pipeline_ArtifactStore;
    ArtifactStores?: Pipeline_ArtifactStoreMap[];
    DisableInboundStageTransitions?: Pipeline_StageTransition[];
    Name?: AWSStringProperty;
    RestartExecutionOnUpdate?: boolean;
    RoleArn: AWSStringProperty;
    Stages: Pipeline_StageDeclaration[];
}
export interface Pipeline_InputArtifact {
    Name: AWSStringProperty;
}
export interface Pipeline_ActionDeclaration {
    ActionTypeId: Pipeline_ActionTypeId;
    Configuration?: any;
    InputArtifacts?: Pipeline_InputArtifact[];
    Name: AWSStringProperty;
    OutputArtifacts?: Pipeline_OutputArtifact[];
    Region?: AWSStringProperty;
    RoleArn?: AWSStringProperty;
    RunOrder?: number;
}
export interface Pipeline_StageDeclaration {
    Actions: Pipeline_ActionDeclaration[];
    Blockers?: Pipeline_BlockerDeclaration[];
    Name: AWSStringProperty;
}
export interface Pipeline_BlockerDeclaration {
    Name: AWSStringProperty;
    Type: AWSStringProperty;
}
export interface Pipeline_ArtifactStoreMap {
    ArtifactStore: Pipeline_ArtifactStore;
    Region: AWSStringProperty;
}
export interface Pipeline_StageTransition {
    Reason: AWSStringProperty;
    StageName: AWSStringProperty;
}
export interface Pipeline_ArtifactStore {
    EncryptionKey?: Pipeline_EncryptionKey;
    Location: AWSStringProperty;
    Type: AWSStringProperty;
}
export interface Pipeline_ActionTypeId {
    Category: AWSStringProperty;
    Owner: AWSStringProperty;
    Provider: AWSStringProperty;
    Version: AWSStringProperty;
}
export interface Pipeline_OutputArtifact {
    Name: AWSStringProperty;
}
export interface Pipeline_EncryptionKey {
    Id: AWSStringProperty;
    Type: AWSStringProperty;
}
