import { AWSResource, AWSStringProperty, AWSStringListProperty } from './AWSResource';
import { CloudFormationFunctionResult } from './CloudFormationFunctionResult';
export declare function Ref(resource: AWSResource<any> | string): CloudFormationFunctionResult;
export declare function GetAtt(resource: AWSResource<any> | string, attribute: string): CloudFormationFunctionResult;
export declare function Join(delimiter: string, parts: AWSStringListProperty): CloudFormationFunctionResult;
export declare function FindInMap(mapName: string, topKey: AWSStringProperty, key: AWSStringProperty): CloudFormationFunctionResult;
