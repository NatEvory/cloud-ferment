import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class PortfolioPrincipalAssociation extends AWSResource<PortfolioPrincipalAssociation_ResourceProperties> {
    constructor(name: string, properties: PortfolioPrincipalAssociation_ResourceProperties);
}
export interface PortfolioPrincipalAssociation_ResourceProperties extends AWSResourceProperties {
    PrincipalARN: AWSStringProperty;
    AcceptLanguage?: AWSStringProperty;
    PortfolioId: AWSStringProperty;
    PrincipalType: AWSStringProperty;
}
