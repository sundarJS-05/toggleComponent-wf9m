
import { useState } from 'react'
import './Toggle.css'

export const Toggle = ()=>{

    const [isOn, setIsOn] = useState(false)

    const handleToggle = ()=>{

        setIsOn(!isOn)

    }

    const checkIsOn = isOn ? 'on': 'off'

    return(
        <>
        <div className='toggle-switch' onClick={handleToggle}   style={{backgroundColor: isOn ?  '#4caf50': '' }}>
            <div className={`switch ${checkIsOn } `}>
                <span className='switch-state' >
                    {checkIsOn }

                </span>
            </div>
        </div>
        </>
    )
}