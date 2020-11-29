let custoProduto = 500;
let valorVenda = 800;
let imposto = 20;
let totalVendas = 1000;

if (custoProduto <= 0 || valorVenda <= 0) {
  console.log('Erro! Valores incorretos.')
} else {
  let custoProdutoTotal = custoProduto + ((custoProduto * imposto) / 100);
  console.log('Valor de custo total do produto: ' +custoProdutoTotal);
  let lucro = totalVendas * (valorVenda - custoProdutoTotal);
  console.log('Lucro total: ' +lucro);
}
