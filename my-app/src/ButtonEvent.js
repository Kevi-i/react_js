import React from "react";

class ButtonEvent extends React.Component{
constructor(props) {
        super(props)
        this.state = {nr_clicks: 0}
    }

    click(){
        console.log('Opa! Você clicou no botão!!')
    }

    render(){
        return <>
            <button onClick={this.click}>Clique aqui para imprimir uma mensagem no console do browser.</button>
            <label>Você clicou {this.state.nr_clicks} x no botão</label>
        </>        
    }

}

export default ButtonEvent;