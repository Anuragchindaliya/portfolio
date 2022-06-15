import React, { ComponentType } from 'react'
import { NavigationDots, SocialMedia } from '../components';

const AppWrap = (Component: ComponentType, idName: string, className?: string) => function HOC() {
    return (
        <div id={idName} className={"app__container " + className}>
            <SocialMedia />
            <div className='app__wrapper app__flex'>
                <Component />

                <div className="copyright">
                    <p className="p-text">@2020 ANURAG</p>
                    <p className="p-text">All rights reserved</p>
                </div>
            </div>

            <NavigationDots active={idName} />
        </div>
    )
}


export default AppWrap;