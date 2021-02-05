export const SuperArray = (itens = []) => {

  const array = {
    /**
     * Propriedade para acessar os itens
     */

    itens: [...itens],
  }

  /**
   * Adicionar um novo item ao final dos items
   */

  array.push = item => {
    return null
  }

  /**
   * Itera sobre cada um dos elementos do SuperArray enviando o item e o index
   * como segundo parametro
   */

  array.forEach = callback => {
    return null
  }

  /**
   * Retorna um novo SuperArray com os itens mapeados
   */

  array.map = callback => {
    return null
  }


  /**
   * Retorna um SuperArray novo com os itens filtrados
   */

  array.filter = callback => {
    return null
  }


  /**
   * Retorna o primeiro elemento do SuperArray que satisfazer o callback recebido
   * se não encontrar, deve retornar undefined
   */

  array.find = callback => {
    return null
  }

  /**
   * Reduz o SuperArray em um único valor
   */


  array.reduce = (callback, valorInicial) => {
    return null
  }

  return array
}
