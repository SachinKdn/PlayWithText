import React from 'react'

export default function Props(props) {
  return (
    <img
      className={"avatar"}
      src="https://imgs.search.brave.com/YSQiTWM9btJ8A-4E785oRTPcZROQ-OLh4ppnbBxTerQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltZzEvOTkw/MDYzLmpwZw"
      alt={props.person.name}
      width={props.size}
      height={123}
    />
  )
}
