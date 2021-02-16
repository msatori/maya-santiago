import React, { useEffect } from 'react';
import capitalizeFirstLetter from '../../utils/helpers';


function Nav(props) {

    const {
        pages = [],
        setCurrentPage,
        currentPage,
    } = props

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentPage.name);
    }, [currentPage])

    return (
        <header className="flex-row px-1">
            <h2>
                <a href="/">
                    Maya Santiago
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    {pages.map((Page) => (
                        <li
                            className={`mx-5 ${currentPage.name === Page.name && 'navActive'
                                }`}
                            key={Page.name}
                        >
                            <span
                                onClick={() => setCurrentPage(Page)}
                            >
                                {capitalizeFirstLetter(Page.name)}
                            </span>
                        </li>
                    ))}

                </ul>
            </nav>
        </header>
    )
};

export default Nav;