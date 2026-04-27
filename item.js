class BazaarItem
{
    constructor(itemId, buyPrice, sellPrice)
    {
        this.itemId = itemId;
        this.displayName = this.formatItemName();
        this.buyPrice = buyPrice;
        this.sellPrice = sellPrice;
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

    printItemInfo()
    {
        console.log(`${this.itemId}: Buy: ${this.buyPrice}, Sell: ${this.sellPrice}, Profit: ${this.profit}`);
    }
}