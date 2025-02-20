import {FamixMseExporter} from "../../famix_mse_exporter";
import {ScopingEntity} from "./scoping_entity";

export declare class Namespace extends ScopingEntity {
    private namespaceNumberOfAttributes;
    getNumberOfAttributes(): number;
    setNumberOfAttributes(namespaceNumberOfAttributes: number): void;
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
