type Todo = {
  text: string;
  complete: boolean;
};

type Cars = {
  _id: string;
  brand: string;
  type: string;
  color: string;
  quantity: number;
};

type Car = {
  brand: string;
  type: string;
  color: string;
  quantity: number;
};

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (newTodo: string) => void;

type Title = string;

type HandleSubmit = (e) => void;

type ToggleEditing = (name: string) => void;

type HandleSubmitEdit = (index: number) => void;
