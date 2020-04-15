import React, { Component } from 'react'

class MakeVisit extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 User:0,
                 Message:'',
                 OurFoodsForToday:[]
        }
    }
    async componentDidMount(){
        if(localStorage.getItem("menu")){
            let store = JSON.parse(localStorage.getItem("menu"));
            // console.log(store)
            
            let TempMessage = await this.getMessage(store);
            
                this.setState({...TempMessage},()=>{
                    console.log(store)
                })
            //
        }
    }
    getMessage(store){
        console.log(store)
        console.log(store.visitno[store.User])
        let Foods = this.state.OurFoodsForToday;
        
        store.visitno[store.User].foods.map(food=> Foods.push(food))
        console.log(Foods)
        this.setState({
            ...store,
            OurFoodsForToday:Foods
        },()=>{
            return this.state
        })
    }
    MakeVisit = (e)=>{
        console.log(this.state)
        if(this.state.User !==0 && e.target.value == 1){
            let store = JSON.parse(localStorage.getItem("menu"));
            // console.log(store)
            // console.log("Valid");
            this.setState(prev=>{
                console.log(prev.User," =================================================================")
                return {
                    ...store,
                    User:prev.User + 1
                }
            },()=>{
                
                localStorage.setItem("menu",JSON.stringify(this.state))

                window.location.href = '/';
            })
        
        }else{
            let store = JSON.parse(localStorage.getItem("menu"));
            // console.log(store)
            

            if( e.target.value == 0){
                this.setState({
                    ...store,
                    User:0
                },
                ()=>{
                    localStorage.setItem("menu",JSON.stringify(this.state))
                    
                window.location.href = '/';
                }
            )
            }else
            this.setState(prev=>{
                return {
                ...store,
                    User:prev.User + 1
                }
            }
                ,
                ()=>{
                    localStorage.setItem("menu",JSON.stringify(this.state))
                    
                window.location.href = '/';
                }
            )
        }
    }
    render() {
        return (
            <div>
                <section class="hero is-primary">
                    <div class="hero-body">
                        <div class="container">
                        <h1 class="title">
                            Customer Loyalty Rewards Manager
                        </h1>
                        <h2 class="subtitle">
                            Made by Pushpendra Vishwakarma
                        </h2>
                        </div>
                    </div>
                    </section>
                    <div className='columns'>
                        <div className='column'>

                        </div>
                        <div className='column'>
                        <article class="panel is-primary">
                                {/* <p class="panel-heading">
                                    Primary
                                </p> */}
                                <div class="panel-block">
                                    <p class="control has-icons-left">
                                    <button className='button is-primary' value='0' onClick={this.MakeVisit} style={{width:'100%'}}>New Customer</button>
                                    <br /><br />
                                    <button className='button is-primary' value='1' onClick={this.MakeVisit} style={{width:'100%'}}>Go Normally</button>
                                    </p>
                                </div>

                                </article>

                        </div>
                        <div className='column'>
                        <div class="card">
                            <div class="card-content">
                                <p class="title panel-heading" style={{fontWeight:200}}>
                                    Foods Available for Today !
                                </p>
                                <span style={{fontWeight:200,fontSize:'20px'}}>
                                   Visit No. - {this.state.User}
                                </span>
                                <p class="subtitle">
                                {
                                    this.state.OurFoodsForToday.map(e=>{
                                        return <a class="panel-block is-active" style={{fontWeight:200}}>
                                        <span class="panel-icon">
                                        <i class="fas fa-book" aria-hidden="true"></i>
                                        </span>
                                        {e}
                                    </a>
                                    })
                                }
                                </p>
                            </div>
                            <footer class="card-footer">
                                <p class="card-footer-item">
                                <span>
                                    Made by Pushpendra Vishwakarma
                                </span>
                                </p>
                                <p class="card-footer-item">
                                <span>
                                    Get Source Code at <a href="https://github.com/Pushpendrahpx/Front-Developers-Assignment2020">GitHub</a>
                                </span>
                                </p>
                            </footer>
                            </div>
                        </div>
                        <div className='column'></div>
                    </div>
            </div>
        )
    }
}

export default MakeVisit
