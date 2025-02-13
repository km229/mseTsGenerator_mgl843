import {FamixMseExporter} from "../../famix_mse_exporter";
import {AbstractFileAnchor} from "./abstract_file_anchor";

export declare class IndexedFileAnchor extends AbstractFileAnchor {
    private indexedFileAnchorStartPos;
    getStartPos(): number;
    setStartPos(indexedFileAnchorStartPos: number): void;
    private indexedFileAnchorEndPos;
    getEndPos(): number;
    setEndPos(indexedFileAnchorEndPos: number): void;
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
