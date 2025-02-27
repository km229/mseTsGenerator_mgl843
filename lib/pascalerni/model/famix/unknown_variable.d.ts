import {FamixMseExporter} from "../../famix_mse_exporter";
import {StructuralEntity} from "./structural_entity";

export declare class UnknownVariable extends StructuralEntity {
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
