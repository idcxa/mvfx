import { Component } from 'react'

class InputArea extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.props.liftState(event.target.value)
  }
  render() {
    return (
      <>
        <input
          type='text'
          id='fname'
          name='firstname'
          placeholder='Your name..'
          onChange={this.handleChange}
        />
      </>
    )
  }
}

class DisplayArea extends Component {
  render() {
    return (
      <div className='column'>
        <div className='col-body'>
          <div id='preview'>{this.props.content}</div>
        </div>
      </div>
    )
  }
}

export default class Siblings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: 'oauwhdwaouhd',
    }
  }
  liftState = (state) => {
    this.setState({ content: state })
  }
  render() {
    return (
      <div className='App'>
        <DisplayArea content={this.state.content} />
        <InputArea liftState={this.liftState} />
      </div>
    )
  }
}
