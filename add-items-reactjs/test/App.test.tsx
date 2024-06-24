import React from 'react'
import userEvent from '@testing-library/user-event'
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../src/App'

describe('<App />', () => {
   /*test('should work', () => {
        render(<App />)
    })*/

    test('should add item and remove them', async () => {
        const user = userEvent.setup()

        render(<App />)

        //buscar el input
        const input = screen.getByRole('textbox')
        expect(input).toBeDefined()

        //buscar el formulario
        const form = screen.getByRole('form')
        expect(form).toBeDefined()

        const button = form.querySelector('button')
        expect(button).toBeDefined()

        await user.click(button!)

        const randomText = crypto.randomUUID()
        await user.type(input, randomText)
        await user.click(button!)

        const list = screen.getByRole('list')
        expect(list).toBeDefined()
        //screen.debug(list)
        expect(list.childNodes.length).toBe(1)

        const item = screen.getByText(randomText)
        const removeButton = item.querySelector('button')

        await user.click(removeButton!)

        const noResults = screen.getByText('No hay elementos')
        expect(noResults).toBeDefined()

    })
})