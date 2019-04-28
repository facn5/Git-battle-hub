import React from 'react';
import ReactDOM from 'react-dom';
import Input from './components/input';
import PortfolioCard from './components/card';
import "./style.css";
import { getData, API_BASE } from "./tools/getData";
class App extends React.Component {
state = {
  userOne:"",
  userTwo:"",
  userOneData:'',
  userTwoData:'',
  searching:0,

}
// componentDidUpdate(){
//   alert(this.state.userOne + this.state.userTwo);
// }
  onclickHandler = () => {
  const username1 = this.state.userOne;
  const username2 = this.state.userTwo;
  // const url = `${API_BASE}/users/tamernasser`;
  const url1 = `${API_BASE}/users/${username1}`;
  const url2 = `${API_BASE}/users/${username2}`;

  getData(url1).then(d=>d.json()).then(d =>{
    // console.log(d);
     this.setState( {userOneData:d} );
  });
  getData(url2).then(d=>d.json()).then(d =>{
    // console.log(d);
     this.setState( {userTwoData:d} );
  });
  this.setState({searching:1})
}
render(){
  console.log("main",this.state.searching);
  return(<div>
    <div className="inputs-container">

      <Input name= "userone" updateUser={(value) => this.setState({ userOne: value})}/>
      <button className="myButton" onClick={this.onclickHandler} >Compare </button>
      <Input updateUser={(value) => this.setState({ userTwo: value})} />
    </div>
    <div className="cards-container">
    <PortfolioCard done={this.state.searching} userdata={this.state.userOneData} />
    <img id ="shadi" src="https://i.imgur.com/kHQES5U.png" />
     <PortfolioCard done={this.state.searching} userdata={this.state.userTwoData}/>
    </div>
    </div>
)}}


ReactDOM.render(<App/>, document.getElementById('ter'));
