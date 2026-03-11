const API_URL = "https://api.hypixel.net/v2/skyblock/bazaar";

async function loadBazaar()
{
    try
    {
        console.log("Loading Hypixel Skyblock API at https://api.hypixel.net/v2/skyblock/bazaar");
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log("Successfully loaded Hypixel Skyblock API");

        const products = data.products;
        console.log(products);
        const container = document.getElementById("bazaar-container");

        container.innerHTML = "";

        const productsCount = Object.keys(products).length;
        console.log(`Found ${productsCount} products on the Bazaar`)

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

    catch(err)
    {
        console.error(err);
        document.getElementById("bazaar-container").innerText = 
        "Failed to load Bazaar data.";
    }
}

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

loadBazaar();