import { useState } from "react"

export default function FormCadastro(){
    const camposIniciais = {
        nomeCompleto:'',
        telefone:'',
        email:'',
        endereco:'',
      }
      
      let [valor, setValor] = useState(camposIniciais)

      const manipouladorInputChange = e =>{
        let {name, value}=e.target
        setValor({...valor, [name]:value})
        console.log([name], value)
      }
      const manipouladorFormEnvio = e =>{
        e.preventDefault()
      }
    
    return(
        <form onSubmit={manipouladorFormEnvio}>
            <div className="form-group">
                    <div className="input-group-text">
                        <div className="input-text">
                            <i className="fa fa-user me-2"></i>
                        </div>
                        <input className="form-control" placeholder="Nome Completo" type="text" 
                            name="nomeCompleto" onChange={manipouladorInputChange}>
                        </input>
                    </div>
                    <div className="row mx-0">
                        <div className="input-group-text col-6">
                            <div className="input-text">
                                <i className="fa fa-mobile-alt me-2"></i>
                            </div>
                            <input className="form-control" placeholder="Telefone" type="tel"
                                name="telefone" onChange={manipouladorInputChange}>
                            </input>
                        </div>
                        <div className="input-group-text col-6">
                            <div className="input-text">
                                <i className="fa fa-envelope me-2"></i>
                            </div>
                            <input className="form-control" placeholder="Email" type="email" 
                                name="email" onChange={manipouladorInputChange}>
                            </input>
                        </div>
                    </div>
                    <div className="input-group-text">
                        <div className="input-text">
                            <i className="fa fa-location-dot me-2"></i>
                        </div>
                        <input className="form-control" placeholder="Endereço" type="textarea"
                            name="endereco" onChange={manipouladorInputChange}>
                        </input>
                    </div>
            </div>
        </form>
    )

}