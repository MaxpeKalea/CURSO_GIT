export class MiComponente extends HTMLElement {
   set template() {
       `
        <style>
        div {
            background-color: rgb(187, 238, 213);
        }
        h2 {
            background-color: rgb(185, 255, 255);
        }
        </style>
        <div>
        <h2>Ejemplo de Componente</h2>
        <p>Esto es un componente</p>
        </div>
        `
   }
    constructor() {
        super()
        
        const shadow = this.attachShadow({mode:'open'})

        shadow.innerHTML = template
    }

}

customElements.define('mi-componente', MiComponente) 

