import {FamixMseExporter} from "./famix_mse_exporter";
import {FamixRepository} from "./famix_repository";

export declare abstract class FamixBaseElement {
    id: number;
    constructor(repo: FamixRepository);
    abstract getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
