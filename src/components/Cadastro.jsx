import React, { useState } from "react";
import FormCadastro from "./FormCadastro";
import database from "../database/firebase";
import { ref, set, child, get } from "firebase/database";


function Testar(){
    console.log(database.child('pacientes'))
}

export default function Cadastro(){
    const [pacientes, setPacientes] = useState({});
    const [idAtual, setIdAtual] = useState('')

    function readUserData(){
        const dbRef = ref(database)
        get(child(dbRef, 'pacientes')).then((snapshot)=>{
            if (snapshot.exists()){
                setPacientes(snapshot.val())
            } else{
                console.log("No data available");
            }
        }).catch((error)=>{
            console.error(error);
        })
    }
    function createUserData(obj){
        set(ref(database, "pacientes/"+obj.nomeCompleto),obj)
        readUserData()
      }
    


    return(
        <div className="container">
            <div className="container-fluid bg-secondary text-dark p-3 my-3">
                <h1 className="display-4">Cadastro de pacientes</h1>
                <p>Eu sou o componente cadastro</p>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <FormCadastro {...({createUserData, idAtual, setIdAtual, pacientes})}/>
                </div>
                <div className="col-md-6">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">Telefone</th>
                            <th scope="col">Email</th>
                            <th scope="col">Endereco</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                    {   Object.keys(pacientes).map(id =>{
                            return(
                                <tr>
                                    <td>{pacientes[id].nomeCompleto}</td>
                                    <td>{pacientes[id].telefone}</td>
                                    <td>{pacientes[id].email}</td>
                                    <td>{pacientes[id].endereco}</td>
                                    <td>
                                        <a className="btn btn-primary btn-sm mb-1" onClick={()=>{setIdAtual(id)}}>
                                            <i className="fas fa-pencil-alt"></i>
                                        </a>
                                        <a className="btn btn-danger btn-sm mb-1" onClick={()=>{console.log(idAtual)}}>
                                            <i className="fas fa-trash-alt"></i>
                                        </a>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
                </div>
                <button className="btn btn-secondary mt-3" onClick={readUserData}>Ver Pacientes Listados</button>

            </div>
        </div>
    )
}