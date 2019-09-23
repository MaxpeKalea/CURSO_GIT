export class MiComponente extends HTMLElement {
    constructor() {
        super()

        const template = `
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
        
        const shadow = this.attachShadow({mode:'open'})

        shadow.innerHTML = template
    }
}

customElements.define('mi-componente', MiComponente) 