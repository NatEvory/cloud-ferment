import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class VpcLink extends AWSResource<VpcLink_ResourceProperties> {
    constructor(name: string, properties: VpcLink_ResourceProperties, dependsOn?: string[]);
}
export interface VpcLink_ResourceProperties extends AWSResourceProperties {
    Description?: AWSStringProperty;
    TargetArns: AWSStringListProperty;
    Name: AWSStringProperty;
}
