import instrutores from "./instrutores.json";
import { SuperArray } from "../src/super-array";

describe("suite de testes do SuperArray", () => {
  // --- PUSH ---

  it("push deve adicionar um novo instrutor ao meu super array", () => {
    const meuArray = SuperArray(instrutores);
    meuArray.push({
      nome: "Fernando Rocha Fonteles Filho",
      dandoAula: true,
    });

    expect(meuArray.itens[meuArray.itens.length - 1].nome).toBe(
      "Fernando Rocha Fonteles Filho"
    );
  });

  // --- FOREACH ---

  it("forEach deve passar por todos os instrutores e chamando o callback esperado", () => {
    const meuArray = SuperArray(instrutores);
    meuArray.forEach((item) => {});
  });

  // --- FILTER ---

  it("filter deve retornar um novo array apenas com os instrutores que estão dando aula", () => {
    const meuArray = SuperArray(instrutores);
    const meuArrayDandoAula = meuArray.filter((item) => {
      return item.dandoAula == true;
    });
    expect(meuArrayDandoAula).toMatchObject([
      { nome: "Gustavo Büttenbender Rodrigues", dandoAula: true },
      { nome: "William Cardozo", dandoAula: true },
    ]);
  });

  // --- MAP ---

  it("map deve retornar um novo array com o numero de nomes que o instrutor tem", () => {
    const meuArray = SuperArray(instrutores);
    const meuArrayMap = meuArray.map((item) => {
      return (item.nome.match(/ /g) || []).length + 1;
    });

    expect(meuArrayMap).toMatchObject([2, 2, 2, 3, 2, 2, 2, 3]);
  });

  // --- FIND ---

  it("find deve retornar o primeiro instrutor que está dando aula", () => {
    const meuArray = SuperArray(instrutores);
    const primeiroInstrutorDandoAula = meuArray.find((item) => {
      return item.dandoAula == true;
    });

    expect(primeiroInstrutorDandoAula).toMatchObject({
      nome: "Gustavo Büttenbender Rodrigues",
      dandoAula: true,
    });
  });

  // --- REDUCE TEST 1 ---

  it("reduce deve retornar o total de letras no nome dos instrutores", () => {
    const meuArray = SuperArray(instrutores);

    const somaMeuArray = meuArray.reduce((item, acumulador) => {
      acumulador = 0;
      let withoutSpace = item.nome.replace(/ /g, "");
      // console.log(withoutSpace.length);

      return (acumulador += withoutSpace.length);
    }, 0);

    // console.log("somaMeuArray = ", somaMeuArray);

    expect(somaMeuArray).toBe(126);
  });
});

// --- REDUCE TEST 2 ---

it("reduce deve retornar um boolean se todos os instrutores estão dando aula", () => {
  const meuArray = SuperArray(instrutores);

  const somaMeuArray = meuArray.reduce((item, acumulador) => {
    return (acumulador += item.dandoAula);
  }, 0);

  let dandoAulaBoolean;
  if (somaMeuArray == instrutores.length) {
    dandoAulaBoolean = true;
  } else {
    dandoAulaBoolean = false;
  }

  // console.log("somaMeuArray = ", somaMeuArray);

  expect(dandoAulaBoolean).toBe(false);
});
