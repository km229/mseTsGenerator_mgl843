import {FamixBaseElement} from "./famix_base_element";
import {Class} from "./model/famix";

export declare class FamixRepository {
    private elements;
    private famixClasses;
    private idCounter;
    private lang;
    private static repo;
    constructor();
    static getFamixRepo(): FamixRepository;
    createOrGetFamixClass(name: string, isInterface?: boolean): Class;
    getFamixClass(name: string): Class | undefined;
    addElement(element: FamixBaseElement): void;
    getMSE(): string;
}
