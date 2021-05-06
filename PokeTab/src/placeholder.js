
export function getList(){
    const data = [];
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => data.push(json))
  return data;
}