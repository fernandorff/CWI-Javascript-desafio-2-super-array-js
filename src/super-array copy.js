import instrutores from "./instrutores.json" assert { type: "json" };

const SuperArray = (itens = []) => {
  const array = {
    /**
     * Propriedade para acessar os itens
     */

    itens: [...itens],
  };

  /**
   * Adicionar um novo item ao final dos items
   */

  array.push = (item) => {
    array.itens[itens.length] = item;
  };

  /**
   * Itera sobre cada um dos elementos do SuperArray enviando o item e o index
   * como segundo parametro
   */

  array.forEach = (callback) => {
    for (let i = 0; i < array.itens.length; i++) {
      callback(array.itens[i], i);
    }
  };

  /**
   * Retorna um novo SuperArray com os itens mapeados
   */

  array.map = (callback) => {
    let novoArray = [];
    for (let i = 0; i < array.itens.length; i++) {
      novoArray[i] = callback(array.itens[i]);
    }
    return novoArray;
  };

  /**
   * Retorna um SuperArray novo com os itens filtrados
   */

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

  /**
   * Retorna o primeiro elemento do SuperArray que satisfazer o callback recebido
   * se não encontrar, deve retornar undefined
   */

  array.find = (callback) => {
    for (let i = 0; i < array.itens.length; i++) {
      if (callback(array.itens[i]) === true) {
        return array.itens[i];
      }
    }
  };

  /**
   * Reduz o SuperArray em um único valor
   */

  array.reduce = (callback, valorInicial) => {
    let soma = valorInicial;
    for (let i = 0; i < array.itens.length; i++) {
      soma += callback();
    }
    return soma;
  };

  return array;
};

// const meuArray = SuperArray([1, 4, 5]);
// console.log(meuArray.itens);

// meuArray.push(6);
// console.log(meuArray.itens);

// meuArray.forEach((item) => {
//   console.log(item);
// });

// const meuArrayDobrado = meuArray.map((item) => {
//   return item / 2;
// });

// console.log(meuArrayDobrado);

// const meuArrayImpares = meuArray.filter((item) => {
//   return item % 2 !== 0;
// });

// console.log(meuArrayImpares);

// const primeiroNumeroMarioQue1 = meuArray.find((item) => {
//   return item > 1;
// });

// console.log(primeiroNumeroMarioQue1);

// const somaMeuArray1 = meuArray.reduce((item, acumulador) => {
//   return (acumulador += item);
// }, 5);

// console.log(somaMeuArray);

const meuArray1 = SuperArray(instrutores);
// const meuArrayDandoAula = Array.filter((item) => {
//   return item.dandoAula == true;
// });
// console.log(meuArrayDandoAula);
// console.log(Array.itens[2]);

const meuArray = SuperArray([1, 2, 3]);

const somaMeuArray = meuArray.reduce((item, acumulador) => {
  return (acumulador += item);
}, 0);

console.log(somaMeuArray);
