import React,{Component} from 'react';
import './App.css';

class App extends Component{
  
  constructor(){
    super();
    this.state = {
      user: "",
      listaRepos:[]
    }
  }

  atualizaUser = (e)=>{
    this.setState({user: e.target.value});
    // console.log(this.state.user);
  }
  preencherMensagem = (mensagem) =>{
    const p = document.querySelector("#mensagem");
    p.innerHTML = mensagem;
  }

  preencherLista = (e)=>{
    if(e.message === "Not Found"){
      this.setState({listaRepos: []});
      console.log("error men");
      this.preencherMensagem('repositorio nao encontrado KKKKKKKKKKKKKKKK');
    }
    else if(e.message === "API rate limit exceeded for 189.19.219.247. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)"){
      this.setState({listaRepos: []});
      console.log("error men2");
      this.preencherMensagem('OS CARAS BLOQUEARAM SEU IP AGUARDA AI IRMAOK ASDIOHAYUIF7FUAIFYA');
    }
    else{
      this.setState({listaRepos: e});
      this.preencherMensagem('');
      console.log(this.state.listaRepos);
    }
  }

  buscarUser = (e)=>{
    e.preventDefault();
    const url = "https://api.github.com/users/"+this.state.user+"/repos"
    console.log(url);

    fetch(url)
    .then(resposta => resposta.json())
    .then(data => this.preencherLista(data)) 
    .catch(error => this.preencherLista(error)); 
  }

  render(){
    return (
      <div className="App">
     
        <h1>BUSCAR REPOSITORIOS AQUI MESMOAHAHAHAHAAH</h1>
        <h2>✧*｡٩(ˊᗜˋ*)و✧*｡</h2>
        <form>
          <label for="user">Insira o usuario aqui :DDD</label>
          <input type="text" id="user" onChange={this.atualizaUser}/>
          <br/>
          <button onClick={this.buscarUser}>ENVIARKKKKK</button>
        </form>
        <p id="mensagem"></p>
        <table id="tabela">
          <thead>
            <tr className='linhaTabela'>
              <th>Id</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Data criacao</th>
              <th>Tamanho</th>
            </tr>
          </thead>

          <tbody>
              {this.state.listaRepos.map(e =>{
                  return (
                      <tr className='linhaTabela'>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.description}</td>
                        <td>{e.created_at}</td>
                        <td>{e.size}</td>
                      </tr>
            )})}
          </tbody>
        </table>

      </div>
    );
  }
}

export default App;
