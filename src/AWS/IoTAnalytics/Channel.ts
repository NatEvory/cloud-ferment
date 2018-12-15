import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Channel extends AWSResource<Channel_ResourceProperties> {
	constructor(name:string,properties:Channel_ResourceProperties){
		super(name,properties,"AWS::IoTAnalytics::Channel");
	}
}

export interface Channel_ResourceProperties extends AWSResourceProperties {
	ChannelName?:AWSStringProperty;
	RetentionPeriod?:Channel_RetentionPeriod;
	Tags?:Tag[];

}
export interface Channel_RetentionPeriod {
	NumberOfDays?:number;
	Unlimited?:boolean;

}
