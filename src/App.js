import batman from './batman.svg'
import './App.css'
import { useState } from 'react'

function App() {
    const [show, setShow] = useState(true)
    return (
        <div className="App">
            <header className="App-header">
                {show ? (
                    <div>
                        <img src={batman} className="App-logo" alt="batman" />
                        <p className="arthur-text">arthur</p>
                    </div>
                ) : null}
                {/* <button onClick={()=>setShow(true)}>show</button>
      <button onClick={()=>setShow(false)}>hide</button> */}
                <button
                    onClick={() => setShow(!show)}
                    className="toggle-button"
                >
                    toggle
                </button>
            </header>
        </div>
    )
}

export default App
