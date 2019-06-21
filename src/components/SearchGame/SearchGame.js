import React, { Component } from 'react';
import { Navbar } from '../Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchGame.css';

class SearchGame extends Component {
  constructor() {
    super();
    this.state = {
      wantedGameName: '',
      gamesList: [
        {
          anuncio: 1,
          nome: 'God Of War',
          tipo: 'Aventura',
          plataforma: 'PS2',
          estado: 'Novo',
          valor: 123
        },
        {
          anuncio: 2,
          nome: 'God Of Teste',
          tipo: 'Aventura',
          plataforma: 'PS2',
          estado: 'Usado',
          valor: 123
        }
      ]
    };
  }

  onChangeSearch = () => {
    this.showGames(this.state.wantedGameName);
  };

  showGames = gameName => {
    return this.state.gamesList.map((game, id) => {
      const { anuncio, nome, tipo, plataforma, estado, valor } = game;
      if (!gameName) {
        return (
          <tr>
            <th scope="row">{anuncio}</th>
            <td>{nome}</td>
            <td>{tipo}</td>
            <td>{plataforma}</td>
            <td>{estado}</td>
            <td>{valor}</td>
            <td>
              <a href="/">Ver mais detalhes</a>
            </td>
            <td>
              <a href="/">Troca</a>
            </td>
          </tr>
        );
      } else {
        if (gameName === nome) {
          return (
            <tr>
              <th scope="row">{anuncio}</th>
              <td>{nome}</td>
              <td>{tipo}</td>
              <td>{plataforma}</td>
              <td>{estado}</td>
              <td>{valor}</td>
              <td>
                <a href="/">Ver mais detalhes</a>
              </td>
              <td>
                <a href="/">Troca</a>
              </td>
            </tr>
          );
        } else {
            return <p></p>;
        }
      }
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="m-5">
          <form className="searchForm">
            <div className="form-group row">
              <FontAwesomeIcon className="searchIcon ml-2" icon={faSearch} />
              <div className="col-sm-5">
                <input
                    className="form-control searchInput rounded"
                    type="search"
                    placeholder="Pesquisar jogos"
                    autoFocus
                    onChange={this.onChangeSearch}
                />
              </div>
            </div>
          </form>
        </div>
        <div className="rounded m-5">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Anúncio</th>
                <th scope="col">Nome</th>
                <th scope="col">Plataforma</th>
                <th scope="col">Tipo</th>
                <th scope="col">Estado</th>
                <th scope="col">Valor</th>
                <th scope="col" />
                <th scope="col" />
              </tr>
            </thead>
            <tbody>{this.showGames()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default SearchGame;
