function changeItemColor(div, rarity)
{
    switch (rarity) {
        case "COMMON":
            div.className = "bazaar-item-common";
            break;
        case "UNCOMMON":
            div.className = "bazaar-item-uncommon";
            break;
        case "RARE":
            div.className = "bazaar-item-rare";
            break;
        case "EPIC":
            div.className = "bazaar-item-epic";
            break;
        case "LEGENDARY":
            div.className = "bazaar-item-legendary";
            break;
        case "MYTHIC":
            div.className = "bazaar-item-mythic";
            break;
        case "SUPREME":
            div.className = "bazaar-item-supreme";
            break;
        case "SPECIAL":
            div.className = "bazaar-item-special";
            break;
        case "VERY_SPECIAL":
            div.className = "bazaar-item-very-special";
            break;
        default:
            break;
    }
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
            <b>${item.rarity}</b>
            Buy: ${item.getPrice(item.buyPrice)}<br>
            Sell: ${item.getPrice(item.sellPrice)}
            <b>${item.category}</b>
        `;

        container.appendChild(div);
    }
}