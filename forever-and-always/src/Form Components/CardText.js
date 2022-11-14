import React from 'react'

function CardText() {
  return (
    <form>
        <div className="form-group">
            <div className="invite-name-container">
                <label className="label">Your name</label>
                <input className="input" type="text"></input>
                <label className="label">Your spouse's name</label>
                <input className="input" type="text"></input>
            </div>
            <label className="label">Invitation description</label>
            <textarea placeholder="...request the honor of your presence..." className="invite-description-box" rows="5"></textarea>
            <label className="label">Date of wedding</label>
            <input className="input" placeholder="...November 15, 2022" type="text"></input>
            <label className="label">Time of event</label>
            <input className="input" placeholder="...at 5 O'CLOCK..." type="text"></input>
            <label className="label">Location</label>
            <input className="input" placeholder="...terrace on the park 1111 East 12th Street, Chicago IL..." type="text"></input>
            <label className="label">Any additional information</label>
            <input className="input" placeholder="...dinner will be served! See you there!..." type="text"></input>
        </div>
    </form>
  )
}

export default CardText
