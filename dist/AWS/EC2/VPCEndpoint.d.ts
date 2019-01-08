import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class VPCEndpoint extends AWSResource<VPCEndpoint_ResourceProperties> {
    constructor(name: string, properties: VPCEndpoint_ResourceProperties, dependsOn?: string[]);
}
export interface VPCEndpoint_ResourceProperties extends AWSResourceProperties {
    PolicyDocument?: any;
    PrivateDnsEnabled?: boolean;
    RouteTableIds?: AWSStringListProperty;
    SecurityGroupIds?: AWSStringListProperty;
    ServiceName: AWSStringProperty;
    SubnetIds?: AWSStringListProperty;
    VPCEndpointType?: AWSStringProperty;
    VpcId: AWSStringProperty;
}
