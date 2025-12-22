import { useState,useCallback,useEffect,useRef } from 'react'
import './file.css'


function File(){

    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");

    const passwordRef=useRef(null);



    const passwordGenerator = useCallback(() => {

        let pass="";
        let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

        if(numberAllowed) str+="0123456789";
        if(charAllowed) str+="!@#$%^&*()_+~`|}{[]:;?><,./-=";

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }
        setPassword(pass);

    },[length, numberAllowed, charAllowed,setPassword]);

    useEffect(()=>{ passwordGenerator(); },[length,numberAllowed,charAllowed,passwordGenerator])


    const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,101);
    window.navigator.clipboard.writeText(password)
  },[password])

    return (
        <section className="outer">
            <section className='section'>
            <h1 className="heading">PASSWORD GENERATOR</h1>
            <div className="container">
                <input className='text' 
                type="text"  
                placeholder='password' 
                readOnly
                value={password}
                ref={passwordRef}
                />
                <button className="copy" onClick={copyPasswordToClipboard}>Copy</button>
            </div>
            <div className="rangeholder">
                <input className='range' 
                type="range" 
                min={6} 
                max={100} 
                value={length}   
                onChange={(e)=>{
                    setLength(e.target.value);
                }} />
                <label className='length'>Length : {length}</label>
                <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Characters</label>
            </div>
        </section>
        </section>
    )
}

export default File