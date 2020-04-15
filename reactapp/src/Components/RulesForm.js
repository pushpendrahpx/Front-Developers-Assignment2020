import React, { Component } from 'react'
import MenuList from './../assets/menu.json';

class RulesForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            User:0,
            iAmHere:true,
            isOne:false,
                options:MenuList,
                visitList:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
                visitno:[
                    {visit:1,foods:[]},
                    {visit:2,foods:[]},
                    {visit:3,foods:[]},
                    {visit:4,foods:[]},
                    {visit:5,foods:[]},
                    {visit:6,foods:[]},
                    {visit:7,foods:[]},
                    {visit:8,foods:[]},
                    {visit:9,foods:[]},
                    {visit:10,foods:[]},
                    {visit:11,foods:[]},
                    {visit:12,foods:[]},
                    {visit:13,foods:[]},
                    {visit:14,foods:[]},
                    {visit:15,foods:[]},
                    {visit:16,foods:[]}
                ],
                menu:[{visit:2,foods:["nsm","Maggie"]}],
                datas:[]
        }

        this.doChange = this.doChange.bind(this)
        this.saveForCustomers = this.saveForCustomers.bind(this)
    }


    componentDidMount(){
        if(localStorage.getItem("menu"))
        {
            let oldData = JSON.parse(localStorage.getItem("menu"));
        console.log(oldData)
        if(typeof oldData.iAmHere !== 'undefined'){
            this.setState({
                visitno:oldData.visitno
            })
        }
        }
       
    }

  doChange = (e)=>{
    e.preventDefault();

    let ask = window.confirm("Want to Add Seriously ?")

    if(ask)
    {
        
    let { dish,visit } = e.target;
    dish = dish.value;
    visit = visit.value;

    console.log(visit)
    let lastvisitno = this.state.visitno;
    console.log("============================",lastvisitno)
    lastvisitno[visit-1].foods.push(dish);


    this.setState({visitno:lastvisitno,isOne:true})
    }
  }
  saveForCustomers(){
      if(this.state.isOne === true){
          
    console.log(this.state)
    localStorage.setItem("menu",JSON.stringify(this.state))
    alert("Loyalty Program Saved !!")
      }else{
          alert("Make Loyalty Program")
      }
  }
  render() {
    return (<span>
        <br />
<button onClick={this.saveForCustomers} className='button is-primary'> Save this Data For Customers :)  </button>
      <form onSubmit={this.doChange}>

<div className='columns'>
    <div className='column'>
        
    <span style={{fontSize:"30px",fontWeight:'100'}}>Your Program Looks Like this</span>
    <table className='table is-bordered' style={{width:'100%'}}>
        
    <thead>
        <td>Visit No.</td>
        <td>Foods</td>
    </thead>
    <tbody>
    {
        this.state.visitno.map(each=>{

          
            return <tr key={each.visit}>
                <td>
                    {each.visit}
                </td>
                <td>
                    <ul>

                    {
                        each.foods.map(food=>{
                            console.log(food.length)
                           return <li key={food}> {food} </li>
                        })
                    }
                    </ul>
                </td>
            </tr>
        })
    }
    </tbody>
</table>
    </div>
    <div className='column'>
    <span style={{fontSize:"30px",fontWeight:'100'}}>Make Customer Loyalty Program</span>
<div class="field">
  <label class="label">Select Dish</label>
  <div class="control" style={{width:'100%'}}>
      <div class="select" style={{width:'100%'}}>
      <select style={{width:'100%'}} name='dish'>
          <option>Select Your Dish</option>
          {
              MenuList.map(e=>{
                  return <option key={e.title} value={e.title}> {e.title} </option>
              })
          }
      </select>

      </div>


  </div>
  </div>


  
<div class="field">
  <label class="label">Subject</label>
  <div class="control" style={{width:'100%'}}>
      <div class="select" style={{width:'100%'}}>
      <select style={{width:'100%'}} name='visit'>
          {
              this.state.visitList.map(e=>{
              return <option key={e}>{e+1}</option>
              })
          }
      </select>

      </div>


  </div>
  </div>


  <button className='button is-link'>
      Submit
  </button>



    </div>

    
</div>

      
 
</form>


    </span>
    )
  }
}

export default RulesForm