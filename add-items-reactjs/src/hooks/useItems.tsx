import { useState } from "react";
import { Item, ItemID } from "../App";

export const useItems = () => {
    const [items, setItems] = useState<Item[]>([]);

    const addItem = (text: string) => {
        const newItem: Item = {
            id: crypto.randomUUID(),
            text,
            timestamp: Date.now(),
        }
      
          setItems((prevItems) => {
            return [...prevItems, newItem]
        })
    }

    const removeItem = (id: ItemID) => {
        setItems(prevItems => {
            return prevItems.filter(currentItem => currentItem.id !== id)
        })
    }

    return (
        {
            items,
            addItem,
            removeItem,
        }
    )
}