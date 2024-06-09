import React from 'react';
import Navigation from './Navigation';
import IceCreamData from '../icecreamData'
import IcecreamMenu from './IcecreamMenu';

function MenuPage(){
    return(
        <>
        <Navigation></Navigation>
        <div>
            <div className='row'>
                {IceCreamData.map(icecream =>{
                    return <div className='col-md-4 p-1'>
                        <div className='m-2'>
                            <IcecreamMenu icecream={icecream}></IcecreamMenu>
                        </div>

                    </div>
                })}
            </div>
        </div>
        </>
    )
}

export default MenuPage;