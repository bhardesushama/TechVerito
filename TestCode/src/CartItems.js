import React, { Component } from 'react';

function CartItems(...props) {
    let data = JSON.parse(localStorage.getItem('cartItems'));
    var htmlData = '';
    var total = 0;
    let totalServiceTax = 0;
    let totalswacchBhart = 0;
    let TotalkrshiTax = 0;
    let revenuetotalswacchBhart = 0;
    let revenuetotalServiceTax = 0;
    let revenueTotalkrshiTax = 0;
    let revenuetotal = 0;
    data.map((item) => item.map((val) => {
        let servicetax = val.Price * 0.14;
        let swacchBhart = val.Price * 0.005;
        let krshi = val.Price * 0.005;
        total = (total + (val.Price + swacchBhart + krshi + servicetax))
        totalswacchBhart = totalswacchBhart + swacchBhart;
        totalServiceTax = totalServiceTax + servicetax;
        TotalkrshiTax = TotalkrshiTax + krshi;
    }))
    revenuetotalswacchBhart = totalswacchBhart + revenuetotalswacchBhart;
    revenuetotalServiceTax = totalServiceTax + revenuetotalServiceTax;
    revenueTotalkrshiTax = TotalkrshiTax + revenueTotalkrshiTax;
    revenuetotal = total
    let revenueData = {
        totalswacchBhart: revenuetotalswacchBhart,
        totalServiceTax: revenuetotalServiceTax,
        TotalkrshiTax: revenueTotalkrshiTax,
        revenuetotal: revenuetotal
    }
    /// store total revenue in localstorage
    localStorage.setItem('revenue', JSON.stringify(revenueData))


    return <div>
        <h4>Your Cart Items</h4>
        <h4>Audi1</h4>
        {data.map((item) => item.map((val) =>
            <div>{val.seatTag}: {val.Price}</div>))}
        <div>TotalSwacchBhart:{totalswacchBhart}</div>
        <div>TotalServiceTax:{totalServiceTax}</div>
        <div>TotalkrshiTax:{TotalkrshiTax}</div>
        <div> Total:{total}</div>
        <button className='mr-2'>Back</button>
        <button onClick={() => alert('Redirect to payment pag')}>Payment</button>
    </div>

}
export default CartItems;