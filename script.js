document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn-add');
    const cartCountEl = document.getElementById('cart-count');
    const cartTotalEl = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('btn-checkout');

    let totalItems = 0;
    let totalPrice = 0.00;

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Pega o card do café correspondente
            const card = e.target.closest('.menu-card');
            const price = parseFloat(card.getAttribute('data-price'));
            
            // Atualiza os dados do carrinho
            totalItems += 1;
            totalPrice += price;

            // Atualiza a interface com animação suave
            cartCountEl.textContent = totalItems;
            cartTotalEl.textContent = `R$ ${totalPrice.toFixed(2).replace('.', ',')}`;

            // Efeito visual rápido no botão ao clicar
            e.target.innerText = "Adicionado! ⚡";
            e.target.style.borderColor = "#ffffff";
            setTimeout(() => {
                e.target.innerText = "Adicionar ao Hub";
                e.target.style.borderColor = "rgba(0, 242, 254, 0.4)";
            }, 1000);
        });
    });

    // Simulação de finalização de pedido
    checkoutBtn.addEventListener('click', () => {
        if (totalItems > 0) {
            alert(`Pedido enviado para a bancada de preparo automatizada da CoffeeHub!\nTotal: R$ ${totalPrice.toFixed(2).replace('.', ',')}\nRetire seu café usando seu QR Code.`);
            // Reset do carrinho
            totalItems = 0;
            totalPrice = 0.00;
            cartCountEl.textContent = totalItems;
            cartTotalEl.textContent = "R$ 0,00";
        } else {
            alert("Seu Hub de pedidos está vazio. Adicione um Cyber Café primeiro!");
        }
    });
});