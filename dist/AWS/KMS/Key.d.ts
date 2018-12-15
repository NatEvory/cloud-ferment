import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Key extends AWSResource<Key_ResourceProperties> {
    constructor(name: string, properties: Key_ResourceProperties);
}
export interface Key_ResourceProperties extends AWSResourceProperties {
    Description?: AWSStringProperty;
    EnableKeyRotation?: boolean;
    Enabled?: boolean;
    KeyPolicy: any;
    KeyUsage?: AWSStringProperty;
    PendingWindowInDays?: number;
    Tags?: Tag[];
}
