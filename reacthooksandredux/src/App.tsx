import React, { ReactElement, ReactNode, useEffect, useMemo, useRef, useState } from "react";
import Todo from './Todo';
import "./App.css";








const App: React.FC = () => {
 
  return (
    <div className="App">
      {/* <div className="todoApp">
        <Todo></Todo>
      </div> */}
     
        <Heading title="Hi types"/>
        <HeadingWithContent>
          <strong>Where are you</strong>
        </HeadingWithContent>
        <Container>
          <p> fooo</p>
        </Container>
        <TextWithNumber header={(num : number) => <div> Todays header is {num}</div> }>
          {(num : number) => <div> Todays number is {num}</div> }
        </TextWithNumber>
    </div>
  );
};

// const HeadingFC : React.FC<{title: string}> = ({title}) => <h1>{title}</h1>;   //old way of doing things
function Heading ({title} : {title : string}){
  return <strong>{title}</strong>
}

function HeadingWithContent ({children} : {children : ReactNode}): ReactElement{
  return <strong>{children}</strong>
}

//defaultprops
type ContainerProps = {children : ReactNode} & typeof defaultContainerProps;

const defaultContainerProps = {
  footer : <strong>I am footer</strong>
}
function Container ({children, footer} : ContainerProps): ReactElement{
  return <>
            <h4>{footer}{children}</h4>
            </>
}


// Functional props
function TextWithNumber({ header,children}
                           : {children : (num : number) => ReactNode
                              header : (num : number) => ReactNode }){
  const [state, setState] = useState<number >(0);

  return (
    <div>
      {header(state)}
      {children(state)}
      <div>
        <button onClick={() => setState(state +1)}>Add</button>
      </div>
    </div>
  )
}






Container.defaultProps = defaultContainerProps;
export default App;
