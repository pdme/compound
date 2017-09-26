const compound = require('../src/compound')

test('first adds 2 + 3, then multiplies 5 * 3', () => {
  const sum = (a, b) => a + b
  const multiply = (a, b) => a * b

  expect(compound(multiply, sum)(2, 3)).toBe(15)
})

const oldTimestamp = 1506408517341
const state = {
  todos: [
    {
      text: 'Write some more tests',
      done: false,
    },
    {
      text: 'Upload to GitHub',
      done: true,
    },
  ],
  lastUpdated: oldTimestamp,
}

const action = {
  type: 'ADD_TODO',
  payload: {
    text: 'Read a book',
    done: false,
  },
}

const addTodo = (state, action) =>
  Object.assign({}, state, {
    todos: state.todos.concat(action.payload),
  })

const updateTimestamp = (state, action) =>
  Object.assign({}, state, {
    lastUpdated: Date.now(),
  })

test('both adds the new todo, and updates timestamp', () => {
  const newState = compound(updateTimestamp, addTodo)(state, action)
  expect(newState.todos.length).toBe(3)
  expect(newState.lastUpdated > oldTimestamp).toBe(true)
})
