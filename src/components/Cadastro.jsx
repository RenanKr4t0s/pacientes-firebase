import React from "react";
import FormCadastro from "./FormCadastro";

export default function Cadastro(){
    return(
        <div className="container">
            <div className="container-fluid bg-secondary text-dark p-3 my-3">
                <h1 className="display-4">Cadastro de pacientes</h1>
                <p>Eu sou o componente cadastro</p>
            </div>
            <div className="row">
                <div className="col-md-7">
                    <FormCadastro />
                </div>
                <div className="col-md-5">
                    <h2>Sou um h1 dentro do Cadastro</h2>
                </div>

            </div>
        </div>
    )
}