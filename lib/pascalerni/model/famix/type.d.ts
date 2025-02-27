import {FamixMseExporter} from "../../famix_mse_exporter";
import {StructuralEntity} from "./structural_entity";
import {ParameterizedType} from "./parameterized_type";
import {BehaviouralEntity} from "./behavioural_entity";
import {ContainerEntity} from "./container_entity";
import {Attribute} from "./attribute";
import {Reference} from "./reference";
import {Inheritance} from "./inheritance";
import {TypeAlias} from "./type_alias";
import {Method} from "./method";

export declare class Type extends ContainerEntity {
    private typeContainer;

    getContainer(): ContainerEntity;

    setContainer(newContainer: ContainerEntity): void;

    private typeIncomingReferences;

    getIncomingReferences(): Set<Reference>;

    addIncomingReferences(typeIncomingReferences: Reference): void;

    private typeStructuresWithDeclaredType;

    getStructuresWithDeclaredType(): Set<StructuralEntity>;
    addStructuresWithDeclaredType(typeStructuresWithDeclaredType: StructuralEntity): void;
    private typeTypeAliases;
    getTypeAliases(): Set<TypeAlias>;
    addTypeAliases(typeTypeAliases: TypeAlias): void;
    private typeSuperInheritances;
    getSuperInheritances(): Set<Inheritance>;
    addSuperInheritances(typeSuperInheritances: Inheritance): void;
    private typeSubInheritances;
    getSubInheritances(): Set<Inheritance>;
    addSubInheritances(typeSubInheritances: Inheritance): void;
    private typeBehavioursWithDeclaredType;
    getBehavioursWithDeclaredType(): Set<BehaviouralEntity>;
    addBehavioursWithDeclaredType(typeBehavioursWithDeclaredType: BehaviouralEntity): void;
    private typeMethods;
    getMethods(): Set<Method>;
    addMethods(typeMethods: Method): void;
    private typeAttributes;
    getAttributes(): Set<Attribute>;
    addAttributes(typeAttributes: Attribute): void;
    private typeArgumentsInParameterizedTypes;
    getArgumentsInParameterizedTypes(): Set<ParameterizedType>;
    addArgumentsInParameterizedTypes(newArgumentsInParameterizedTypes: ParameterizedType): void;
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
