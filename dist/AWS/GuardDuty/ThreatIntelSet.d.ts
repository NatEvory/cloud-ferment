import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class ThreatIntelSet extends AWSResource<ThreatIntelSet_ResourceProperties> {
    constructor(name: string, properties: ThreatIntelSet_ResourceProperties);
}
export interface ThreatIntelSet_ResourceProperties extends AWSResourceProperties {
    Format: AWSStringProperty;
    Activate: boolean;
    DetectorId: AWSStringProperty;
    Name?: AWSStringProperty;
    Location: AWSStringProperty;
}
