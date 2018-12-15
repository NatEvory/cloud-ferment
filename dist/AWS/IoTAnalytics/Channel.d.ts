import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Channel extends AWSResource<Channel_ResourceProperties> {
    constructor(name: string, properties: Channel_ResourceProperties);
}
export interface Channel_ResourceProperties extends AWSResourceProperties {
    ChannelName?: AWSStringProperty;
    RetentionPeriod?: Channel_RetentionPeriod;
    Tags?: Tag[];
}
export interface Channel_RetentionPeriod {
    NumberOfDays?: number;
    Unlimited?: boolean;
}
