import { useState, type ChangeEvent, type FormEvent, type KeyboardEvent, type MouseEvent } from "react"


export function sampleForm(){
    const [inputData, setInputData] =useState('')
    const [color,setColor] = useState('red')


    function handlechange(event : ChangeEvent<HTMLInputElement>){
        setInputData(event.target.value)
    }

    function handleButtonClick(event : MouseEvent<HTMLButtonElement>){
        event.preventDefault()
    }

    function handleSubmit(event : FormEvent<HTMLFormElement>) {
        event.preventDefault()
    }

    function handleKeyDown(event : KeyboardEvent<HTMLInputElement>){
        event.key === 'enter'
    }

    function handleColorChange(event : ChangeEvent<HTMLSelectElement>){
        event.preventDefault()
        setColor('blue')
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
               type="text"  
               value={inputData}
               placeholder="Enter Text"
               onChange={handlechange}
               onKeyDown={handleKeyDown}
            />

            <select value={color} onChange={handleColorChange}>
                <option value="red">Red</option>
            </select>

            <button type="submit" onClick={handleButtonClick} >Submit</button>
        </form>
    )
}