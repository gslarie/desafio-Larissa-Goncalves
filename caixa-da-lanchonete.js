class CaixaDaLanchonete {
  calcularValorDaCompra(metodoDePagamento, itens) {
    let calculo = 0;
    let temCafe = false;
    let temSanduiche = false;

    for (let item of itens) {
      const [produto, quantidade] = item.split(",");

      if (produto === "cafe") {
        calculo += 300 * Number(quantidade);
        temCafe = true;
      } 
      else if (produto === "chantily") {
        if (!temCafe) {
          return "Item extra não pode ser pedido sem o principal";
        }
        calculo += 150 * Number(quantidade);
      } 
      else if (produto === "suco") {
        calculo += 620 * Number(quantidade);
      } 
      else if (produto === "sanduiche") {
        calculo += 650 * Number(quantidade);
        temSanduiche = true;
      } 
      else if (produto === "queijo") {
        if (!temSanduiche) {
          return "Item extra não pode ser pedido sem o principal";
        }
        calculo += 200 * Number(quantidade);
      } 
      else if (produto === "salgado") {
        calculo += 725 * Number(quantidade);
      } 
      else if (produto === "combo1") {
        calculo += 950 * Number(quantidade);
      } 
      else if (produto === "combo2") {
        calculo += 750 * Number(quantidade);
      } 
      else {
        return "Item inválido!";
      }

      if (quantidade <= 0) {
        return "Quantidade inválida!";
      }
    }
    let real = calculo / 100;
    let total = 0;

    if (metodoDePagamento === "dinheiro") {
      let desconto = real * 0.05;
      total = real - desconto;
    } 
    else if (metodoDePagamento === "credito") {
      let acrescimo = real * 0.03;
      total = real + acrescimo;
    } 
    else if (metodoDePagamento === "debito") {
      total = real;
    } 
    else {
      return "Forma de pagamento inválida!";
    }

    if (total === 0) {
      return "Não há itens no carrinho de compra!";
    }

    let teste = total.toFixed(2);
    let testando = teste.replace(".", ",");
    return `R$ ${testando}`;
  }
}
export { CaixaDaLanchonete };