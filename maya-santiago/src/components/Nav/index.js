import React, { useEffect } from 'react';

function Nav() {
    
    const clickHander = (item) => {
        console.log(item)
        return item;
    }

    

    return(
        <header className="flex-row px-1">
            <h2>
                <a href="/">
                    Maya Santiago
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                       <a href="#about" onClick={clickHander}> About Me </a>
                    </li>
                    <li className='mx-2'>
                    <a href="#projects" onClick={clickHander}> My Projects</a>
                    </li>
                    <li className="mx-2">
                    <a href="#resume" onClick={clickHander}> Resume </a>
                    </li>
                    <li className="mx-2">
                    <a href="#contact" onClick={clickHander}> Contact Me </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Nav;