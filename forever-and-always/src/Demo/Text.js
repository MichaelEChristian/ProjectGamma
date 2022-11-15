import React from 'react'

function Text(props) {

    const sample = "Hello! Experimental Text Here!" //needs to = props.text

    console.log("any text in props?", props.text)

  return (
    <div>{sample}</div> //this state will be determined by the input from the form
  )
}

export default Text
