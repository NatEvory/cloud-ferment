import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class TrunkInterfaceAssociation extends AWSResource<TrunkInterfaceAssociation_ResourceProperties> {
    constructor(name: string, properties: TrunkInterfaceAssociation_ResourceProperties, dependsOn?: string[]);
}
export interface TrunkInterfaceAssociation_ResourceProperties extends AWSResourceProperties {
    BranchInterfaceId: AWSStringProperty;
    GREKey?: number;
    TrunkInterfaceId: AWSStringProperty;
    VLANId?: number;
}
