import React from "react";
import {useSelector} from 'react-redux';
const TestComponent = () =>{
    const empState = useSelector((state) => state);
    console.log(empState);
    return(
        <div>Testing</div>
    )
}

export default TestComponent;