import { useEffect, useState } from "react";
import Menu from "./Navegação/Menu";
import Ativos from "./Ativos/Ativos";
import Destinatarios from './Destinatario/Destinatarios'
import VisualizarAtivos from "./Visualizar/VisualizarAtivos";
import VisualizarDestinatarios from "./Visualizar/VisualizarDestinatarios";
import CadastroAtivos from "./Cadastro/CadastroAtivos";
import CadastroManutenção from "./Cadastro/CadastroManutenção";
import CadastroDestinatarios from "./Cadastro/CadastroDestinatarios";
import Login from "./Login/Login";
import Calendario from "./Manutenção/Calendario";
import Home from "./home";
import Manutencao from "./Manutenção/manutenção";
import VisualizarManutencao from "./Visualizar/VisualizarManutenção";
import axios from "axios";

export default function Roteador() {
    const [tela, setTela] = useState('Home');
    const [verificacaoToken, setVerificacaoToken] = useState("");

    useEffect(() => {
        verificarToken();
    }, []);

    const verificarToken = async () => {
        let token = localStorage.getItem("token");
        console.log(token);
        if (token === null || token === "") setVerificacaoToken(false);
        else {
            try {
                let response = await axios.post("http://localhost:8000/autenticacao/verificarToken", token);
                if (response.data) setVerificacaoToken(true);
                else {
                    localStorage.setItem("token", null);
                    setVerificacaoToken(false);
                }
            } catch (e) {
                localStorage.setItem("token", null);
                setVerificacaoToken(false);
            }
        }
    }

    const selecionarView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
        console.log(valor);
    }

    const botoes = ['Home', 'Destinatarios', 'Ativos', 'Manutenções', 'Dashboard', 'Configurações'];

    const construirView = () => {

        if (tela === 'Login') {
            return (
                <Login setTela={setTela} />
            )
        }

        else if (tela === 'Home') {
            if (verificacaoToken) {
                return (
                    <>
                        <Menu seletorView={selecionarView} botoes={botoes} />
                        <Home setTela={setTela} />
                    </>
                )
            } else return <Login setTela={setTela} />
        }

        else if (tela === 'Ativos') {
            if (verificacaoToken) {
                return (
                    <>
                        <Menu seletorView={selecionarView} botoes={botoes} />
                        <Ativos setTela={setTela} />
                    </>
                )
            } else return <p>É necessário realizar o login para continuar para a página desejada!</p>
        }

        else if (tela === 'Login') {

            return (
                <>
                    <Login setTela={setTela} />
                </>
            )
        }

        else if (tela === 'CadastroAtivos') {
            if (verificacaoToken) {
                return (
                    <>
                        <Menu seletorView={selecionarView} botoes={botoes} />
                        <CadastroAtivos setTela={setTela} />
                    </>
                )
            } else return <p>É necessário realizar o login para continuar para a página desejada!</p>
        }

        else if (tela === 'CadastroDestinatarios') {
            if (verificacaoToken) {
                return (
                    <>
                        <Menu seletorView={selecionarView} botoes={botoes} />
                        <CadastroDestinatarios setTela={setTela} />
                    </>
                )
            } else return <p>É necessário realizar o login para continuar para a página desejada!</p>
        }

        else if (tela === 'VisualizarAtivo') {
            if (verificacaoToken) {
                return (
                    <>
                        <Menu seletorView={selecionarView} botoes={botoes} />
                        <VisualizarAtivos setTela={setTela} />
                    </>
                )
            } else return <p>É necessário realizar o login para continuar para a página desejada!</p>
        }

        else if (tela === 'VisualizarDestinatarios') {
            if (verificacaoToken) {
                return (
                    <>
                        <Menu seletorView={selecionarView} botoes={botoes} />
                        <VisualizarDestinatarios setTela={setTela} />
                    </>
                )
            } else return <p>É necessário realizar o login para continuar para a página desejada!</p>
        }

        else if (tela === 'Destinatarios') {
            if (verificacaoToken) {
                return (
                    <>
                        <Menu seletorView={selecionarView} botoes={botoes} />
                        <Destinatarios setTela={setTela} />
                    </>
                )
            } else return <p>É necessário realizar o login para continuar para a página desejada!</p>
        }

        else if (tela === 'Manutenções') {
            if (verificacaoToken) {
                return (
                    <>
                        <Menu seletorView={selecionarView} botoes={botoes} />
                        <Manutencao setTela={setTela} />
                    </>
                )
            } else return <p>É necessário realizar o login para continuar para a página desejada!</p>
        }

        else if (tela === 'CadastroManutenção') {
            if (verificacaoToken) {
                return (
                    <>
                        <Menu seletorView={selecionarView} botoes={botoes} />
                        <CadastroManutenção setTela={setTela} />
                    </>
                )
            } else return <p>É necessário realizar o login para continuar para a página desejada!</p>
        }

        else if (tela === 'VisualizarAgendamento') {
            if (verificacaoToken) {
                return (
                    <>
                        <Menu seletorView={selecionarView} botoes={botoes} />
                        <Calendario setTela={setTela} />
                    </>
                )
            } else return <p>É necessário realizar o login para continuar para a página desejada!</p>
        }

        else if (tela === 'VisualizarManutenção') {
            if (verificacaoToken) {
                return (
                    <>
                        <Menu seletorView={selecionarView} botoes={botoes} />
                        <VisualizarManutencao setTela={setTela} />
                    </>
                )
            } else return <p>É necessário realizar o login para continuar para a página desejada!</p>
        }
        else if (tela === 'Dashboard') {
            return (<>
                <Menu seletorView={selecionarView} botoes={botoes} />
                {/* <Serviços tema="#5eb4fc" red="#fc6464" green="#00ff00" /> */}
            </>
            )
        } else {
            return (
                <>
                    <Menu seletorView={selecionarView} botoes={botoes} />
                    {/* <FormularioCadastroCliente seletorView={selecionarView} tema="#5eb4fc" azul="#5eb4fc" /> */}
                </>
            )
        }
    }

    return (
        construirView()
    )
}