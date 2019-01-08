import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class IPSet extends AWSResource<IPSet_ResourceProperties> {
    constructor(name: string, properties: IPSet_ResourceProperties, dependsOn?: string[]);
}
export interface IPSet_ResourceProperties extends AWSResourceProperties {
    Format: AWSStringProperty;
    Activate: boolean;
    DetectorId: AWSStringProperty;
    Name?: AWSStringProperty;
    Location: AWSStringProperty;
}
