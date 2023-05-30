import React, {useState} from 'react'

//import "./App.css";



export default function TextForm(props) {

    const handleUpClick=()=>{
        //console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase", "success")

    }

    const handleLoClick=()=>{
      //console.log("Uppercase was clicked" + text)
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to lowercase", "success")
  }

    const handleOnChange=(event)=>{
      //console.log("on change")
      
      setText(event.target.value);
  }

  const [text, setText]= useState('');

  return (
    <>
      

    <div className= "container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Enter the Text Here to Change</h1>
        <div className="mb-3">
        
        <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white'}} id="mybox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className= "btn btn-primary mx-1 my-1" onClick= {handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className= "btn btn-primary mx-1 my-1" onClick= {handleLoClick}>Convert to Lowercase</button>

      
    </div>
    <div clasname= "container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>{props.heading}</h2>
      <p>{text.split(" ").filter((element=>{return element.length!==0})).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element=>{return element.length!==0})).length} Total Read Time</p>
      <h2>Preview</h2>
      <p>{text.length>0?text: "Nothing To Preview!"}</p>

    </div>
    </>
  )
}