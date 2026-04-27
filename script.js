const API_BAZAAR_URL = "https://api.hypixel.net/v2/skyblock/bazaar";
const API_ITEMS_URL = "https://api.hypixel.net/v2/resources/skyblock/items";

let allItems = []

function convertToBazaarItems(products, items)
{
    let itemsList = []

    for (const itemId in products)
    {
        const quickStatus = products[itemId].quick_status;

        const meta = items[itemId] || {};
        const rarity = meta.tier || "COMMON";
        let category = meta.category || "MISC";

        if (meta.material == "SKULL_ITEM")
        {
            category = "ITEM";
        }

        let item = new BazaarItem(
            itemId,
            quickStatus.buyPrice,
            quickStatus.sellPrice,
            rarity,
            category
        );

        itemsList.push(item);
    }

    return itemsList;
}

async function loadBazaar()
{
    try
    {
        // Load Hypixel Skyblock Bazaar API
        console.log(`Loading Hypixel Skyblock Bazaar API at ${API_BAZAAR_URL}`);
        const response_bazaar = await fetch(API_BAZAAR_URL);
        const data_bazaar = await response_bazaar.json();
        console.log("Successfully loaded Hypixel Skyblock Bazaar API");

        // Load Hypixel Skyblock Items API
        console.log(`Loading Hypixel Skyblock Items API at ${API_ITEMS_URL}`);
        const response_items = await fetch(API_ITEMS_URL);
        const data_items = await response_items.json();
        console.log("Successfully loaded Hypixel Skyblock Items API");

        const products = data_bazaar.products;
        console.log(products);

        const itemsArray = data_items.items;

        const items = {};
        for (const item of itemsArray)
        {
            items[item.id] = item;
        }
        console.log(items);

        const productsCount = Object.keys(products).length;
        console.log(`Found ${productsCount} products on the Bazaar`);
        const itemsCount = Object.keys(items).length;
        console.log(`Found ${itemsCount} items in Skyblock`);

        allItems = convertToBazaarItems(products, items);
        allItems.sort((item1, item2) => item1.id.localeCompare(item2.displayName));
        console.log(allItems);

        const path = window.location.pathname;
        console.log(`Path: ${path}`);

        if (path.includes("/the-end"))
        {
            showEndItems();
            console.log("Showing The End items");
        }
        else if (path.includes("/shards"))
        {
            showShardItems();
            console.log("Showing Shard items");
        }
        else
        {
            showAllItems();
            console.log("Showing All items");
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
        item.itemId.includes("SHARD_")
    );
}

function showAllItems()
{
    displayProducts(allItems);
    console.log(allItems);
}

function showEndItems()
{
    const endItems = getTheEndItems();
    displayProducts(endItems);
    console.log(endItems);
}

function showShardItems()
{
    const shardItems = getShardItems();
    displayProducts(shardItems);
    console.log(shardItems);
}

loadBazaar();
