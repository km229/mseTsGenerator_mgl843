import {FamixMseExporter} from "../../famix_mse_exporter";
import {Entity} from "./entity";
import {AnnotationTypeAttribute} from "./annotation_type_attribute";
import {AnnotationInstance} from "./annotation_instance";

export declare class AnnotationInstanceAttribute extends Entity {
    private annotationInstanceAttributeAnnotationTypeAttribute;

    getAnnotationTypeAttribute(): AnnotationTypeAttribute;

    setAnnotationTypeAttribute(newAnnotationTypeAttribute: AnnotationTypeAttribute): void;

    private annotationInstanceAttributeParentAnnotationInstance;

    getParentAnnotationInstance(): AnnotationInstance;

    setParentAnnotationInstance(newParentAnnotationInstance: AnnotationInstance): void;

    private annotationInstanceAttributeValue;

    getValue(): string;
    setValue(annotationInstanceAttributeValue: string): void;
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
