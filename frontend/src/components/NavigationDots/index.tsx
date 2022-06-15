import React from 'react'
import "./index.scss";
const NavigationDots = ({ active }: { active: string }) => {
    return (
        <div className="app__navigation">
            {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map((item, index) => (
                <a
                    href={`#${item}`}
                    key={item + index}
                    className="app__navigation-dot"
                    style={active === item ? { backgroundColor: '#313BAC' } : {}}
                />
            ))}
        </div>
    )
}

export default NavigationDots