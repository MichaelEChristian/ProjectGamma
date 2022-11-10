import React, {useState} from 'react'
import Invites from './Invites'

function ParentInvite(props) {

const [image, setImage] = useState(null);

  return (
    <div className="invite-container">
        <div className="invite-instructions">
            Design your own wedding invitations with our templates below!
        </div>
        <Invites parentImageState={image} setParentImage={setImage}/>
        <img className="big-card" src={image} alt={image}/>
    </div>
  )
}

export default ParentInvite
