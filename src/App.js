import React from 'react'
import Login from './views/login'
import CadastroUsuario  from './views/cadastroUsuario'
import 'bootswatch/dist/flatly/bootstrap.min.css'
import './custom.css'

class App extends React.Component {


  render() {
    return (
      <div>
        <CadastroUsuario></CadastroUsuario>
      </div>
    )
  }

}

export default App;
