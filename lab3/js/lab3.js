class Player {
  constructor(name) {
    this.name = name;
    this.position = 1;
  }
}

class Node {
  constructor(info) {
    this.info = info;
    this.next = null;
  }
}

class CircularList {
  constructor(players) {
    this.start = null;
    this.tail = null;
    this.players = players;
  }

  generateList() {
    if (this.start === null) {
      let node = new Node(this.players[0]);
      this.start = node;
    }

    let aux = this.start;
    for (let i = 1; i < this.players.length; i++) {
      let node = new Node(this.players[i]);
      node.info.position = i + 1;
      if (i === this.players.length - 1) {
        this.tail = node;
        this.tail.next = this.start;
        aux.next = this.tail;
        return;
      }
      aux.next = node;
      aux = aux.next;
    }
  }

  deleteElement(position) {
    let aux = this.start;
    while (aux.next.info.position !== position) {
      aux = aux.next;
    }
    if (aux.next === this.start) {
      this.start = aux.next.next;
    }
    aux.next = aux.next.next;
    this.players.splice(position - 1, 1);
  }

  updatePositions() {
    let aux = this.start;
    for (let i = 0; i < this.players.length; i++) {
      aux.info.position = i + 1;
      aux = aux.next;
    }
  }

  startFromTo(start, stop) {
    let maxPosition = this.getMaxPosition();
    if (start > maxPosition) {
      return;
    }

    let aux = this.start;
    while (aux.info.position !== start) {
      aux = aux.next;
    }

    let counter = 0;
    while (counter !== stop) {
      aux = aux.next;
      counter++;
    }
    this.deleteElement(aux.info.position);
    this.updatePositions();
  }

  getMaxPosition() {
    let aux = this.start;
    while (aux.info.position < aux.next.info.position) {
      aux = aux.next;
    }
    return aux.info.position;
  }
}

const template = (player) => {
  return `
  <li>
    <i class="fas fa-user"></i>
    <span>${player.name}</span>
  </li>
  `
}


document.addEventListener('DOMContentLoaded', () => {
  let players = [];
  let playerName = document.getElementById('playerName');

  playerName.addEventListener('change', () => {
    let player = new Player(playerName.value);
    players.push(player);
    playerName.value = '';
    document.getElementById('playersList').innerHTML = players.map(template).join('');
  })

  document.getElementById('startGame').addEventListener('click', () => {
    let list = new CircularList(players);
    let startFrom = Number(document.getElementById('startFrom').value);
    let finishWith = Number(document.getElementById('finishWith').value);

    if (startFrom && finishWith >= 0) {
      list.generateList();
      list.startFromTo(startFrom, finishWith);
      document.getElementById('playersList').innerHTML = players.map(template).join('');
    }
  })

})