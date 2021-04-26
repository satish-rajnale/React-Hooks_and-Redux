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
    </div>
  );
};


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
Container.defaultProps = defaultContainerProps;
export default App;
