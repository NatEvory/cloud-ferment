import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class MaintenanceWindow extends AWSResource<MaintenanceWindow_ResourceProperties> {
    constructor(name: string, properties: MaintenanceWindow_ResourceProperties);
}
export interface MaintenanceWindow_ResourceProperties extends AWSResourceProperties {
    StartDate?: AWSStringProperty;
    Description?: AWSStringProperty;
    AllowUnassociatedTargets: boolean;
    Cutoff: number;
    Schedule: AWSStringProperty;
    Duration: number;
    EndDate?: AWSStringProperty;
    Name: AWSStringProperty;
    ScheduleTimezone?: AWSStringProperty;
}
