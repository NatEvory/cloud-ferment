import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class NetworkInterfacePermission extends AWSResource<NetworkInterfacePermission_ResourceProperties> {
    constructor(name: string, properties: NetworkInterfacePermission_ResourceProperties, dependsOn?: string[]);
}
export interface NetworkInterfacePermission_ResourceProperties extends AWSResourceProperties {
    AwsAccountId: AWSStringProperty;
    NetworkInterfaceId: AWSStringProperty;
    Permission: AWSStringProperty;
}
