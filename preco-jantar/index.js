function calcularPreco() {
    let price = document.getElementById('preco').value;

    let rate = 0.1;

    let total = Number(price) + (Number(price) * rate);

    document.getElementById('total').textContent = `Total (R$): ${total.toFixed(2)}`;
}
