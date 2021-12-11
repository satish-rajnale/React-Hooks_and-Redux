import { useCallback, useRef, useState } from 'react';

type CommandsFunction<State> = (state: State) => State;

function createNewCommandStack<State>(_state: State) {
  const stack: string[] = [JSON.stringify(_state)];

  return {
    execute(command: CommandsFunction<State>) {
      const currentState = JSON.parse(stack[stack.length - 1]);
      const newState = command(currentState);
      stack.push(JSON.stringify(newState));
      return newState;
    },

    undo() {
      if (stack.length > 1) {
        stack.pop();
      }
      return JSON.parse(stack[stack.length - 1]);
    },
  };
}

export function useStateWithUndo<DataType>(
  initialState: DataType
): [DataType, (state: DataType) => void, () => void] {
  const [state, setstate] = useState<DataType>(initialState);

  const stack = useRef(createNewCommandStack(state));

  return [
    state,
    useCallback((value: DataType) => {
      const newState = stack.current.execute(() => value);
      setstate(newState);
    }, []),
    useCallback(() => {
      const newState = stack.current.undo();
      setstate(newState);
    }, []),
  ];
}
