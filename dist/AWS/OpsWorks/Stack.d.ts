import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class Stack extends AWSResource<Stack_ResourceProperties> {
    constructor(name: string, properties: Stack_ResourceProperties, dependsOn?: string[]);
}
export interface Stack_ResourceProperties extends AWSResourceProperties {
    AgentVersion?: AWSStringProperty;
    Attributes?: {
        [key: string]: AWSStringProperty;
    };
    ChefConfiguration?: Stack_ChefConfiguration;
    CloneAppIds?: AWSStringListProperty;
    ClonePermissions?: boolean;
    ConfigurationManager?: Stack_StackConfigurationManager;
    CustomCookbooksSource?: Stack_Source;
    CustomJson?: any;
    DefaultAvailabilityZone?: AWSStringProperty;
    DefaultInstanceProfileArn: AWSStringProperty;
    DefaultOs?: AWSStringProperty;
    DefaultRootDeviceType?: AWSStringProperty;
    DefaultSshKeyName?: AWSStringProperty;
    DefaultSubnetId?: AWSStringProperty;
    EcsClusterArn?: AWSStringProperty;
    ElasticIps?: Stack_ElasticIp[];
    HostnameTheme?: AWSStringProperty;
    Name: AWSStringProperty;
    RdsDbInstances?: Stack_RdsDbInstance[];
    ServiceRoleArn: AWSStringProperty;
    SourceStackId?: AWSStringProperty;
    Tags?: Tag[];
    UseCustomCookbooks?: boolean;
    UseOpsworksSecurityGroups?: boolean;
    VpcId?: AWSStringProperty;
}
export interface Stack_Source {
    Password?: AWSStringProperty;
    Revision?: AWSStringProperty;
    SshKey?: AWSStringProperty;
    Type?: AWSStringProperty;
    Url?: AWSStringProperty;
    Username?: AWSStringProperty;
}
export interface Stack_ChefConfiguration {
    BerkshelfVersion?: AWSStringProperty;
    ManageBerkshelf?: boolean;
}
export interface Stack_StackConfigurationManager {
    Name?: AWSStringProperty;
    Version?: AWSStringProperty;
}
export interface Stack_RdsDbInstance {
    DbPassword: AWSStringProperty;
    DbUser: AWSStringProperty;
    RdsDbInstanceArn: AWSStringProperty;
}
export interface Stack_ElasticIp {
    Ip: AWSStringProperty;
    Name?: AWSStringProperty;
}
