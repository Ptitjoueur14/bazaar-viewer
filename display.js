function displayProducts(items)
{
    const container = document.getElementById("bazaar-container");
    container.innerHTML = "";

    for (const item of items)
    {
        const div = document.createElement("div");
        changeItemColor(div, item.itemId);

        div.innerHTML = `
            <strong>${item.displayName}</strong><br>
            Buy: ${item.buyPrice.toFixed(2)}<br>
            Sell: ${item.sellPrice.toFixed(2)}
        `;

        container.appendChild(div);
        item.printItemInfo();
    }
}