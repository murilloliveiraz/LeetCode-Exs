var numberOfMatches = function(n) {
    if (n === 1) return 0;
    // caso recursivo: se n é par, metade das equipes avança e metade é eliminada
    if (n % 2 === 0) return n/2 + numberOfMatches(n/2);
    // caso recursivo: se n é ímpar, (n-1)/2 equipes avançam e (n-1)/2 são eliminadas, mais uma partida extra
    return (n-1)/2 + numberOfMatches((n-1)/2 + 1);
  };

console.log(numberOfMatches(14));