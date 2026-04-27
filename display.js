function displayProducts(products)
{
    const container = document.getElementById("bazaar-container");
    container.innerHTML = "";

    for (const itemId in products)
    {
        const item = products[itemId].quick_status;
        //console.log(`Item id ${itemId}: Name ${item.productId}, buy ${item.buyPrice}, sell ${item.sellPrice}`);

        const div = document.createElement("div");
        changeItemColor(div, itemId);

        div.innerHTML = `
            <strong>${itemId}</strong><br>
            Buy: ${item.buyPrice.toFixed(2)}<br>
            Sell: ${item.sellPrice.toFixed(2)}
        `;

        container.appendChild(div);
    }
}