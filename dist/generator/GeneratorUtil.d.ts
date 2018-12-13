import { Specification } from '../CloudFormationSpecification';
export declare function generate(specificationFile?: string, srcDir?: string, rootSpecDir?: string): Promise<void>;
export declare class SourceGenerator {
    private srcDir;
    private rootSpecDir;
    private spec;
    serviceFolders: string[];
    constructor(srcDir: string, rootSpecDir: string, spec: Specification);
    generate(): Promise<void>;
    private createServiceDirectory;
    private createResourceSrcFile;
    private ensureDirectory;
}
export declare function loadSpecification(filename: string): Promise<Specification>;
