import React from 'react'
import User from './components/User/User'
import Comments from './components/Comments'
import Footer from './components/Footer'

const commentsAll = [
  {
    author: 'Семён Семёнович',
    message: 'Ghbdtn lfdfq gjj,oftvcz&',
    date: '1 октября 2011',
    id: 1,
  },
  {
    author: 'Семён Семёнович',
    message: 'А как удялать коментарии? я расскладку на клавиатуре не поменял в прошлый раз',
    date: '3 октября 2011',
    id: 2,
  },
  {
    author: 'Самуил',
    message: 'На этом сайте удалять коментарии нельзя',
    date: '5 октября 2011',
    id: 3,
  },
  { author: 'Семён Семёнович', message: 'Жалко конечно', date: '5 октября 2011', id: 4 },
  { author: 'Аня', message: 'Перезвоните по моему номеру: 102', date: '6 октября 2011', id: 5 },
  { author: 'Андрей', message: 'Я вас где-то видел!', date: '7 октября 2011', id: 6 },
  {
    author: 'Твой сосед',
    message: 'Я ремонт тут затеял на 5 лет.... не обижайтесь на меня',
    date: '8 октября 2011',
    id: 7,
  },
  {
    author: 'Военкомат',
    message: 'Вероника, не подскажете где можно найти вашего мужа?',
    date: '8 октября 2011',
    id: 8,
  },
  { author: 'Толик', message: 'Я Толик, делаю столики, звоните', date: '9 октября 2011', id: 9 },
  {
    author: 'Роман',
    message: 'Кажется, все коментарии написал',
    date: '10 октября 2011',
    id: 10,
  },
  {
    author: 'Афанасий',
    message: 'Икону не желаете приобрести?',
    date: '11 октября 2011',
    id: 11,
  },
  {
    author: 'Самуил',
    message: 'Привет, Верунь! ниче себе ты крутая. фотка класс!!!! ',
    date: '13 октября 2011',
    id: 12,
  },
  {
    author: 'Лилия Семёновна',
    message:
      'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?',
    date: '14 октября 2011',
    id: 13,
  },
  {
    author: 'Лилия Семёновна',
    message:
      'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?',
    date: '14 октября 2011',
    id: 14,
  },
]

class App extends React.Component {
  state = {
    comments: commentsAll,
  }

  addComment = obj => {
    const { comments } = this.state
    this.setState({
      comments: [...comments, obj],
    })
  }

  render() {
    const { comments } = this.state
    return (
      <div>
        <User />
        <Comments comments={comments} />
        <Footer addComment={this.addComment} idLastComment={comments.length} />
      </div>
    )
  }
}

export default App
