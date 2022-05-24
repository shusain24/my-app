import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick =()=>{
        console.log("UperCase was Clicked....!")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uperCase...",'success..!')
}

const handleCopy = () =>{
var text = document.getElementById("myBox");
text.select();
navigator.clipboard.writeText(text.value)
props.showAlert("text coppied to clickboard",'success..!')

}
const handleLoClick =()=>{
        console.log("LowerCase was Clicked....!")
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to LowerCase",'success..!')
}
const handleClearClick =()=>{
        console.log("UperCase was Clicked....!")
        let newText = ''
        setText(newText);
        props.showAlert("text cleared ....!",'success..!')
}
    const handleonChange =(event)=>{
            console.log("On Change")
            setText(event.target.value)
    }
  
  return  (
      <>
    <div className="container" style={{color: props.mode === 'dark' ? 'white':'blue'}}>
     <h1>{props.heading}</h1>
    <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleonChange} 
            style={{backgroundColor: props.mode === 'dark' ? 'grey':'pink', 
            color:props.mode === 'dark' ? 'white':'blue'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear All word</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-3"  style={{color: props.mode === 'dark' ? 'white':'blue'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} word and {text.length} characters....!!!</p>
        <p>{0.008 * text.split(" ").length} Minitus</p>
        <p>Preview</p>
        <p>{text.length>0?text : "Enter the spmething in the textbox above to preview it here...!"}</p>
    </div>
    </>
  )
}
