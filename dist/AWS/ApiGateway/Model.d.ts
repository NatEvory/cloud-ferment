import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Model extends AWSResource<Model_ResourceProperties> {
    constructor(name: string, properties: Model_ResourceProperties);
}
export interface Model_ResourceProperties extends AWSResourceProperties {
    ContentType?: AWSStringProperty;
    Description?: AWSStringProperty;
    Name?: AWSStringProperty;
    RestApiId: AWSStringProperty;
    Schema?: any;
}
