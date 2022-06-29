import React from 'react';
import classes from './MyInput.module.css';

const MyInput = ((props) => {
    return (
        <div className={classes.myInput}>
            <div className={classes.inputBox}>
                <input {...props}/>
                <span>{props.placeholder}</span>
            </div>
        </div>
    );
});

export default MyInput;