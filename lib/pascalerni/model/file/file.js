"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const abstract_file_1 = require("./abstract_file");
class File extends abstract_file_1.AbstractFile {
    // @FameProperty(name = "numberOfInternalClones")
    getNumberOfInternalClones() {
        return this.fileNumberOfInternalClones;
    }
    setNumberOfInternalClones(fileNumberOfInternalClones) {
        this.fileNumberOfInternalClones = fileNumberOfInternalClones;
    }
    // @FameProperty(name = "totalNumberOfLinesOfText")
    getTotalNumberOfLinesOfText() {
        return this.fileTotalNumberOfLinesOfText;
    }
    setTotalNumberOfLinesOfText(fileTotalNumberOfLinesOfText) {
        this.fileTotalNumberOfLinesOfText = fileTotalNumberOfLinesOfText;
    }
    // @FameProperty(name = "numberOfKiloBytes")
    getNumberOfKiloBytes() {
        return this.fileNumberOfKiloBytes;
    }
    setNumberOfKiloBytes(fileNumberOfKiloBytes) {
        this.fileNumberOfKiloBytes = fileNumberOfKiloBytes;
    }
    // @FameProperty(name = "numberOfDuplicatedFiles")
    getNumberOfDuplicatedFiles() {
        return this.fileNumberOfDuplicatedFiles;
    }
    setNumberOfDuplicatedFiles(fileNumberOfDuplicatedFiles) {
        this.fileNumberOfDuplicatedFiles = fileNumberOfDuplicatedFiles;
    }
    // @FameProperty(name = "numberOfEmptyLinesOfText")
    getNumberOfEmptyLinesOfText() {
        return this.fileNumberOfEmptyLinesOfText;
    }
    setNumberOfEmptyLinesOfText(fileNumberOfEmptyLinesOfText) {
        this.fileNumberOfEmptyLinesOfText = fileNumberOfEmptyLinesOfText;
    }
    // @FameProperty(name = "numberOfCharacters")
    getNumberOfCharacters() {
        return this.fileNumberOfCharacters;
    }
    setNumberOfCharacters(fileNumberOfCharacters) {
        this.fileNumberOfCharacters = fileNumberOfCharacters;
    }
    // @FameProperty(name = "averageNumberOfCharactersPerLine")
    getAverageNumberOfCharactersPerLine() {
        return this.fileAverageNumberOfCharactersPerLine;
    }
    setAverageNumberOfCharactersPerLine(fileAverageNumberOfCharactersPerLine) {
        this.fileAverageNumberOfCharactersPerLine = fileAverageNumberOfCharactersPerLine;
    }
    // @FameProperty(name = "numberOfLinesOfText")
    getNumberOfLinesOfText() {
        return this.fileNumberOfLinesOfText;
    }
    setNumberOfLinesOfText(fileNumberOfLinesOfText) {
        this.fileNumberOfLinesOfText = fileNumberOfLinesOfText;
    }
    // @FameProperty(name = "numberOfExternalClones")
    getNumberOfExternalClones() {
        return this.fileNumberOfExternalClones;
    }
    setNumberOfExternalClones(fileNumberOfExternalClones) {
        this.fileNumberOfExternalClones = fileNumberOfExternalClones;
    }
    // @FameProperty(name = "numberOfInternalMultiplications")
    getNumberOfInternalMultiplications() {
        return this.fileNumberOfInternalMultiplications;
    }
    setNumberOfInternalMultiplications(fileNumberOfInternalMultiplications) {
        this.fileNumberOfInternalMultiplications = fileNumberOfInternalMultiplications;
    }
    // @FameProperty(name = "numberOfBytes")
    getNumberOfBytes() {
        return this.fileNumberOfBytes;
    }
    setNumberOfBytes(fileNumberOfBytes) {
        this.fileNumberOfBytes = fileNumberOfBytes;
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.File", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("averageNumberOfCharactersPerLine", this.getAverageNumberOfCharactersPerLine());
        exporter.addProperty("numberOfInternalClones", this.getNumberOfInternalClones());
        exporter.addProperty("totalNumberOfLinesOfText", this.getTotalNumberOfLinesOfText());
        exporter.addProperty("numberOfKiloBytes", this.getNumberOfKiloBytes());
        exporter.addProperty("numberOfDuplicatedFiles", this.getNumberOfDuplicatedFiles());
        exporter.addProperty("numberOfLinesOfText", this.getNumberOfLinesOfText());
        exporter.addProperty("numberOfEmptyLinesOfText", this.getNumberOfEmptyLinesOfText());
        exporter.addProperty("numberOfCharacters", this.getNumberOfCharacters());
        exporter.addProperty("numberOfExternalClones", this.getNumberOfExternalClones());
        exporter.addProperty("numberOfInternalMultiplications", this.getNumberOfInternalMultiplications());
        exporter.addProperty("numberOfBytes", this.getNumberOfBytes());
    }
}
exports.File = File;
//# sourceMappingURL=file.js.map