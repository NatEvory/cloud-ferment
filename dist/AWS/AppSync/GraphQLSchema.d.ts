import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class GraphQLSchema extends AWSResource<GraphQLSchema_ResourceProperties> {
    constructor(name: string, properties: GraphQLSchema_ResourceProperties, dependsOn?: string[]);
}
export interface GraphQLSchema_ResourceProperties extends AWSResourceProperties {
    Definition?: AWSStringProperty;
    DefinitionS3Location?: AWSStringProperty;
    ApiId: AWSStringProperty;
}
