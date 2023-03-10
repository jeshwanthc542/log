import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  subscribeButton = () => {
    const {isSubscribed} = this.state
    if (isSubscribed === true) {
      return <button type="button">Subscribe</button>
    }
    return <button type="button">Subscribed</button>
  }

  render() {
    return (
      <div className="bg-container">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning!</p>
        {this.subscribeButton()}
      </div>
    )
  }
}

export default Welcome
