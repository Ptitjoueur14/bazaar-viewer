const API_URL = "https://api.hypixel.net/v2/skyblock/bazaar";

async function loadBazaar()
{
    try
    {
        console.log("Loading Hypixel Skyblock API at https://api.hypixel.net/v2/skyblock/bazaar");
        const response = await fetch(API_URL);
        const data = await response.json;
        console.log("Successfully loaded Hypixel Skyblock API");

        const products = data.products;
        const container = document.getElementById("bazaar-container");

        container.innerHTML = "";

        for (const itemId in products)
        {
            const item = products[itemId].quick_status;

            const div = document.createElement("div");
            div.className = "bazaar-item";

            div.innerHTML = `
                <strong>${itemId}itemId</strong><br>
                Buy: {item.buyPrice.toFixed(2)<br>
                Sell: {item.sellPrice.toFixed(2)}
            `;

            console.log("Item id {itemId}: Name ${item.productId}, buy ${item.buyPrice}, sell ${item.sellPrice}");

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

loadBazaar();