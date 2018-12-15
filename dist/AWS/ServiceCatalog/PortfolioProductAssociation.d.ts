import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class PortfolioProductAssociation extends AWSResource<PortfolioProductAssociation_ResourceProperties> {
    constructor(name: string, properties: PortfolioProductAssociation_ResourceProperties);
}
export interface PortfolioProductAssociation_ResourceProperties extends AWSResourceProperties {
    SourcePortfolioId?: AWSStringProperty;
    AcceptLanguage?: AWSStringProperty;
    PortfolioId: AWSStringProperty;
    ProductId: AWSStringProperty;
}
