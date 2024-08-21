import React from 'react';
import DemoApp from './demoApp';
   
    let localStateValue = undefined

export default function Demo() {


    function useSate() {
        if(localStateValue === undefined) {
            localStateValue = initial
        }
    
        const setValue = (val) => {
            localStateValue = val
        }
    
        const retVals = [localStateValue, setValue];
    
        return retVals;
    }

    return <DemoApp useState={useSate}/>
}