class BazaarItem
{
    constructor(itemId, buyPrice, sellPrice, rarity, category)
    {
        this.itemId = itemId;
        this.displayName = this.formatItemName();
        this.buyPrice = buyPrice;
        this.sellPrice = sellPrice;
        this.rarity = rarity;
        this.category = category;
        this.profit = this.getProfit();
    }

    formatItemName()
    {
        return this.itemId
        .toLowerCase()
        .split("_")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    }

    getProfit()
    {
        return this.sellPrice - this.buyPrice;
    }

    getItemInfo()
    {
        return `${this.itemId}: Buy: ${this.buyPrice}, Sell: ${this.sellPrice}, Profit: ${this.profit} [${this.rarity}][${this.category}]`;
    }

    getPrice(price)
    {
        if (price < 100)
        {
            return price.toFixed(2);
        }
        return Math.round(price).toLocaleString("fr-FR");
    }
}