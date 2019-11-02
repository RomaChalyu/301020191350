import React from 'react'
import './styles.css'

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: '',
      showErrorMessage: false,
    }
  }

  onChange = e => {
    this.setState({
      comment: e.target.value,
    })
  }

  createDate = () => {
    const date = new Date()
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }

    const desiredDate = date.toLocaleString('ru', options).split(' ')
    desiredDate.pop()
    return desiredDate.join(' ')
  }

  addNewComment = () => {
    const { idLastComment, addComment } = this.props
    const { comment } = this.state
    const message = comment.trim()
    const id = idLastComment + 1

    if (!message) {
      return this.setState({
        comment: '',
        showErrorMessage: true,
      })
    }

    addComment({ author: 'Василий', message, date: this.createDate(), id })
    return this.setState({
      comment: '',
      showErrorMessage: false,
    })
  }

  checkKeystroke = e => {
    if (e.ctrlKey && e.keyCode === 13) {
      this.addNewComment()
    }
  }

  render() {
    const { showErrorMessage, comment } = this.state
    return (
      <footer className="footer">
        <div className="g-container footer__wrapp">
          <textarea
            onKeyDown={this.checkKeystroke}
            onChange={this.onChange}
            maxLength={120}
            value={comment}
            className="footer__textarea"
          />
          <button type="button" onClick={this.addNewComment} className="footer__btn">
            Написать консультанту
          </button>
          <p className={`${showErrorMessage ? 'unhidden' : 'hidden'} footer__text-warning`}>
            Сannot send empty comment
          </p>
        </div>
      </footer>
    )
  }
}

export default Footer
