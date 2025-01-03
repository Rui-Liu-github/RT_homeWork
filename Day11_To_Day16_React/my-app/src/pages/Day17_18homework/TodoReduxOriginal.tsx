interface todosType {
  id: number;
  task: string;
  isEdit: boolean;
}
interface stateType {
  todos: todosType[];
}

const initialState: stateType = {
  todos: [],
};

//create action and creators
const ACTIONS = {
  ADD_TODO_TASK: "add_task",
  DELETE_TASK: "delete_task",
  EDIT_TASK: "edit_task",
  UPDATE_TASK: "update_task",
};

export type ActionType = {
  type:
    | typeof ACTIONS.ADD_TODO_TASK
    | typeof ACTIONS.DELETE_TASK
    | typeof ACTIONS.EDIT_TASK;
  payload: any;
};

const addToDoTask = (task: string) => {
  return {
    type: ACTIONS.ADD_TODO_TASK,
    payload: task,
  };
};

const deleteTask = (id: number) => {
  return {
    type: ACTIONS.DELETE_TASK,
    payload: id,
  };
};

const editTask = (id: number) => {
  return {
    type: ACTIONS.EDIT_TASK,
    payload: id,
  };
};

const updateTask = ({ id, task }: any) => {
  return {
    type: ACTIONS.EDIT_TASK,
    payload: {
      id: id,
      taskName: task,
    },
  };
};

function addNewTodo(task: string) {
  return {
    id: Date.now(),
    task: task,
    isEdit: false,
  };
}

// export const fetchDataRequest = () => ({
//   type: FETCH_DATA_REQUEST,
// });

// export const fetchDataSuccess = (data) => ({
//   type: FETCH_DATA_SUCCESS,
//   payload: data,
// });

// export const fetchDataFailure = (error) => ({
//   type: FETCH_DATA_FAILURE,
//   payload: error,
// });
// export const fetchData = () => {
//   return async (dispatch) => {
//     dispatch(fetchDataRequest());
//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/posts"
//       );
//       const data = await response.json();
//       dispatch(fetchDataSuccess(data));
//     } catch (error) {
//       dispatch(fetchDataFailure(error.message));
//     }
//   };
// };

export default function todoReduxReducer(
  state = initialState,
  action: ActionType
) {
  switch (action.type) {
    case ACTIONS.ADD_TODO_TASK:
      return [...state.todos, addNewTodo(action.payload)];
    case ACTIONS.DELETE_TASK:
      return state.todos.filter((task) => task.id !== action.payload);
    case ACTIONS.EDIT_TASK:
      return state.todos.map((todo) => {
        console.log(action.payload);
        if (todo.id === action.payload) {
          return { ...todo, isEdit: !todo.isEdit };
        }
        return todo;
      });
    case ACTIONS.UPDATE_TASK:
      return state.todos.map((todo) => {
        //console.log(action.payload.taskId);
        if (todo.id === action.payload.id) {
          return { ...todo, task: action.payload.taskName };
        }
        return todo;
      });
    default:
      return state;
  }
}

// const rootReducer = combineReducers({
//   todos: todoReduxOriginal,
// });

export { addToDoTask, deleteTask, editTask, updateTask };
