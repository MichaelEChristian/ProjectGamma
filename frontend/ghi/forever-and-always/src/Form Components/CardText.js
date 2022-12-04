import React, {useState, useRef} from 'react'

function CardText(props) {

  const blankForm = {
    name: "",
    spouse_name: "",
    description: "",
    wedding_date: "",
    wedding_time: "",
    location: "",
    extra: ""
  }

  const [inputText, setInputText] = useState(blankForm);

  const myForm = useRef(null);

  const resetForm = (e) => {
    // generateOnForm();
    setInputText(blankForm);
    myForm.current.reset();
  }

  return (
    <form ref={myForm} onSubmit={e => resetForm(e)}className="login-form">
        <div className="form-group">
            <label className="label">Your name</label>
              <input defaultValue={inputText.name} onChange={e => setInputText({...inputText, name: e.target.value})} className="input" type="text"></input>
            <label className="label">Your spouse's name</label>
              <input defaultValue={inputText.spouse_name} onChange={e => setInputText({...inputText, spouse_name: e.target.value})} className="input" type="text"></input>
            <label className="label">Invitation description</label>
              <textarea defaultValue={inputText.description} onChange={e => setInputText({...inputText, description : e.target.value})} placeholder="...request the honor of your presence..." className="invite-description-box" rows="5"></textarea>
            <label className="label">Date of wedding</label>
              <input defaultValue={inputText.wedding_date} onChange={e => setInputText({...inputText, wedding_date: e.target.value})} className="input" placeholder="...November 15, 2022" type="text"></input>
            <label className="label">Time of event</label>
              <input defaultValue={inputText.wedding_time} onChange={e => setInputText({...inputText, wedding_time: e.target.value})} className="input" placeholder="...at 5 O'CLOCK..." type="text"></input>
            <label className="label">Location</label>
              <input defaultValue={inputText.location} onChange={e => setInputText({...inputText, location: e.target.value})} className="input" placeholder="...terrace on the park 1111 East 12th Street, Chicago IL..." type="text"></input>
            <label className="label">Any additional information</label>
              <input defaultValue={inputText.extra} onChange={e => setInputText({...inputText, extra: e.target.value})} className="input" placeholder="...dinner will be served! See you there!..." type="text"></input>
            <button type="button" id="bton" className="btn btn-lg btn-primary">Preview</button>
        </div>
    </form>
  )
}

export default CardText
