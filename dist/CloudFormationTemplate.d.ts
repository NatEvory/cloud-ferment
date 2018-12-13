import { AWSResource, AWSStringProperty, AWSStringListProperty } from './AWSResource';
export declare class CloudFormationTemplate {
    description: string;
    private resources;
    private mappings;
    private parameters;
    private outputs;
    constructor(description: string);
    addResource(resource: AWSResource<any>): void;
    addMapping(mapping: TemplateMapping): void;
    addParameter(parameter: TemplateParameter): void;
    addOutput(output: TemplateOutput): void;
    templateOutput(): any;
    private resourceOutput;
    private mappingOutput;
    private parameterOutput;
    private outputOutput;
}
export interface TemplateOutput {
    Name: string;
    Description: AWSStringProperty;
    Value: AWSStringProperty;
    ExportName?: AWSStringProperty;
}
export interface TemplateMapping {
    Name: string;
    Map: {
        [key: string]: {
            [key: string]: AWSStringProperty;
        };
    };
}
export interface TemplateParameter {
    Name: string;
    Type: AWSStringProperty;
    AllowedPattern?: AWSStringProperty;
    AllowedValues?: AWSStringListProperty;
    ConstraintDescription?: AWSStringProperty;
    Default?: any;
    Description?: AWSStringProperty;
    MaxLength?: number;
    MaxValue?: number;
    MinLength?: number;
    MinValue?: number;
    NoEcho?: boolean;
}
