import React,{Component} from 'react';
import './App.css';

class App extends Component{
 
  constructor(){
    super();
    this.state = {
      listaDeMarcas: [],
      listaDeCarros: [],
      marca: ""
    }
  }

  componentDidMount(){
    fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas')
    .then(response => response.json())
    .then(data => this.setState({ listaDeMarcas: data}))
    .catch(error => console.log(error));
  
  }  
  
  buscarCarros=(e)=>{

    var e = document.getElementById("select");
    var result = e.options[e.selectedIndex].value;
    console.log(result);

    fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas/'+result+'/modelos')
      .then(response => response.json())
      .then(data => this.setState({ listaDeCarros: data.modelos}))
      .catch(error => console.log(error));
    console.log(this.state.listaDeCarros)
  }


  render(){
    return (
      <div className="App">
        <h2>escolhe uma marca ai</h2>
        <select onChange={this.buscarCarros} id="select">
          {this.state.listaDeMarcas.map(e =>{
            return(
              <option value={e.codigo}>{e.nome}</option>
            )
          })}
        </select>
      <h2>escolhe um carrinho agora</h2>
      <select>
          {this.state.listaDeCarros.map(e =>{
            return(
              <option value={e.codigo}>{e.nome}</option>
            )
          })}
        </select>
    </div>
    );
  }
}

export default App;
