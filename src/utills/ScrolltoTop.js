import React, { useState, useEffect } from "react";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp'
import Top from "../Public/Top.png"
const ScrollToTop = () => {
    const [visibility, setVisibility] = useState(false);

    const visibilityHandler = () => {
        if (window.scrollY > 300) {
            setVisibility(true);
        } else {
            setVisibility(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', visibilityHandler);
        return () => {
            window.removeEventListener('scroll', visibilityHandler);
        };
    }, []);

    const scrollHandler = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            {visibility && (
                <button onClick={scrollHandler} style={style.button}> 
                     <KeyboardDoubleArrowUpIcon/>
                </button>
            )}
        </div>
    );
};

const style = {
button: {
bottom: '35px',
right: '35px',
width: '55px',
height:'40px',
position: 'fixed',
backgroundColor: '#33527A',
border: 'none',
borderRadius: '8px',
cursor: 'pointer',
fontSize: '16px',
alignItems: 'center',
}};

export default ScrollToTop;