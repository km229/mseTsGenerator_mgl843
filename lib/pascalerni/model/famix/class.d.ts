import {FamixMseExporter} from "../../famix_mse_exporter";
import {Type} from "./type";

export declare class Class extends Type {
    private classIsTestCase;
    getIsTestCase(): boolean;
    setIsTestCase(classIsTestCase: boolean): void;
    private classIsInterface;
    getIsInterface(): boolean;
    setIsInterface(classIsInterface: boolean): void;
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
