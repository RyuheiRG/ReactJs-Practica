import './App.css'
import { Item } from './components/Item';
import { useItems } from './hooks/useItems';
import { useSEO } from './hooks/useSEO';

 export type ItemID = `${string}-${string}-${string}-${string}-${string}`;

 export interface Item {
  id: ItemID,
  timestamp: number,
  text: string,
}

/* const INITIAL_ITEMS: Item[] = [
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: 'videojuegos',
  },
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: 'Libros',
  },
] */

function App() {
  const { items, addItem, removeItem } = useItems()
  useSEO({
    title: `[${items.length}] Practica con ReactJs y Ts`,
    description: 'agregar y eliminar elementos de una lista'
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { elements } = event.currentTarget

    const input = elements.namedItem('item')
    const isInput = input instanceof HTMLInputElement
    if(!isInput || input == null) return

    addItem(input.value)

    input.value = ''
  }

  const createHandleRemoveItem = (id: ItemID) => () => {
    removeItem(id)
}
  return (
    <main>
      <aside>
        <h1>ejerccicio de practica</h1>
        <h2>Agregar y eliminar elementos</h2>
        <form onSubmit={handleSubmit} aria-label='agregar elementos a la lista' >
          <label htmlFor="">
            Elementos a introducir:
            <input name='item' required type='text' placeholder='practica' />
          </label>
          <button>agregar elementos</button>
        </form>
      </aside>

      <section>
        <h2>Lista de elementos</h2>
        
          {
            items.length == 0 ? (
              <p>
                <strong>No hay elementos</strong>
              </p>
            ) : (
            <ul>{
              items.map(item => {
              return <Item 
              {...item}
                handleClick={createHandleRemoveItem(item.id)}
                key={item.id}
                />
              })}
              </ul>
            )
          }
        
      </section>
    </main>
  )
}

export default App
