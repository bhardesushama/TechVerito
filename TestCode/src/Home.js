import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Seatlayout1 from "../src/Seatlayout1";

export default class Home extends React.Component {
  state = {
    shows: true, owner: true, showRevenue: false
  }
  componentWillMount() {
    localStorage.clear();
  }
  show1 = () => {
    this.setState({ owner: false, showRevenue: false, show1: true, shows: !this.state.shows })

  }
  show2 = () => {
    alert('follow same process as show 1');

  }
  show3 = () => {
    alert('follow same process as show 1');
  }
  ChooseOtherShow = () => {
    this.setState({ show1: !this.state.show1, showRevenue: false, owner: true, shows: true })
  }
  revenue = () => {
    let revenueData = JSON.parse(localStorage.getItem('revenue'));
    this.setState({ revenue: revenueData, shows: false, showRevenue: true })
  }
  render() {
    return (
      <div>
        {this.state.shows && <div>
          <h3>Today's Movie Shows</h3>
          <div className='mb-2'>
            <button type="button" class="btn btn-primary" onClick={this.show1}>Show 1</button>
          </div>
          <div className='mb-2'>
            <button type="button" class="btn btn-primary" onClick={this.show2}>Show 2</button>
          </div>
          <div >
            <button type="button" class="btn btn-primary" onClick={this.show3}>Show 3</button>
          </div>
          {
            this.state.owner && <button className='mt-2' onClick={this.revenue}>Total Revenue</button>
          }
        </div>
        }
        {
          this.state.show1 && <Seatlayout1 ChooseOtherShow={this.ChooseOtherShow} />
        }
        {
          this.state.showRevenue && <div className="ml-2"><div className="ml-2">Total Revenue</div> TotalSwacchBhartTax: {this.state.revenue.totalswacchBhart},
          TotalServiceTax: {this.state.revenue.totalServiceTax},
          TotalkrshiTax: {this.state.revenue.TotalkrshiTax},
          TotalRevenue: {this.state.revenue.revenuetotal}</div>
        }
      </div>
    )
  }

}

