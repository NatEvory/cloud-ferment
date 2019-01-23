import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class MaintenanceWindowTarget extends AWSResource<MaintenanceWindowTarget_ResourceProperties> {
    constructor(name: string, properties: MaintenanceWindowTarget_ResourceProperties, dependsOn?: string[]);
}
export interface MaintenanceWindowTarget_ResourceProperties extends AWSResourceProperties {
    OwnerInformation?: AWSStringProperty;
    Description?: AWSStringProperty;
    WindowId: AWSStringProperty;
    ResourceType: AWSStringProperty;
    Targets: MaintenanceWindowTarget_Targets[];
    Name?: AWSStringProperty;
}
export interface MaintenanceWindowTarget_Targets {
    Values?: AWSStringListProperty;
    Key: AWSStringProperty;
}
