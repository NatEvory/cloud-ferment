import { ResourceType, PropertyType, Specification } from '../CloudFormationSpecification';
import { SpecificationNamespace } from './SpecificationNamespace';
export declare function generateResourceSourceCode(namespace: SpecificationNamespace, spec: Specification): string;
export declare function generateResourceClass(resourceNamespace: SpecificationNamespace, spec: Specification): string;
export declare function generateResourceInterface(resourceType: ResourceType, resourceName: string): string;
export declare function generatePropertyTypeInterface(propertyType: PropertyType, namespace: SpecificationNamespace): string;
