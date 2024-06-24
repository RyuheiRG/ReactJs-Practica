import { describe, expect,test } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useItems } from "../src/hooks/useItems";

describe('useItems hooks', () => {
    test('should add and remove items', () => {
        const { result } = renderHook(() => useItems())

        expect(result.current.items.length).toBe(0)

        act(() => {
            result.current.addItem('jugar videojuegos')
            result.current.addItem('ir a correr')
        })

        expect(result.current.items.length)

        act(() => {
            result.current.removeItem(result.current.items[0].id)
        })

        expect(result.current.items.length)
    })
})