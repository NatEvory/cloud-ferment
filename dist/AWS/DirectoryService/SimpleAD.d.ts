import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class SimpleAD extends AWSResource<SimpleAD_ResourceProperties> {
    constructor(name: string, properties: SimpleAD_ResourceProperties);
}
export interface SimpleAD_ResourceProperties extends AWSResourceProperties {
    CreateAlias?: boolean;
    Description?: AWSStringProperty;
    EnableSso?: boolean;
    Name: AWSStringProperty;
    Password: AWSStringProperty;
    ShortName?: AWSStringProperty;
    Size: AWSStringProperty;
    VpcSettings: SimpleAD_VpcSettings;
}
export interface SimpleAD_VpcSettings {
    SubnetIds: AWSStringListProperty;
    VpcId: AWSStringProperty;
}
