import { Component } from 'react'
import '../css/mailform.scss'

export default class MailForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      submitted: false,
      fname: '',
      lname: '',
      email: '',
      phone: '',
      show: true,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleShow = this.toggleShow.bind(this)
  }

  toggleShow() {
    this.setState({
      show: this.state.show ? false : true,
    })
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  handleSubmit(event) {
    this.setState({
      submitted: true,
    })
    alert(
      this.state.fname +
        ' ' +
        this.state.lname +
        '\nhas email: ' +
        this.state.email +
        '\nand phone: ' +
        this.state.phone
    )
    event.preventDefault()
  }

  render() {
    return (
      <div className='outercontainer'>
        <div className={`container${this.state.show ? '--hidden' : ''}`}>
          <div className='buttoncontainer'>
            <button className='show top' onClick={this.toggleShow} />
            <button className='show' onClick={this.toggleShow}>
              <p>{this.state.show ? 'SHOW' : 'HIDE'}</p>
            </button>
            <button className='show bottom' onClick={this.toggleShow} />
          </div>
          <form onSubmit={this.handleSubmit}>
            <h3>Book your thingy now</h3>
            <label htmlfor='fname'>First Name</label>
            <input
              type='text'
              id='fname'
              name='firstname'
              placeholder='Your name..'
              value={this.state.fname}
              onChange={this.handleChange}
            />

            <label htmlfor='lname'>Last Name</label>
            <input
              type='text'
              id='lname'
              name='lastname'
              placeholder='Your last name..'
              value={this.state.lname}
              onChange={this.handleChange}
            />

            <label>Email:</label>
            <input
              type='text'
              id='email'
              placeholder='First Name'
              value={this.state.email}
              onChange={this.handleChange}
            />

            <label>Phone:</label>
            <input
              type='text'
              id='phone'
              placeholder='First Name'
              value={this.state.phone}
              onChange={this.handleChange}
            />

            <input type='submit' value='Submit' />
          </form>
        </div>
      </div>
    )
  }
}
