import {FamixMseExporter} from "../../famix_mse_exporter";
import {Module} from "./module";
import {File} from "../file/file";

export declare class CompilationUnit extends File {
    private compilationUnitModule;

    getModule(): Module;

    setModule(newModule: Module): void;

    getMSE(): string;

    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
