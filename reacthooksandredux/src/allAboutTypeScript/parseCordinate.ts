// function overloading

interface Cordinate {
  x: number;
  y: number;
}

 function parseCordinate(obj: Cordinate): Cordinate {
  return { ...obj, };
}

function parseCordinate(x: number, y: number): Cordinate{
    return {
        x: x,
        y: y
    }
}

function parseCordinate(arg1: unknown, arg2: unknown): Cordinate{
    return {
        x: 0,
        y: 0
    }
}