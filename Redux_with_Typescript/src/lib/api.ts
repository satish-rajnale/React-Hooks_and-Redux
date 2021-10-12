const BASE_URL = "https://fakestoreapi.com/products";

export interface Todo {
  id: number;
  text: string;
  active: boolean;
  done: boolean;
}

export const getTodos = async (): Promise<Todo[]> => {
  return fetch(`${BASE_URL}`).then((res) => res.json());
};
