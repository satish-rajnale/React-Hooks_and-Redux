import React, { ReactElement, ReactNode, useEffect, useMemo, useRef, useState } from "react";
import Todo from './Todo';
import "./App.css";

import {printToFile, arrayMutation} from "./allAboutTypeScript/fileFunction"






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
        <TextWithNumber >
          {(num : number) => <div> Todays number is {num}</div> }
        </TextWithNumber>
        <List items={['jack', 'cify', 'asd']} render={(item : string) => <div>{item.toLowerCase()}</div>} />
        <MyHeadingLoader title="There you go"/>
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
Container.defaultProps = defaultContainerProps;
printToFile("Hello", () => {})
// Functional props
function TextWithNumber({ header,children}
                           : {children : (num : number) => ReactNode
                              header? : (num : number) => ReactNode }){
  const [state, setState] = useState<number >(0);

  return (
    <div>
      {header && <h2>header?.(state)</h2>}
      {children(state)}
      <div>
        <button onClick={() => setState(state +1)}>Add</button>
      </div>
    </div>
  )
}



// function generics 
// List
function List<ListItem>({ items, render}: { items : ListItem[], render : (item : ListItem) => ReactNode}){
  return (
    <ul>
      { items.map((item, index) => (
        <li key={index}>
          {render(item)}
        </li>
      ))}
    </ul>
  )
}






// class Compoonent 
class MyHeadingLoader extends React.Component<{ title: ReactNode}>{
 render(){
   return (
     <h3>{this.props.title}</h3>
   )
 }

}


export default App;
