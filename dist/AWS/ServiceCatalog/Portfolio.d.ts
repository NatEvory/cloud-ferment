import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Portfolio extends AWSResource<Portfolio_ResourceProperties> {
    constructor(name: string, properties: Portfolio_ResourceProperties, dependsOn?: string[]);
}
export interface Portfolio_ResourceProperties extends AWSResourceProperties {
    ProviderName: AWSStringProperty;
    Description?: AWSStringProperty;
    DisplayName: AWSStringProperty;
    AcceptLanguage?: AWSStringProperty;
    Tags?: Tag[];
}
