import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class ReceiptFilter extends AWSResource<ReceiptFilter_ResourceProperties> {
    constructor(name: string, properties: ReceiptFilter_ResourceProperties, dependsOn?: string[]);
}
export interface ReceiptFilter_ResourceProperties extends AWSResourceProperties {
    Filter: ReceiptFilter_Filter;
}
export interface ReceiptFilter_Filter {
    IpFilter: ReceiptFilter_IpFilter;
    Name?: AWSStringProperty;
}
export interface ReceiptFilter_IpFilter {
    Policy: AWSStringProperty;
    Cidr: AWSStringProperty;
}
