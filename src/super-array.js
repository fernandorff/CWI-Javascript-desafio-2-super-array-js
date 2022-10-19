export const SuperArray = (itens = []) => {
  const array = {
    itens: [...itens],
  };

  array.push = (item) => {
    array.itens[itens.length] = item;
  };

  array.forEach = (callback) => {
    for (let i = 0; i < array.itens.length; i++) {
      callback(array.itens[i], i);
    }
  };

  array.map = (callback) => {
    let novoArray = [];
    for (let i = 0; i < array.itens.length; i++) {
      novoArray[i] = callback(array.itens[i]);
    }
    return novoArray;
  };

  array.filter = (callback) => {
    let novoArray = [];
    let j = 0;
    for (let i = 0; i < array.itens.length; i++) {
      if (callback(array.itens[i]) === true) {
        novoArray[j] = array.itens[i];
        j++;
      }
    }
    return novoArray;
  };

  array.find = (callback) => {
    for (let i = 0; i < array.itens.length; i++) {
      if (callback(array.itens[i]) === true) {
        return array.itens[i];
      }
    }
  };

  array.reduce = (callback, valorInicial) => {
    let soma = valorInicial;
    for (let i = 0; i < array.itens.length; i++) {
      soma += callback(array.itens[i]);
    }

    return soma;
  };

  return array;
};
