import React from 'react'
import './styles.css'
import Comment from './Comment/index'

class Comments extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showАllСomments: false,
    }
  }

  changeDisplayComments = boolean => {
    const { showАllСomments } = this.state
    if (boolean && showАllСomments === false) {
      this.setState({
        showАllСomments: true,
      })
    }
    if (!boolean && showАllСomments === true) {
      this.setState({
        showАllСomments: false,
      })
    }
  }

  render() {
    const { showАllСomments } = this.state
    const { comments } = this.props
    const arrComments = showАllСomments
      ? comments
      : comments.slice(comments.length - 3, comments.length)

    return (
      <div className="comments">
        <div className="g-container">
          <div className="comment__header">
            <div className="comment__wrapp">
              <button
                type="button"
                onClick={() => this.changeDisplayComments(false)}
                className={`${showАllСomments ? '' : 'comment__button--active'} comment__button`}>
                Последние Отзывы
              </button>
              <button
                type="button"
                onClick={() => this.changeDisplayComments(true)}
                className={`${showАllСomments ? 'comment__button--active' : ''} comment__button`}>
                Все отзывы
              </button>
            </div>
            <div className="comments__block">
              <div className="comments__like-block">
                <div className="comments__like-block--image" />
                <p>131</p>
              </div>
              <div className="comments__reviews">
                <div className="comments__reviews--image" />
                <p>{comments.length}</p>
              </div>
            </div>
          </div>
          {arrComments.map(comment => {
            return (
              <Comment
                key={comment.id}
                author={comment.author}
                message={comment.message}
                date={comment.date}
              />
            )
          })}
        </div>
      </div>
    )
  }
}
export default Comments
