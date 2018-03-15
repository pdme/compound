# compound

(Available on *npm* as `compound-util`)

Like compose, but with rest params also being passed in.

The first param is the return value of the previous function. The rest params remain unchanged, e.g.:

```
const sum = (x, y) => x + y;
const multiply = (x, y) => x * y;
compound(sum, multiply)(3, 4); // 16
```

This is particularly useful in redux reducers, for example, when you want to apply multiple modifiers to the state, using the same action object.

```
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
