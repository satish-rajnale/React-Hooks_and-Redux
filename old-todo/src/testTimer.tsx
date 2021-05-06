import React, { useState, useEffect, useRef, useCallback } from "react";

let timerID = 0;
function TestTimer() {
  const [counter, setCounter] = useState(0);
  const [toolTipShow, setToolTipShow] = useState(false);

  //   useEffect(() => {
  //     let isMOunted = true;
  //     timerID++;
  //     if (isMOunted) {
  //       setInterval(() => {
  //         setCounter((currentCounter) => {
  //           console.log(`timerID: ${timerID} : counter ${currentCounter}`);
  //           return currentCounter + 1;
  //         });
  //       }, 500);
  //     }
  //     return () => {
  //       isMOunted = false;
  //     };
  //   }, []);
  // can use above method also but its not that safe

  useEffect(() => {
    timerID++; // timerID only gets updated when the whole component is rernderd which is in this
    // case triggered by the key = index passed to it that gets updated each time button in App compo clicked
    const timer = setInterval(() => {
      setCounter((currentCounter) => {
        console.log(`timerID: ${timerID} : counter ${currentCounter}`);
        return currentCounter + 1;
      });
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const toolTipPopper = useRef<HTMLDivElement>(null);

  const onMouseOver = useCallback(() => setToolTipShow(true), []);
  const onMouseOut = useCallback(() => setToolTipShow(false), []);
  // here it doesnt shows any error but displays problem that the ref  toolTipPopper.current will
  // have its value changed by the time the cleanup function runs i.e return ()=>{}

//   useEffect(() => {
//     toolTipPopper.current?.addEventListener("mouseover", onMouseOver);
//     toolTipPopper.current?.addEventListener("mouseout", onMouseOut);
//     //   you have to  remove eventlisteners after adding them
//     return () => {
//       toolTipPopper.current?.removeEventListener("mouseover", onMouseOver);
//       toolTipPopper.current?.removeEventListener("mouseout", onMouseOut);
//     };
//   }, [onMouseOver, onMouseOut]);

  // solution is you cache the ref
  useEffect(() => {
      console.log("add event listener")
    toolTipPopper.current?.addEventListener("mouseover", onMouseOver);
    toolTipPopper.current?.addEventListener("mouseout", onMouseOut);

    const reference =   toolTipPopper.current

    // removed when there is a new comonent through updateIndex and again new event
    // listeners are added to it that remain till the component life
    return () => {
      console.log("remove event listener")
     reference?.removeEventListener("mouseover", onMouseOver);
     reference?.removeEventListener("mouseout", onMouseOut);
    };
  }, [onMouseOver, onMouseOut]);
  return (
    <div>
      Timer ID: {timerID} and : {counter}
      <div ref={toolTipPopper}>Tool tip popover</div>
      {toolTipShow && <div>toolTip timer : {counter}</div>}
    </div>
  );
}

export default TestTimer;
