export declare class SpecificationNamespace {
    fullyQualifiedNamespace: string;
    private namespaceParts;
    constructor(fullyQualifiedNamespace: string);
    getRoot(): string;
    getService(): string;
    getResource(): string;
    getProperty(): string;
    getNamespaceParts(fullyQualifiedNamespace: string): string[];
}
