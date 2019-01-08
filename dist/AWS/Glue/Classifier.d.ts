import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Classifier extends AWSResource<Classifier_ResourceProperties> {
    constructor(name: string, properties: Classifier_ResourceProperties, dependsOn?: string[]);
}
export interface Classifier_ResourceProperties extends AWSResourceProperties {
    XMLClassifier?: Classifier_XMLClassifier;
    JsonClassifier?: Classifier_JsonClassifier;
    GrokClassifier?: Classifier_GrokClassifier;
}
export interface Classifier_XMLClassifier {
    RowTag: AWSStringProperty;
    Classification: AWSStringProperty;
    Name?: AWSStringProperty;
}
export interface Classifier_GrokClassifier {
    CustomPatterns?: AWSStringProperty;
    GrokPattern: AWSStringProperty;
    Classification: AWSStringProperty;
    Name?: AWSStringProperty;
}
export interface Classifier_JsonClassifier {
    JsonPath: AWSStringProperty;
    Name?: AWSStringProperty;
}
