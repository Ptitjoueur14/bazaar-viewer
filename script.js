const API_URL = "https://api.hypixel.net/v2/skyblock/bazaar";

let allItems = []

function convertToBazaarItems(products)
{
    let items = []

    for (const itemId in products)
    {
        const quickStatus = products[itemId].quick_status;
        let item = new BazaarItem(
            itemId,
            quickStatus.buyPrice,
            quickStatus.sellPrice
        )

        item.displayName = item.formatItemName();

        items.push(item);
    }

    return items;
}

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

        const productsCount = Object.keys(products).length;
        console.log(`Found ${productsCount} products on the Bazaar`);

        allItems = convertToBazaarItems(products);

        const path = window.location.pathname;
        if (path.includes("/the-end"))
        {
            showEndItems();
        }
        if (path.includes("/shards"))
        {
            showShardItems();
        }
        else
        {
            showAllItems();
        }
    }

    catch(err)
    {
        console.error(err);
        document.getElementById("bazaar-container").innerText = 
        "Failed to load Bazaar data.";
    }
}

function getTheEndItems()
{
    const DRAGON_FRAGMENTS = [
        "CRYSTAL_FRAGMENT",
        "HOLY_FRAGMENT",
        "OLD_FRAGMENT",
        "PROTECTOR_FRAGMENT",
        "STRONG_FRAGMENT",
        "SUPERIOR_FRAGMENT",
        "UNSTABLE_FRAGMENT",
        "WISE_FRAGMENT",
        "YOUNG_FRAGMENT"
    ];

    return allItems.filter(item =>
        DRAGON_FRAGMENTS.includes(item.itemId)
    );
}

function getShardItems()
{
    return allItems.filter(item =>
        item.itemId.includes("SHARD")
    );
}

function showAllItems()
{
    displayProducts(allItems);
}

function showEndItems()
{
    const endItems = getTheEndItems();
    displayProducts(endItems);
}

function showShardItems()
{
    const shardItems = getShardItems();
    displayProducts(shardItems);
}

loadBazaar();
