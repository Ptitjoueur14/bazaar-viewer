function changeItemColor(div, itemId)
{
    if (itemId.includes("ENCHANTMENT_ULTIMATE")) 
    {
        div.className = "bazaar-item-enchantment-ultimate";
    }
    else if (itemId.includes("ENCHANTMENT")) 
    {
        div.className = "bazaar-item-enchantment"
    }
    else if (itemId.includes("SHARD"))
    {
        div.className = "bazaar-item-shard"
    }
    else if (itemId.includes("ENCHANTED"))
    {
        div.className = "bazaar-item-enchanted-item"
    }
    else
    {
        div.className = "bazaar-item";
    }
}

function displayProducts(items)
{
    const container = document.getElementById("bazaar-container");
    container.innerHTML = "";

    for (const item of items)
    {
        const div = document.createElement("div");
        changeItemColor(div, item.itemId);

        let buyPrice = item.buyPrice;

        div.innerHTML = `
            <strong>${item.displayName}</strong><br>
            Buy: ${item.getPrice(item.buyPrice)}<br>
            Sell: ${item.getPrice(item.sellPrice)}
        `;

        container.appendChild(div);
        item.printItemInfo();
    }
}