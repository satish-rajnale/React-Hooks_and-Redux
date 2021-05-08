import React, { ReactElement, ReactNode, useCallback, useEffect, useMemo, useRef, useState } from "react";
import Todo from './Todo';
import "./App.css";
import TestTimer from "./testTimer";
import UseEffectComponent from "./component/useEffectComponent"
import UseContextComponent from "./component/UseContextComponent";
import UseReducerComponent from "./component/UseReducerComponent"
import UseRefComponent from "./component/UseRefComponent"



const App: React.FC = () => {
 const [index, setIndex] = useState(0)
 const updateIndex = useCallback(() => setIndex(index +1), [index] )
  return (
    <div className="App">
      <div className="todoApp">
        <Todo></Todo>
      </div>
      <h2>UseEffectComponent</h2>
      <UseEffectComponent/>
      <h2>UseContextComponent</h2>
      <UseContextComponent/>
      <h2>UseReducerComponent</h2>
      <UseReducerComponent/>
      <h2>UseRefComponent</h2>
      <UseRefComponent/>
      <h2>TestTimer</h2>

      <TestTimer key={index}/>
      <button onClick={updateIndex}>update Index</button>
      <h2>Heading</h2>

        <Heading title="Hi types"/>
        <h2>HeadingWithContent</h2>

        <HeadingWithContent>
          <strong>Where are you</strong>
        </HeadingWithContent>
        <h2>Container</h2>
        <Container>
          <p> fooo</p>
        </Container>
        <h2>TextWithNumber</h2>
        <TextWithNumber >
          {(num : number) => <div> Todays number is {num}</div> }
        </TextWithNumber>
        <h2>ListGeneric</h2>
        <List items={['jack', 'cify', 'asd']} render={(item : string) => <div>{item.toLowerCase()}</div>} />
        <h2>MyHeadingLoader class</h2>
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
  return  <h6 >{footer}{children}</h6>
            
}
Container.defaultProps = defaultContainerProps;

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
