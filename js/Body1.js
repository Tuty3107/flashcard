import Body from "./Body.js"

export default class Body1 {
    constructor(root) {
        this.root = root;
        const bodyView = new Body();
        this.root.appendChild(bodyView.element.root)
        
    }
}