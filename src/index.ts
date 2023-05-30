
import "./components/export"
import { dispatch } from "./store";
import { getProducts } from "./store/actions";

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    async connectedCallback() {
        dispatch(await getProducts());
        this.render();
    }

    render() {
        const Formulario = this.ownerDocument.createElement("app-formulario");
        const lista = this.ownerDocument.createElement("app-lista");
    
        this.shadowRoot?.appendChild(Formulario);
        this.shadowRoot?.appendChild(lista);
    }
}

customElements.define('app-container', AppContainer)