import React from 'react'


interface HeaderText {
    buttontext : string;
    incrementor : number;
}


function Header(props : HeaderText)  {
    return  <div>{props.buttontext}</div>
 
}

export default Header
