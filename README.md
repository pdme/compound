# compound

Like compose, but with rest params also being passed in.

The first param is the return value of the previous function. The rest params remain unchanged.

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

Or if you are using <a href="https://redux-actions.js.org/">redux-actions</a>:

```
const reducer = handleAction(
  ADD_TODO: compound(addTodo, updateTimestamp)
)
```