function changeItemColor(div, rarity)
{
    div.className = `bazaar-item-${rarity.toLowerCase()}`;
}

function displayProducts(items)
{
    const container = document.getElementById("bazaar-container");
    container.innerHTML = "";

    for (const item of items)
    {
        const div = document.createElement("div");
        changeItemColor(div, item.rarity);

        let buyPrice = item.buyPrice;

        div.innerHTML = `
            <strong>${item.displayName}</strong><br>
            <b>${item.category}</b><br>
            Buy: ${item.getPrice(item.buyPrice)}<br>
            Sell: ${item.getPrice(item.sellPrice)}<br>
            <b>${item.rarity}</b>
        `;

        container.appendChild(div);
    }
}