import {Component} from 'react'

import './index.css'

const registrationStatus = {
  initial: 'INITIAL',
  registration: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
  yetToRegister: 'YET_TO_REGISTER',
}

class ActiveEventRegistrationDetails extends Component {
  state = {Active: registrationStatus.initial}

  renderRegister = () => {
    this.setState({Active: registrationStatus.registration})
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
          alt="registered"
          className="register"
        />
        <h1>you are already registered</h1>
      </div>
    )
  }

  renderRegisterYet = () => {
    this.setState({Active: registrationStatus.yetToRegister})
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
          alt="yet to register"
          className="yetTo"
        />
        <p>
          lange focal distance, distance from the mounting flange to the film
          plane of an interchangeable lens camera Cash register, a device for
          recording cash transactions and storing cash Image registration,
        </p>
        <button type="button">Registered Here</button>
      </div>
    )
  }

  renderRegisterClosed = () => {
    this.setState({Active: registrationStatus.registrationClosed})
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
          alt="registration closed"
          className="closed"
        />
        <h1>Registration are closed</h1>
        <p>Stay tuned</p>
      </div>
    )
  }

  render() {
    const {Active} = this.state
    switch (Active) {
      case registrationStatus.registration:
        return this.renderRegister()
      case registrationStatus.registrationClosed:
        return this.renderRegisterClosed()
      case registrationStatus.yetToRegister:
        return this.renderRegisterYet()
      default:
        return null
    }
  }
}
export default ActiveEventRegistrationDetails
