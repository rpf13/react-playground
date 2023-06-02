import React, {useState} from 'react'
import UseEffectCounterHelper from './UseEffectCounterHelper';

function UseEffectCounterContainer() {
    const [display, setDisplay] = useState(true);
    return (
        <div>
            <button onClick={ () => {
                setDisplay(!display)
            }}>
                Toggle Display
            </button>
            {display && <UseEffectCounterHelper />}
        </div>
    )
}

export default UseEffectCounterContainer