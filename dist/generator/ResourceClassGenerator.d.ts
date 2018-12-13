import { ResourceType, PropertyType, Specification } from '../CloudFormationSpecification';
export declare function generateResourceClass(resourceTypeName: string, namespace: string, spec: Specification): string;
export declare function generateResourceNamespace(namespace: string, spec: Specification): string;
export declare function generateResourceInterface(resourceType: ResourceType, resourceTypeName: string): string;
export declare function generatePropertyTypeInterface(propertyType: PropertyType, propertyTypeName: string, resourceTypeName: string, namespace: string): string;
