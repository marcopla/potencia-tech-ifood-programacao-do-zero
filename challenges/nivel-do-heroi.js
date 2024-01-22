class Heroi {
  constructor(nome, xp) {
    this.nome = nome;
    this.xp = xp;
  }

  calcular_elo() {
    let elo_atual = '';

    switch (true) {
      case this.xp <= 1000:
        elo_atual = 'Ferro';
        break;

      case this.xp <= 2000:
        elo_atual = 'Bronze';
        break;

      case this.xp <= 5000:
        elo_atual = 'Prata';
        break;

      case this.xp <= 8000:
        elo_atual = 'Platina';
        break;

      case this.xp <= 9000:
        elo_atual = 'Ascendente';
        break;

      case this.xp <= 10000:
        elo_atual = 'Imortal';
        break;

      default:
        elo_atual = 'Radiante';
    }

    console.log(`O Herói de nome ${this.nome} está no nível de ${elo_atual}`);
  }
}

const heroi1 = new Heroi('Garen', 8000);
heroi1.calcular_elo();
