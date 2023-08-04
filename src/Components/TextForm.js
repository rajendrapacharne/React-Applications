import React , {useState} from 'react'
import ClipboardJS from 'clipboard';
export default function TextForm(props) {
    const haddleupclick=(event)=> {
        console.log("Upper clicked Was Pressed")
        let newText=text.toUpperCase();
        setText(newText)
    };
    const haddledclick=(event)=> {
      console.log("Lowercase clicked Was Pressed")
      let newText=text.toLowerCase();
      setText(newText)
  };
  const haddleClearclick=(event)=> {
    console.log("haddleClearclick clicked Was Pressed")
    let newText='';
    setText(newText)
};
const haddlecopyclick = (event) => {
  // Create a new ClipboardJS instance
  const clipboard = new ClipboardJS('.btn-copy', {
    text: () => text,
  });

  // Trigger the copy action
  clipboard.onClick(event);

  // Destroy the ClipboardJS instance to clean up
  clipboard.destroy();

  console.log('Text copied to clipboard');
};
    const handleExtraSpaces =()=>
    {
        let newText = text.split(/[ ]+/);
        setText (newText.join(" "))
    }
    const haddleOnChange=(event)=> {
        console.log("haddleOnChange ");
        setText(event.target.value)
    };
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
          <button className="btn btn-primary mx-2"onClick={haddleClearclick} > Clear Text </button>
          <button className="btn btn-primary mx-2"onClick={haddlecopyclick} > Copy To ClipedBoard </button>
          <button className="btn btn-primary mx-2"onClick={handleExtraSpaces} > Remove Extra Spaces </button>
 
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
