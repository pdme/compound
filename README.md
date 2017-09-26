# compound

Like compose, but with rest params also being passed in

This is useful in redux reducers, for example, when you want to apply multiple modifiers to the state object.

```
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
  lastUpdated: 1506408517341,
}

const action = {
  type: 'ADD_TODO',
  payload: {
    text: 'Read a book',
    done: false,
  },
  meta: {
    timestamp: 1506408520000,
  }
}

const addTodo = (state, action) => ({
    ...state,
    todos: state.todos.concat(action.payload),
  })

const updateTimestamp = (state, action) => ({
    ...state,
    lastUpdated: action.meta.timestamp,
  })

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return compound(addTodo, updateTimestamp)(state, action)
  }
}
```
