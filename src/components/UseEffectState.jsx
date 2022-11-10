import React, {useState}  from "react";

function UseEffectState() {

    const [likes, setLikes] = useState(0);
    const [value, setValue] = useState('Text');

    function clickIncrement() {
        setLikes(likes+1);

        console.log(likes)
    }

    function clickDecrement() {
        setLikes(likes - 1)
        console.log(likes)
    }

    return (
        <div className="App">
            <h1>{value}</h1>
            <input
                type="text"
                value={value}
                onChange={event => setValue(event.target.value)}
            />

            <div>{likes}</div>

            <button onClick={clickIncrement}>Increment</button>
            <button onClick={clickDecrement}>Decrement</button>
        </div>
    );
}

export default UseEffectState;
