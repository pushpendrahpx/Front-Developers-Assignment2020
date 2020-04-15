import React, { Component } from 'react'
import RestaurantNavbar from '../Components/RestaurantNavbar'
import RulesForm from '../Components/RulesForm'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MakeVisit from '../Components/MakeVisit'

class RulesBook extends Component{
    render(){
        return <div>form</div>
    }
}


class Restaurant extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <span>

<RestaurantNavbar />
                <div className='columns' style={{padding:'20px'}}>
                    
                    <div className='column'>
                        <BrowserRouter>
                        
                            <Switch>
                                <Route path='/admin' component={RulesForm} />
                                <Route path='/' component={MakeVisit} />
                            </Switch>
                        </BrowserRouter>
                    </div>
                </div>
            </span>
        )
    }
}

export default Restaurant
