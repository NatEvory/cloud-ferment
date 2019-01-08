import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Skill extends AWSResource<Skill_ResourceProperties> {
    constructor(name: string, properties: Skill_ResourceProperties, dependsOn?: string[]);
}
export interface Skill_ResourceProperties extends AWSResourceProperties {
    AuthenticationConfiguration: Skill_AuthenticationConfiguration;
    VendorId: AWSStringProperty;
    SkillPackage: Skill_SkillPackage;
}
export interface Skill_SkillPackage {
    S3BucketRole?: AWSStringProperty;
    S3ObjectVersion?: AWSStringProperty;
    S3Bucket: AWSStringProperty;
    S3Key: AWSStringProperty;
    Overrides?: Skill_Overrides;
}
export interface Skill_Overrides {
    Manifest?: any;
}
export interface Skill_AuthenticationConfiguration {
    RefreshToken: AWSStringProperty;
    ClientSecret: AWSStringProperty;
    ClientId: AWSStringProperty;
}
