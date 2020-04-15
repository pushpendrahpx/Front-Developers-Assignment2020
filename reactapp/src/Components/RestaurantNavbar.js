import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class RestaurantNavbar extends Component {
    
    render() {

        return (<nav class="navbar is-dark" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
        
          <span style={{fontSize:"30px",fontWeight:200,cursor:"pointer",userSelect:"none",padding:"10px"}}>
            Front-End Assignments
          </span>
      
          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" class="navbar-menu" style={{fontWeight:100}}>
          <div class="navbar-start">
            <a class="navbar-item" href="/">
              Make Visit
            </a>
      
            <a class="navbar-item" href="/admin">
              Make New Loyalty Program
            </a>
      
          </div>
      
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a class="button is-light">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
        )
    }
}

export default RestaurantNavbar
