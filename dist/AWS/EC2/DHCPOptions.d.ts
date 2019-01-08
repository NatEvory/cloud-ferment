import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class DHCPOptions extends AWSResource<DHCPOptions_ResourceProperties> {
    constructor(name: string, properties: DHCPOptions_ResourceProperties, dependsOn?: string[]);
}
export interface DHCPOptions_ResourceProperties extends AWSResourceProperties {
    DomainName?: AWSStringProperty;
    DomainNameServers?: AWSStringListProperty;
    NetbiosNameServers?: AWSStringListProperty;
    NetbiosNodeType?: number;
    NtpServers?: AWSStringListProperty;
    Tags?: Tag[];
}
