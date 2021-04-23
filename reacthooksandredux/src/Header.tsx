import React from 'react'


interface HeaderText {
    buttontext : string;
    incrementor : number;
}


function Header(props : HeaderText) {
    return (
        <div>
            <text>{props.buttontext}</text>
           
        </div>
    )
}

export default Header
