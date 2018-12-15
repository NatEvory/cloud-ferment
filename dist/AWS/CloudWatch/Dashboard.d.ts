import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Dashboard extends AWSResource<Dashboard_ResourceProperties> {
    constructor(name: string, properties: Dashboard_ResourceProperties);
}
export interface Dashboard_ResourceProperties extends AWSResourceProperties {
    DashboardName?: AWSStringProperty;
    DashboardBody: AWSStringProperty;
}
