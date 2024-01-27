import React, {useState} from 'react'
export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("Text Converted to uppercase", "success");
  }
   const handleLowClick = () => {
   
    let newText = text.toLowerCase();
     setText(newText);
    props.showalert("Text Converted to lowercase", "success");
     
  }
  const handleOnChange = (event) => {
    console.log("ON change");
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color : props.mode==='light'?'black':'beige'}}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='light'?'white':'beige'}} id="myBox" rows="8"></textarea>
        </div>  
        <button className="btn btn-primary mx-1" onClick={handleUpClick} style={{backgroundColor : props.mode==='light'?'blue':'black'}}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick} style={{backgroundColor : props.mode==='light'?'blue':'black'}} >Convert to Lowercase</button>
    </div>
   
    <div className="container my-2" style={{color : props.mode==='light'?'black':'beige'}}>
        <h3>text summary</h3>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h4>preview</h4>
        <p>{text.length>0?text:"Enter something to preview here"}</p>
      </div>
    </>
  )
}
