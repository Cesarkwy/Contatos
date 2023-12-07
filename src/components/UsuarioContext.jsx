import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UsuarioContext = createContext({});

export default function UsuarioProvider({ children }) {
    const [id, setId] = useState("");
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");

    const [usuarios, setUsuarios] = useState([]);
    const url = "http://192.168.2.11:9081/usuarios/";

    function buscarUsuarios() {
        fetch(url)
            .then((respFetch) => respFetch.json())
            .then((respJson) => setUsuarios(respJson))
            .catch((erro) => console.warn(erro))
        console.log("passou no getUsuarios", usuarios);
    }

    function gravarDados() {
        if (id) {
            axios.put(url + id, {
                nome: nome,
                telefone: telefone,
                email: email
            })
                .then((resp) => atualizaListaUsuarioEditado(resp)).catch((erro) => console.log(erro));
        } else {
            axios.post(url, {
                nome: nome,
                telefone: telefone,
                email: email
            })
                .then((resp) => atualizaListaUsuarioNovo(resp)).catch((erro) => console.log(erro));
        }
    }

    function atualizaListaUsuarioEditado(response) {
        console.log(response.data, "edit");
        let { id } = response.data;
        const index = usuarios.findIndex(item => item.id == id);
        let users = usuarios;
        users[index].nome = nome;
        users[index].telefone = telefone;
        users[index].email = email;
        setUsuarios(users);
    }

    function atualizaListaUsuarioNovo(response) {
        console.log("atualizaListaUsuarioNovo", response.data);
        let { id, nome, telefone, email } = response.data;
        let obj = { "id": id, "nome": nome, "telefone": telefone, "email": email };
        let users = usuarios;
        users.push(obj);
        setUsuarios(users);
    }

    function apagarUsuario(cod) {
        axios.delete(url + cod).then(() => {
                setUsuarios(usuarios.filter(item => item.id !== cod));
            });
    }

    return (
        <UsuarioContext.Provider value={{ id, nome, telefone, email, setId, setNome, setTelefone, setEmail, gravarDados, usuarios, buscarUsuarios, apagarUsuario }}>
            {children}
        </UsuarioContext.Provider>
    );
}
