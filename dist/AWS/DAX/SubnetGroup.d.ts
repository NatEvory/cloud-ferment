import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class SubnetGroup extends AWSResource<SubnetGroup_ResourceProperties> {
    constructor(name: string, properties: SubnetGroup_ResourceProperties);
}
export interface SubnetGroup_ResourceProperties extends AWSResourceProperties {
    Description?: AWSStringProperty;
    SubnetGroupName?: AWSStringProperty;
    SubnetIds: AWSStringListProperty;
}
