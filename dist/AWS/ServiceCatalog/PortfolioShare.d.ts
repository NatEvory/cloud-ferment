import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class PortfolioShare extends AWSResource<PortfolioShare_ResourceProperties> {
    constructor(name: string, properties: PortfolioShare_ResourceProperties, dependsOn?: string[]);
}
export interface PortfolioShare_ResourceProperties extends AWSResourceProperties {
    AccountId: AWSStringProperty;
    AcceptLanguage?: AWSStringProperty;
    PortfolioId: AWSStringProperty;
}
