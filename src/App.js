import React, { Component } from 'react';
import './App.css';
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';
import setColor from './colors';

class App extends Component {
 constructor() {
   super();

   this.state = {
     players: []
   }
 }

 onScoreUpdate = (playerIndex, scoreChange) => {
  this.setState({
    players: this.state.players.map((player, index) => {
      if (index === playerIndex) {
        return { ...player, score: player.score + scoreChange };
      }
      return player;
    })
  })
 }
 onPlayerAdd = (playerName) => {
  const newPlayer = {
    name: playerName,
    score: 0,
    color: setColor()
  };
  this.setState({
    players: [...this.state.players, newPlayer]
  });
 }
 onPlayerRemove = (playerIndex) => {
  let players = this.state.players;
  players.splice(playerIndex, 1);
  this.setState({players});
 }
 render() {
   return (
     <div className="App">
      <AddPlayer onPlayerAdd={this.onPlayerAdd} />
      <PlayersList players={this.state.players} onScoreUpdate={this.onScoreUpdate} onPlayerRemove={this.onPlayerRemove} />
     </div>
   );
 }
}

export default App;
