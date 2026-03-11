const API_URL = "https://api.hypixel.net/v2/skyblock/bazaar";

async function loadBazaar()
{
    try
    {
        const response = fetch(API_URL);
        const data = (await response).json;

        const products = data.products;
        const container = document.getElementById("bazaar-container");

        container.innerHTML = "";

        for (const itemId in products)
        {
            const item = products[itemId].quick_status;

            const div = document.createElement("div");
            div.className = "bazaar-item";

            div.innerHTML =
                <strong>${itemId}</strong>; <br></br>
                Buy: {item.buyPrice.toFixed(2)}<br></br>
                Sell: {item.sellPrice.toFixed(2)}<br></br>
            ;

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