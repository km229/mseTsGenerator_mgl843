"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const exception_1 = require("./exception");
class DeclaredException extends exception_1.Exception {
    // oneMany.Getter
    // @FameProperty(name = "definingMethod", opposite = "declaredExceptions")
    getDefiningMethod() {
        return this.declaredExceptionDefiningMethod;
    }
    // oneMany.Setter
    setDefiningMethod(newDefiningMethod) {
        this.declaredExceptionDefiningMethod = newDefiningMethod;
        newDefiningMethod.getDeclaredExceptions().add(this);
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.DeclaredException", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("definingMethod", this.getDefiningMethod());
    }
}
exports.DeclaredException = DeclaredException;
//# sourceMappingURL=declared_exception.js.map