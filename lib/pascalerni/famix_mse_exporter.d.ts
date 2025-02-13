import {FamixBaseElement} from "./famix_base_element";

export declare class FamixMseExporter {
    private element;
    private buffer;
    constructor(packageClass: string, element: FamixBaseElement);
    addProperty(name: string, prop: unknown): void;
    getMSE(): string;
}
