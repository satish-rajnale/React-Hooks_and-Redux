import React from 'react'


interface HeaderText {
    buttontext : string;
    incrementor : number;
}


function Header(props : HeaderText) {
    return (
        <div>
            <div>{props.buttontext}</div>
           
        </div>
    )
}

export default Header
