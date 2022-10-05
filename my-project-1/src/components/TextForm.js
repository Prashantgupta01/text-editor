import React, { useState } from 'react'



export default function TextForm(props) {
    const [text, setText] = useState('');

    const handelUpClick = ()=>{
        // console.log("upper was click" + text)
          let newText = text.toUpperCase();
        setText(newText)
        props.showAlert(" Converted to UpperCase", "success")
    }
    
    const handelloClick = ()=>{
      // console.log("upper was click" + text)
        let newText = text.toLowerCase();
      setText(newText)
      props.showAlert(" Converted to LowerCase", "success")

  }

  const handelclearClick = ()=>{
    // console.log("upper was click" + text)
      let newText = ' ';
    setText(newText)
    props.showAlert(" All Clear", "success")

}

    const handelOnChange = (event)=>{
        // console.log("upper was click")
        setText(event.target.value)
    }

    const handelcopyClick = ()=>{
      var text = document.getElementById("myBox")
      text.select();
      // text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value);
      // setText(event.target.value)

      props.showAlert(" Coping Complete", "success")

  }

  const handelExtraSpace = ()=>{
    let newText = text.split(/[ ]+/);
        setText(newText.join(" "))

      props.showAlert(" Extra space Cleared", "success")


 }

  

    return (
      <>
        <div className="container"  style={{color: props.mode==='light'?'#042743':'white'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <label className="form-label">Example textarea</label>
            <textarea
              className="form-control"
              value={text}
              onChange={handelOnChange}
              id="myBox"
              rows="8"
              style={{backgroundColor: props.mode==='light'?'white':'#13466e', color:props.mode==='light'?'black':'white'}}
            ></textarea>
          </div>

          <button className="btn btn-primary mx-1 my-1" onClick={handelUpClick} disabled={text.length===0}>
            Convert to uppercase
          </button>
          <button className="btn btn-primary mx-1 my-1" onClick={handelloClick} disabled={text.length===0}>
            Convert to Lowecase
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handelclearClick} >
            Clear All
          </button>
          <button className="btn btn-primary mx-1 my-1" onClick={handelcopyClick} disabled={text.length===0}>
            Copy All
          </button>
          <button className="btn btn-primary mx- my-1" onClick={handelExtraSpace} disabled={text.length===0}>
            Remove Ext. Space
          </button>
        </div>

        <div className='container my-3 ' style={{color: props.mode==='light'?'#042743':'white'}}>
          <h1>Your Text Summary</h1>
          <p>{text.split(" ").filter((element)=> {return element.length!==0}).length} words and {text.length} characters</p>
          <p>{0.008*text.split(" ").filter((element)=> {return element.length!==0}).length} min to read</p>
          <h2>Priview</h2>
          <p>{text.length>0?text:"Type something to priview"}</p>

        </div>
      </>
    );
}
