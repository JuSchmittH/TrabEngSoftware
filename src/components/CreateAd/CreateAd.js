import React, { Component } from 'react';
import { Navbar } from '../Navbar'
import './CreateAd.css';


class CreateAd extends Component {
    render() {
        return(
            <div>
                <Navbar/>

                <div className="container my-5">
                    <form>
                        <div className="form-group">
                            <label className="formLabel" for="nomejogo">Nome do Jogo</label>
                            <input type="text" className="form-control" id="nomeJogo" aria-describedby="nomeJogoHelp" placeholder="Nome do jogo"/>
                                <small id="nomeJogoHelp" className="form-text text-muted">Informar título do jogo que quer anunciar.</small>
                        </div>
                        <div className="form-group">
                            <label className="formLabel" for="tipoJogo">Tipo do jogo</label>
                            <input type="text" className="form-control" id="tipoJogo" aria-describedby="tipoJogoHelp" placeholder="Tipo do jogo" />
                            <small id="tipoJogoHelp" className="form-text text-muted">Ex. Aventura.</small>
                        </div>
                        <div className="form-group">
                            <label className="formLabel" for="platJogo">Tipo do jogo</label>
                            <input type="text" className="form-control" id="platJogo" aria-describedby="platJogoHelp" placeholder="Plataforma do jogo" />
                            <small id="platJogoHelp" className="form-text text-muted">Ex. XBOX, PS2, PS3...</small>
                        </div>
                        <div className="form-group">
                            <label className="formLabel" for="valorJogo">Tipo do jogo</label>
                            <input type="number" className="form-control" id="valorJogo" aria-describedby="valorHelp" placeholder="Valor do jogo" />
                            <small id="valorHelp" className="form-text text-muted">Valor em reais.</small>
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="estadoRadio" id="estadoRadio1" value="option1" checked/>
                                <label className="form-check-label" for="estadoRadio1">
                                    Novo
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="estadoRadio" id="estadoRadio2" value="option2"/>
                                <label className="form-check-label" for="estadoRadio2">
                                    Usado
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="estadoRadio" id="estadoRadio3" value="option2" />
                                <label className="form-check-label" for="estadoRadio3">
                                    Semi-novo
                                </label>
                            </div>
                        </div>
                        {/* FIXME- botacao inclui jogo no bd e retorna para a tela de pesquisa */}
                        <button type="submit" className="btn btn-dark">Criar Anúncio</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default CreateAd;