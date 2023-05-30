import { addObserver, appState } from "../../store";
import style from "./style.css";

class lista extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this);
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = "";
        appState.products.forEach((product)=>{
            const pcontenedor = this.ownerDocument.createElement("article");
            const ptitulo = this.ownerDocument.createElement("h3");
            ptitulo.textContent = product.nombre;
            const pinstrucciones = this.ownerDocument.createElement("h4");
            pinstrucciones.textContent = product.instrucciones;
            const pingredientes = this.ownerDocument.createElement("h4");
            pingredientes.textContent = product.ingredientes;

            pcontenedor?.appendChild(ptitulo);
            pcontenedor?.appendChild(pingredientes);
            pcontenedor?.appendChild(pinstrucciones);
            this.shadowRoot?.appendChild(pcontenedor);
        })

    const css = this.ownerDocument.createElement("style");
    css.innerHTML = style;
    this.shadowRoot?.appendChild(css);
        
    }
}

customElements.define("app-lista", lista)
export default lista

