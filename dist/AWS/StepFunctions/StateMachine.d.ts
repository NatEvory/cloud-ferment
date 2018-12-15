import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class StateMachine extends AWSResource<StateMachine_ResourceProperties> {
    constructor(name: string, properties: StateMachine_ResourceProperties);
}
export interface StateMachine_ResourceProperties extends AWSResourceProperties {
    DefinitionString: AWSStringProperty;
    StateMachineName?: AWSStringProperty;
    RoleArn: AWSStringProperty;
}
