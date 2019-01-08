import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class AcceptedPortfolioShare extends AWSResource<AcceptedPortfolioShare_ResourceProperties> {
    constructor(name: string, properties: AcceptedPortfolioShare_ResourceProperties, dependsOn?: string[]);
}
export interface AcceptedPortfolioShare_ResourceProperties extends AWSResourceProperties {
    AcceptLanguage?: AWSStringProperty;
    PortfolioId: AWSStringProperty;
}
