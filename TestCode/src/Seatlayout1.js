import React from 'react';
import CartItems from '../src/CartItems';
let seatLayout1Data = [
    { Price: 320, id: 1, seatTag: 'A1', rowOrder: 1, seatTypeId: 1, colNum: 1 }, { Price: 320, id: 2, seatTag: 'A2', rowOrder: 1, seatTypeId: 1, colNum: 2 }, { Price: 320, id: 3, seatTag: 'A3', rowOrder: 1, seatTypeId: 1, colNum: 3 },
    { Price: 320, id: 4, seatTag: 'A4', rowOrder: 1, seatTypeId: 1, colNum: 4 }, { Price: 320, id: 5, seatTag: 'A5', rowOrder: 1, seatTypeId: 1, colNum: 5 }, { Price: 320, id: 6, seatTag: 'A6', rowOrder: 1, seatTypeId: 1, colNum: 6 },
    { Price: 320, id: 7, seatTag: 'A7', rowOrder: 1, seatTypeId: 1, colNum: 7 }, { Price: 320, id: 8, seatTag: 'A8', rowOrder: 1, seatTypeId: 1, colNum: 8 }, { Price: 320, id: 9, seatTag: 'A9', rowOrder: 1, seatTypeId: 1, colNum: 9 },
    { Price: 320, id: 10, seatTag: 'B1', rowOrder: 2, seatTypeId: 1, colNum: 1 }, { Price: 280, id: 11, seatTag: 'B2', rowOrder: 2, seatTypeId: 1, colNum: 2 }, { Price: 280, id: 12, seatTag: 'B3', rowOrder: 2, seatTypeId: 1, colNum: 3 },
    { Price: 280, id: 13, seatTag: 'B4', rowOrder: 2, seatTypeId: 1, colNum: 4 }, { Price: 280, id: 14, seatTag: 'B5', rowOrder: 2, seatTypeId: 1, colNum: 5 }, { Price: 280, id: 14, seatTag: 'B6', rowOrder: 2, seatTypeId: 1, colNum: 6 },
    { Price: 280, id: 16, seatTag: '', rowOrder: 2, seatTypeId: 0, colNum: 7 }, { Price: 280, id: 17, seatTag: '', rowOrder: 2, seatTypeId: 0, colNum: 8 }, { Price: 280, id: 18, seatTag: '', rowOrder: 2, seatTypeId: 0, colNum: 9 },
    { Price: 240, id: 19, seatTag: '', rowOrder: 3, seatTypeId: 0, colNum: 1 }, { Price: 240, id: 20, seatTag: 'C2', rowOrder: 3, seatTypeId: 1, colNum: 2 }, { Price: 240, price: 240, id: 21, seatTag: 'C3', rowOrder: 3, seatTypeId: 1, colNum: 3 },
    { Price: 240, id: 22, seatTag: 'C4', rowOrder: 3, seatTypeId: 1, colNum: 4 }, { Price: 240, id: 23, seatTag: 'C5', rowOrder: 3, seatTypeId: 1, colNum: 5 }, { price: 240, id: 24, seatTag: 'C6', rowOrder: 3, seatTypeId: 1, colNum: 6 },
    { Price: 240, id: 25, seatTag: 'C7', rowOrder: 3, seatTypeId: 1, colNum: 7 }, { Price: 280, id: 26, seatTag: '', rowOrder: 3, seatTypeId: 0, colNum: 8 }, { price: 240, id: 27, seatTag: '', rowOrder: 3, seatTypeId: 0, colNum: 9 }
]
var cartItem = [];

