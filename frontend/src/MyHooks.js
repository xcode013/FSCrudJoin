import {useState} from 'react'

export const useToggle = (initialValue = false) => {
    const [toggle, setToggle] = useState(initialValue)
    const setToggleHandler = () => setToggle(prevValue => !prevValue)
    return [toggle, setToggleHandler]
}