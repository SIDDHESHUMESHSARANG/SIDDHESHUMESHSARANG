import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const location = useLocation();
    const getSelectedLink = () => {
        switch (location.pathname) {
            case '/':
                return 'home';
            case '/about':
                return 'about';
            case '/projects':
                return 'projects';
            case '/certs':
                return 'certs';
            default:
                return 'home';
        }
    };

    const [selectedLink, setSelectedLink] = useState(getSelectedLink());

    useEffect(() => {
        setSelectedLink(getSelectedLink());
    }, [location.pathname]);

    const linkClass = (name) =>
        `active:scale-80 transition duration-300 px-4 py-1 ${selectedLink === name
            ? 'bg-white text-black rounded-3xl'
            : 'text-[#404040]'
        }`;

    return (
        <div className='md:bg-black md:rounded-3xl md:w-[390px]'>
            <div className='flex md:text-[20px] p-1 gap-0 md:pl-0'>
                <Link
                    to='/'
                    className={`home ml-4 ${linkClass('home')}`}
                >
                    Home
                </Link>

                <Link
                    to='/about'
                    className={`about ${linkClass('about')}`}
                >
                    About
                </Link>

                <Link
                    to='/projects'
                    className={`projects ${linkClass('projects')}`}
                >
                    Projects
                </Link>

                <Link
                    to='/certs'
                    className={`certs ${linkClass('certs')}`}
                >
                    Certs
                </Link>
            </div>
        </div>
    );
};

export default Navbar;





