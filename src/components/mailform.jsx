import { Component } from 'react'
import '../css/mailform.scss'

import OutsideClickHandler from 'react-outside-click-handler'

export default class MailForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      submitted: false,
      fname: '',
      lname: '',
      email: '',
      phone: '',
      show: this.props.show,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleShow = this.toggleShow.bind(this)
  }
  componentDidMount() {
    this.props.onRef(this)
  }

  componentWillUnmount() {
    this.props.onRef(undefined)
  }

  toggleShow() {
    this.setState({
      show: this.state.show ? false : true,
    })
  }

  hide() {
    this.setState({ show: true })
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

  hidden() {
    if (this.props.visibility) {
      //console.log('state: ', this.state.show ? 'hidden' : 'shown')
      return this.state.show ? '--hidden' : ''
    } else {
      //console.log('visibility: hidden')
      return '--hidden'
    }
  }

  render() {
    return (
      <div
        className='outercontainer'
        style={{ visibility: this.state.show ? 'hidden' : 'visible' }}>
        <OutsideClickHandler
          onOutsideClick={() => {
            this.hide()
          }}>
          <div
            className={`container${this.hidden()}`}
            style={{
              visibility: this.props.visibility ? 'visible' : 'hidden',
            }}>
            <button className='buttoncontainer' onClick={this.toggleShow}>
              <div className='show top' />
              <div className='show'>
                <p>{this.state.show ? 'SHOW' : 'HIDE'}</p>
              </div>
              <div className='show bottom' />
            </button>
            <form onSubmit={this.handleSubmit}>
              <h3>Book your thingy now</h3>
              <p>{this.props.visibility}</p>
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
                placeholder='Email'
                value={this.state.email}
                onChange={this.handleChange}
              />

              <label>Phone:</label>
              <input
                type='text'
                id='phone'
                placeholder='Your Phone Number'
                value={this.state.phone}
                onChange={this.handleChange}
              />

              <input type='submit' value='Submit' />
            </form>
          </div>
        </OutsideClickHandler>
      </div>
    )
  }
}
