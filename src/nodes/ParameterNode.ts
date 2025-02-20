import type from '../types'
import {ParameterDeclaration} from "ts-morph"
import {Parameter} from "../../lib/pascalerni/model/famix"
import {MSEDocument} from "../model/MSEDocument"
import {FamixNode} from "../model/FamixNode"
import {FileAnchorElement} from "../elements";

export class ParameterNode extends FamixNode<ParameterDeclaration, Parameter> {

    constructor(parametre: ParameterDeclaration) {
        super(parametre, new Parameter(MSEDocument.getFamixRepository()),
            parametre.getName().replace(/'/g, "\""), type.PARAMETER);
    }

    execute(): void {
        // Définition du nom
        let name = this.node.getName() == undefined ? this.node.getSourceFile().getBaseName() : this.node.getName()
        this.famixElement.setName(name.replace(/'/g, "\""))

        // Define declaredType
        this.setDeclaredTypeFamix()

        let startNumber = this.node.getSourceFile().getLineAndColumnAtPos(this.node.getPos())
        let endNumber = this.node.getSourceFile().getLineAndColumnAtPos(this.node.getEnd())
        let index = new FileAnchorElement(this.node.getSourceFile().getFilePath(), this.famixElement, startNumber.line, endNumber.line, startNumber.column, endNumber.column)
        index.execute()
        this.famixElement.setSourceAnchor(index.famixElement)

        this.famixElement.setParentBehaviouralEntity(this.parentNode.famixElement)
    }

    setDeclaredTypeFamix(): void {
        if (!this.node.getType().isAny()) {
            // Recherche du type
            let searchedNode = MSEDocument.getProject().search("#" + this.node.getType().getText(), "")
            if (null != searchedNode) {
                this.famixElement.setDeclaredType(searchedNode.famixElement)
            }
        }
    }
}