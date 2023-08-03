import React , {useState} from 'react'

export default function TextForm(props) {
    const haddleupclick=(event)=> {
        console.log("Upper clicked Was Pressed")
        setText("I have click upper case button")
    }
    const haddleOnChange=(event)=> {
        console.log("haddleOnChange ");
        setText(event.target.value)
    }
    const [text, setText] = useState( 'Enter text here');
  return (
    <div>
            <div className="mb-3">
        < h1>{props.heading}</h1>
        <textarea className="form-control" value={text} id='mybox' onChange={haddleOnChange} rows="8"></textarea>
       
        </div>
        <button className="btn btn-primary"onClick={haddleupclick} > Convert to Uppercase </button>
</div>
  )
}
