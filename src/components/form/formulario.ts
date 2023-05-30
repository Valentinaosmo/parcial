import { dispatch } from "../../store";
import { saveProduct } from "../../store/actions";
import { Product } from "../../types/products";
import style from "./style.css";


const userInputs: Product = {
    nombre: "",
    imagen: "",
    ingredientes : "",
    instrucciones : "",
}

export default class Formulario extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const lnombre = this.ownerDocument.createElement('label');
        lnombre.textContent= "Nombre"
        const linstrucciones = this.ownerDocument.createElement('label');
        linstrucciones.textContent= "instrucciones"
        const lingredientes = this.ownerDocument.createElement('label');
        lingredientes.textContent= "ingredientes"
        
        const nombre = this.ownerDocument.createElement('input');
        nombre.addEventListener("change", (e: any) => {
            userInputs.nombre = e.target.value;
          });
        const instrucciones = this.ownerDocument.createElement('input');
        instrucciones.type = "string";
        instrucciones.addEventListener("change", (e: any) => {
            userInputs.instrucciones = e.target.value;
          });
          const ingredientes = this.ownerDocument.createElement('input');
        ingredientes.addEventListener("change", (e: any) => {
            userInputs.ingredientes = e.target.value;
          });
        const boton = this.ownerDocument.createElement('button');
        boton.textContent= "Guardar"
        boton.addEventListener("click", async () => {
            console.log(userInputs)
            dispatch(await saveProduct(userInputs))

          });
        this.shadowRoot?.appendChild( lnombre );
        this.shadowRoot?.appendChild( nombre );
        this.shadowRoot?.appendChild( lingredientes );
        this.shadowRoot?.appendChild( ingredientes );
        this.shadowRoot?.appendChild( linstrucciones );
        this.shadowRoot?.appendChild( instrucciones );
        this.shadowRoot?.appendChild( boton );

    const css = this.ownerDocument.createElement("style");
    css.innerHTML = style;
    this.shadowRoot?.appendChild(css);

    }
}

customElements.define('app-formulario',Formulario);