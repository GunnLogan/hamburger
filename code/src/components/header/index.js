import React from "react"
import Grid from "lib/grid"

import "./style.css"

class Header extends React.Component {


  state = {
    isChange: false
  }

   hamburgerToggle = () => {
     this.setState({isChange: !this.state.isChange})

     // if (this.state.isChange){
     //   this.setState({
     //     isChange: false
     //   })
     // } else {
     //   this.setState({
     //     isChange: true
     //   })
     // }
    }

  render() {

    let hamburgerClass="hamburger-label"
      if (this.state.isChange){
        hamburgerClass = "hamburger-label change"
      }


    return (
      <header>
            <div className={hamburgerClass} onClick={this.hamburgerToggle} >
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>


        <div className="menu">
          <ul>
            <li>
                <a href="http://technigo.io" >Technigo</a>
            </li>
            <li>
                <a href="http://technigo.io" >Boot Camp</a>
            </li>
            <li>
                <a href="http://technigo.io" >Stories</a>
            </li>
            <li>
                <a href="http://technigo.io" >About</a>
            </li>
          </ul>
        </div>


        <Grid className="header-grid">
          <a href="http://technigo.io">Technigo</a>
          <a href="http://technigo.io">Boot Camp</a>
          <a href="http://technigo.io">Stories</a>
          <a href="http://technigo.io">About</a>
        </Grid>

      </header>
    )
  }

}

export default Header
