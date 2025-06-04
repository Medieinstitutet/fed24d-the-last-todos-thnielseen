// src/data/Todos.ts

// === IMPORTS ===
import Todo from '../models/Todo'

// === List of mock Todo objects ===
const Todos: Todo[] = [
  new Todo('Köp mjölk', 'Kom ihåg laktosfri', new Date('2025-06-05')),
  new Todo('Skicka in skoluppgift', 'Todo-app med listor och titel', new Date('2025-06-06')),
  new Todo('Tvätta kläder'),
  new Todo('Boka tandläkare', 'Före den 15:e', new Date('2025-06-10')),
  new Todo('Lämna paket på posten', 'Retur till Zalando', new Date('2025-06-07')),
]

export default Todos
