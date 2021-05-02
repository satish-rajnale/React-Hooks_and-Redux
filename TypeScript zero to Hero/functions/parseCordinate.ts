// function overloading

interface Cordinate {
  x: number;
  y: number;
}

function parseCordinatefromObject(obj: Cordinate): Cordinate {
    return { ...obj, };
  }

function parseCordinatefromNumbers(x: number, y: number): Cordinate {
  return {
    x: x,
    y: y,
  };
}


function parseCordinate(obj: Cordinate): Cordinate;
function parseCordinate(x: number, y: number): Cordinate;

// Actual function overloading implementor
function parseCordinate(arg1: unknown, arg2?: unknown): Cordinate {
  let cord : Cordinate = {
    x: 0,
    y: 0,
  };
  if(typeof(arg1) === "object"){
      cord = {...arg1 as Cordinate}
  } else {
      cord = {
          x: arg1 as number,
          y: arg2 as number
      }
  }
  return cord
}

console.log(parseCordinate({x:2,y:5}))
console.log(parseCordinate(10,20))