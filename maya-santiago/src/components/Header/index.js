import React from 'react';

function Header(props) {
    return(
        <header className="flex-row px-1">
        <h2>
            <a href="/">
                Maya Santiago
            </a>
        </h2>
        {props.childrenß}
        </header>
    )
}


export default Header;