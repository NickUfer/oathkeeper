import React, { ChangeEvent, MouseEvent, Component } from 'react'
import cn from 'classnames'
import * as styles from './newsletter.module.css'
import VerticalDivider from './vertical-divider'

interface StateTypes {
  email: string
}

class Newsletter extends Component<{}, StateTypes> {
  state = { email: '' }

  private onSubmit = (e: MouseEvent<HTMLInputElement>) => {
    e.preventDefault()
    window.open(
      'https://ory.us10.list-manage.com/subscribe?u=ffb1a878e4ec6c0ed312a3480&id=f605a41b53&MERGE0=' +
      encodeURIComponent(this.state.email),
    )
  }

  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: e.target.value })
  }

  render() {
    return (
      <div className={styles.newsletter}>
        <div className="container-fluid">
          <div className="row">
            <VerticalDivider padding={96} />
            <div className="col-lg-offset-1 col-lg-4  col-md-offset-1 col-md-10  col-sm-offset-1 col-sm-10">
              <h3>Never miss a patch</h3>
              <p>
                Keep your applications and systems up to date.
                ORY ships regular product patches and updates.
                Subscribe to our newsletter to get the “good stuff”.
              </p>
            </div>
            <div className={cn('col-lg-offset-2 col-lg-4  col-md-offset-1 col-sm-10  col-sm-offset-1 col-sm-10', styles.right)}>
              <h3>Subscribe now</h3>
              <form className={styles.form}>
                <input type="email"
                  name={'email'}
                  placeholder={'Enter your email'}
                  required
                  onChange={this.onChange}
                  value={this.state.email} />
                <input type="button" name={'submit'} value={'Subscribe'} onClick={this.onSubmit} />
              </form>
              <p className="secondary">
                We send you "the good stuff" to keep you up to date.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsletter
