import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class NotebookInstance extends AWSResource<NotebookInstance_ResourceProperties> {
    constructor(name: string, properties: NotebookInstance_ResourceProperties);
}
export interface NotebookInstance_ResourceProperties extends AWSResourceProperties {
    KmsKeyId?: AWSStringProperty;
    VolumeSizeInGB?: number;
    DirectInternetAccess?: AWSStringProperty;
    SubnetId?: AWSStringProperty;
    NotebookInstanceName?: AWSStringProperty;
    InstanceType: AWSStringProperty;
    LifecycleConfigName?: AWSStringProperty;
    SecurityGroupIds?: AWSStringListProperty;
    RoleArn: AWSStringProperty;
    Tags?: Tag[];
}
