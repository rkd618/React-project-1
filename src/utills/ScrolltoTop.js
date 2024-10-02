import React, { useState, useEffect } from "react";
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
                    <img src={Top} alt="Top" style={{ width: '30px', height: '30px' }} /> {/* Use <img> to display the image */}
                    Top
                </button>
            )}
        </div>
    );
};

const style = {
button: {
bottom: '50px',
right: '50px',
padding: '8px 12px',
position: 'fixed',
backgroundColor: 'royalblue',
border: 'none',
borderRadius: '8px',
cursor: 'pointer',
fontSize: '16px',
display: 'flex',
alignItems: 'center',
}};

export default ScrollToTop;