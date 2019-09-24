export class App {
    constructor() {
        this.isConnected = false
        this.btnConnect = document.querySelector('button')
        this.aBotonesComprar = document.querySelectorAll('boton-comprar')
        this.btnConnect.addEventListener('click', this.onClickConnect.bind(this))
    }
    onClickConnect() {
        this.isConnected = !this.isConnected
        if (this.isConnected) {
            this.aBotonesComprar.forEach(
                item => item.setAttribute('state', 'connected')
            )
            this.btnConnect.innerHTML = 'Desconectar'
        } else  {
            this.aBotonesComprar.forEach(
                item => item.removeAttribute('state')
            )
            this.btnConnect.innerHTML = 'Conectar'

        }
        console.log(this.isConnected)
    }
}