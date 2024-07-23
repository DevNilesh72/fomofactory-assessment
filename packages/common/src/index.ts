export interface stockPriceDTO {
    id: number;
    name: string;
    price: number;
    created_at: string;
}

export const StocksList = {
    bitcoin: {
        name: "Bitcoin",
        alis: "bitcoin"
    },
    ethereum: {
        name: "Ethereum",
        alis: "ethereum"
    },
    solana: {
        name: "Solana",
        alis: "solana"
    },
    tether: {
        name: "Tether",
        alis: "tether"
    },
    dogecoin: {
        name: "Dogecoin",
        alis: "dogecoin"
    },
}