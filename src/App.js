import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor (props) {
    super(props);
    this.state={
      titulo: 'Cadastro de Produtos',
      acao: 0,
      index: '',
      dados: []
    }
  }

  render() {
    let dados = this.state.dados;
    return (
      <div className="App">
        <h2>{this.state.title}</h2>
        <form ref="formulario" className="formulario">
          <input type="text" ref="name" placeholder="Produto" className="campoForm" />
          <input type="text" ref="address" placeholder="Preço" className="campoForm" />
          <button  className="botaoForm">Buscar </button>
        </form>
      </div>
    );  
  }
}

export default App;
