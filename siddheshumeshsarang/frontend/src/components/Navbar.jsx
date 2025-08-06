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
            case '/blog':
                return 'blog';
            default:
                return 'home'; 
        }
    };

    const [selectedLink, setSelectedLink] = useState(getSelectedLink());

    useEffect(() => {
        setSelectedLink(getSelectedLink());
    }, [location.pathname]); 

    return (
        <div className=''>
            <div className='flex gap-6 md:pl-0'>
                <Link
                    to='/'
                    className='home ml-8'
                    style={{ color: selectedLink === 'home' ? '#fff' : '#404040 '
                    }}
                >
                    Home
                </Link>

                <Link
                    to='/about'
                    className='about'
                    style={{ color: selectedLink === 'about' ? '#fff' : '#404040' }}
                >
                    About
                </Link>

                <Link
                    to='/projects'
                    className='projects'
                    style={{ color: selectedLink === 'projects' ? '#fff' : '#404040' }}
                >
                    Projects
                </Link>

                {/* TODO: <Link
                    to='/blog'
                    className='blog'
                    style={{ color: selectedLink === 'blog' ? '#fff' : '#404040' }}
                >
                    Blog
                </Link> */}
            </div>
        </div>
    );
};

export default Navbar;
