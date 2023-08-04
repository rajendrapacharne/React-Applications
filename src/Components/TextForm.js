import React , {useState} from 'react'

export default function TextForm(props) {
    const haddleupclick=(event)=> {
        console.log("Upper clicked Was Pressed")
        let newText=text.toUpperCase();
        setText(newText)
    }
    const haddledclick=(event)=> {
      console.log("Lowercase clicked Was Pressed")
      let newText=text.toLowerCase();
      setText(newText)
  }
    const haddleOnChange=(event)=> {
        console.log("haddleOnChange ");
        setText(event.target.value)
    }
    const [text, setText] = useState( 'Enter text here');
  return (
    <>
      <div className='container'>
              <div className="mb-3">
          < h1>{props.heading}</h1>
          <textarea className="form-control" value={text} id='mybox' onChange={haddleOnChange} rows="8"></textarea>
        
          </div>
          <button className="btn btn-primary mx-2"onClick={haddleupclick} > Convert to Uppercase </button>
          <button className="btn btn-primary mx-2"onClick={haddledclick} > Convert to LowerCase </button>
  </div>
  <div className='container my-3'>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length} Words and {text.length} Characters</p>
    <p>{0.008 * text.split(" ").length} Minutes to read </p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
  </>
    
  )
}
