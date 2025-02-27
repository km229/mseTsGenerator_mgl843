import {FamixMseExporter} from "../../famix_mse_exporter";
import {FamixBaseElement} from "../../famix_base_element";

export declare class Entity extends FamixBaseElement {
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
