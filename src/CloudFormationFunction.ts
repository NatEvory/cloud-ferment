import { AWSResource,AWSStringProperty, AWSStringListProperty } from './AWSResource';
import { CloudFormationFunctionResult } from './CloudFormationFunctionResult';


export function Ref(resource:AWSResource<any>|string):CloudFormationFunctionResult {
	var resourceName:string;
	if(typeof resource == 'string'){
		resourceName = resource;
	} else {
		resourceName = resource.name;
	}
	return {
		"Ref":resourceName
	}
}

export function GetAtt(resource:AWSResource<any>|string,attribute:string):CloudFormationFunctionResult {
	var resourceName:string;
	if(typeof resource == 'string'){
		resourceName = resource;
	} else {
		resourceName = resource.name;
	}
	return {
		"Fn::GetAtt":[resourceName,attribute]
	}
}

export function Join( delimiter:string, parts:AWSStringListProperty ):CloudFormationFunctionResult {
	return {
		"Fn::Join":[delimiter,parts]
	}
}

export function FindInMap(mapName:string,topKey:AWSStringProperty,key:AWSStringProperty):CloudFormationFunctionResult{
	return {
		"Fn::FindInMap":[mapName,topKey,key]
	}
}