export default class Seatlayout1 extends React.Component {
    state = {
        cartShow: false
    }
    // seat layout of theator
    bindSeatLayout = () => {
        var data = [];
        var IsRow = 0;
        let colNum = 9;
        var prevRowNumber = seatLayout1Data[0].rowOrder;
        var rowHtml = seatLayout1Data.map((val, index) => {
            let seatImageurl = ''
            var SeatTag = val.seatTypeId != 0 ? val.seatTag : "";
            if (val.seatTypeId != 0) {
                seatImageurl = val.seatTypeId == 1 ? require("../src/Images/seat-available.gif") : require("../src/Images/seat-booked.gif")
            }
            else {
                seatImageurl = '';
            }

            if (prevRowNumber == val.rowOrder) {

                {
                    val.seatTypeId == '1' ?
                        data.push(<td style={{ borderTop: '0px' }} onclick={(e) => this.selectSeat(e, val)} className="visible" id={val.id} data-value={"seatTag" + SeatTag} onClick={(e) => this.PerformSeatAction(e, val.id)}>
                            <img id={val.id} src={seatImageurl} />
                            <label style={{ display: "block" }}> {SeatTag} </label>
                        </td>) :

                        data.push(<td style={{ borderTop: '0px' }} className="visible" id={val.id} data-value={"seatTag" + SeatTag} onClick={(e) => this.PerformSeatAction(e, val.id)}>
                            <img id={val.id} src={seatImageurl} />
                            <label style={{ display: "block" }}> {SeatTag} </label>
                        </td>)
                }

                if (val.colNum == colNum) {
                    return <tr>{val.rowOrder == 1 && <td>Platinum 320</td>}
                        {val.rowOrder == 2 && <td>Gold 280</td>}
                        {val.rowOrder == 3 && <td>Silver 240</td>}
                        {data.map(item => item)}</tr>
                }
            }
            else {
                IsRow = 0;
                prevRowNumber = val.rowOrder;
                data = [];
                let seatImageurl = '';
                {
                    val.seatTypeId == '1' ?
                        data.push(<td style={{ borderTop: '0px' }} onclick={(e) => this.selectSeat(e, val)
                        } className="visible" id={val.id} data-value={"seatTag" + SeatTag} onClick={(e) => this.PerformSeatAction(e, val.id)}>
                            <img id={val.id} src={seatImageurl} />
                            <label style={{ display: "block" }}> {SeatTag} </label>
                        </td>) :
                        data.push(<td style={{ borderTop: '0px' }} className="visible" id={val.id} data-value={"seatTag" + SeatTag} onClick={(e) => this.PerformSeatAction(e, val.id)}>
                            <img id={val.id} src={seatImageurl} />
                            <label style={{ display: "block" }}> {SeatTag} </label>
                        </td>)
                }

            }


        });
        return <tbody>
            {rowHtml}
        </tbody>
    }
    //seat selection of user
    PerformSeatAction = (e, item) => {
        var PrevJSONSeatLayout = seatLayout1Data;
        var tdId = e.currentTarget.getAttribute('id');
        var imageUrl = ''
        var tdCells = document.getElementById(tdId);
        var currentSeat = seatLayout1Data.filter((val) => val.id == item);
        imageUrl = require("../src/Images/seat-curentbook.gif");
        tdCells.firstElementChild.setAttribute('src', imageUrl);

        cartItem.push(currentSeat);
        localStorage.setItem('cartItems', JSON.stringify(cartItem)) //storing current selection of user 
    }
    procced = () => {
        this.setState({ cartShow: true });
    }

    render() {
        return (<div className='ml-4'>
            <img className="mr-1" src={require("../src/Images/seat-available.gif")} />
            <span className="mr-2">Available Seats</span>
            <img className="mr-1" src={require("../src/Images/seat-booked.gif")} />
            <span className="mr-2">Booked Seats</span>
            <div className="sepr-line mb-2"></div>
            <div className='table-responsive'>
                <table className='table table-sm' style={{ width: '500px' }}>{this.bindSeatLayout()}</table>
            </div>
            <div>
                <button className='mr-2' onClick={this.procced}>Procced</button>
                <button onClick={this.props.ChooseOtherShow}>Choose Other Show</button></div>
            {this.state.cartShow && <CartItems></CartItems>}
        </div>)
    }
}