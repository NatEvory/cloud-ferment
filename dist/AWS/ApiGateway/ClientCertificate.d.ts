import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class ClientCertificate extends AWSResource<ClientCertificate_ResourceProperties> {
    constructor(name: string, properties: ClientCertificate_ResourceProperties);
}
export interface ClientCertificate_ResourceProperties extends AWSResourceProperties {
    Description?: AWSStringProperty;
}
