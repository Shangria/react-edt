import React from 'react';
import classes from './MainInput.module.css'

const MainInput = React.forwardRef((props, ref) => {
   /* получаем элемент input и все его свойства от родителя, котрые потом можно использовать*/

    return (
      <input ref={ref} className={classes.mainInput} {...props}/>
    );
});

export default MainInput;
