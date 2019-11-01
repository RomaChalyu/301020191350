import React from 'react'
import './styles.css'

export default function Comment(props) {
  const { author, date, message } = props
  return (
    <div className="comment">
      <div className="comment__wrapp">
        <p className="comment__author">{author}</p>
        <p className="comment__date">{date}</p>
      </div>
      <div className="comment__block">
        <div className="comment__block-triangle">
          <div className="comment__triangle" />
          <div className="comment__triangle-border1" />
          <div className="comment__triangle-border2" />
          <div className="comment__triangle-border3" />
        </div>
        <p className="comment__text">{message}</p>
      </div>
    </div>
  )
}
