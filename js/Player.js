class Player {
  constructor(name, id, color, active = false) {
    this.name = name;
    this.id = id;
    this.color = color;
    this.active = active;
    this.tokens = this.createTokens(21);
  }
  createTokens(num) {
    const arrOfTokens = [];

    for (let i = 0; i < num; i++) {
      let token = new Token(i, this);
      arrOfTokens.push(token);
    }

    return arrOfTokens;
  }
  checkTokens() {
    return this.unusedTokens.length === 0 ? false : true;
  }

  get unusedTokens() {
    const arrOfUnusedTokens = this.tokens.filter((token) => !token.dropped);
    return arrOfUnusedTokens;
  }
  get activeToken() {
    return this.unusedTokens[0];
  }
}
