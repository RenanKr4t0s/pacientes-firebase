import { useState, useEffect } from "react"

export default function FormCadastro(props){

    const objetoVazio = {
        nomeCompleto:'',
        telefone:'',
        email:'',
        endereco:'',
    }

    const camposIniciais = {
        nomeCompleto:'',
        telefone:'',
        email:'',
        endereco:'',
    }
    let [valor, setValor] = useState(camposIniciais)
    let object = props.pacientes[props.idAtual]

    useEffect(()=>{
        if(props.idAtual == ''){
            setValor({
                ...camposIniciais
            })
        }else {
            setValor(object)
        } 
    }, [props.idAtual, props.pacientes])

    const manipuladorInputChange = e =>{
    let {name, value}=e.target
        setValor({...valor, [name]:value})
    }
    const manipuladorFormEnvio = e =>{
        e.preventDefault();
        if(camposIniciais !== valor){
            props.createUserData(valor);
            props.setIdAtual('');
        }
        else{
            console.log("Tentativa de salvar vazio")
            alert("Por favor, preencher o formulário completo")
        }

    }

    return(
        <form>
            <div className="form-group">
                <div className="input-group-text mt-1">
                    <div className="input-text">
                        <i className="fa fa-user me-2"></i>
                    </div>
                    <input className="form-control" placeholder="Nome Completo" type="text" 
                        name="nomeCompleto" onChange={manipuladorInputChange} value={valor.nomeCompleto}>
                    </input>
                </div>
                <div className="row mx-0 mt-1">
                    <div className="input-group-text col-6">
                        <div className="input-text">
                            <i className="fa fa-mobile-alt me-2"></i>
                        </div>
                        <input className="form-control" placeholder="Telefone" type="tel"
                            name="telefone" onChange={manipuladorInputChange} value={valor.telefone} > 
                        </input>
                    </div>
                    <div className="input-group-text col-6">
                        <div className="input-text">
                            <i className="fa fa-envelope me-2"></i>
                        </div>
                        <input className="form-control" placeholder="Email" type="email" 
                            name="email" onChange={manipuladorInputChange} value={valor.email}>
                        </input>
                    </div>
                </div>
                <div className="input-group-text mt-1">
                    <div className="input-text">
                        <i className="fa fa-location-dot me-2"></i>
                    </div>
                    <textarea className="form-control" placeholder="Endereço" type="textarea"
                        name="endereco" onChange={manipuladorInputChange}value={valor.endereco}>
                    </textarea>
                </div>
                <div class="d-grid gap-2 col-12 mt-2">
                    <button className="btn btn-primary" type="submit" 
                        onClick={manipuladorFormEnvio} value="Salvar">Salvar</button>
                </div>
            </div>
        </form>
    )

}