class BazaarItem
{
    constructor(itemId, buyPrice, sellPrice)
    {
        this.itemId = itemId;
        this.buyPrice = buyPrice;
        this.sellPrice = sellPrice;
        this.displayName = this.formatItemName();
    }

    formatItemName()
    {
        return this.id
        .toLowerCase()
        .split("_")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    }

    getProfit()
    {
        return this.sellPrice - this.buyPrice;
    }

    printItemInfo()
    {
        console.log(`${this.itemId}: Buy: ${this.buyPrice}, Sell: ${this.sellPrice}`);
    }
}