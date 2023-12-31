import React , {useState} from 'react'
import ClipboardJS from 'clipboard';
export default function TextForm(props) {
    const haddleupclick=(event)=> {
        console.log("Upper clicked Was Pressed")
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted To UpperCaase","Success");
    };
    const haddledclick=(event)=> {
      console.log("Lowercase clicked Was Pressed")
      let newText=text.toLowerCase();
      props.showAlert("Converted To LowerCase","Success");
      setText(newText)
  };
  const haddleClearclick=(event)=> {
    console.log("haddleClearclick clicked Was Pressed")
    let newText='';
    setText(newText)
    props.showAlert("Text Cleared","Success");
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
  props.showAlert("Text Copied","Success");
  console.log('Text copied to clipboard');
};
    const handleExtraSpaces =()=>
    {
        let newText = text.split(/[ ]+/);
        props.showAlert("Extra Space Removed","Success");
        setText (newText.join(" "))
    }
    const haddleOnChange=(event)=> {
        console.log("haddleOnChange ");
        setText(event.target.value)
    };
    const [text, setText] = useState( 'Enter text here');
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
              <div className="mb-3">
          < h1>{props.heading}</h1>
          <textarea className="form-control" value={text} onChange={haddleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', 
          color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        
          </div>
          <button className="btn btn-primary mx-2 my-2"onClick={haddleupclick} > Convert to Uppercase </button>
          <button className="btn btn-primary mx-2 my-2"onClick={haddledclick} > Convert to LowerCase </button>
          <button className="btn btn-primary mx-2 my-2"onClick={haddleClearclick} > Clear Text </button>
          <button className="btn btn-primary mx-2 my-2"onClick={haddlecopyclick} > Copy To ClipedBoard </button>
          <button className="btn btn-primary mx-2 my-2"onClick={handleExtraSpaces} > Remove Extra Spaces </button>
 
  </div>
  <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
  </>
  )
}
