import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class DHCPOptions extends AWSResource<DHCPOptions_ResourceProperties> {
	constructor(name:string,properties:DHCPOptions_ResourceProperties){
		super(name,properties,"AWS::EC2::DHCPOptions");
	}
}

export interface DHCPOptions_ResourceProperties extends AWSResourceProperties {
	DomainName?:AWSStringProperty;
	DomainNameServers?:AWSStringListProperty;
	NetbiosNameServers?:AWSStringListProperty;
	NetbiosNodeType?:number;
	NtpServers?:AWSStringListProperty;
	Tags?:Tag[];

}
