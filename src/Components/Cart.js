
import React, { Component } from 'react'
import Product from './Product';
import logo from '../images/empty-cart-png.png'

export default class Cart extends Component {

    constructor(props) {
        super(props)

    }  
    calc_Total = () => {
        let sum_Price = 0;
        this.props.list.forEach((element) => { 
           sum_Price += Number(element.price);
        })
        if (sum_Price == 0)
          
            return <img id="logo" src={logo} />
          
        else return 'Total: ' + sum_Price.toLocaleString() + '₪';
    }
    
   
    render() {
        return (
            <div>
                <div id='Products'>
                    <h2>Shoping Cart </h2>           
                   
                    {this.props.list.map((element, i) => {
                     
                        return <Product name={element.name} price={element.price} index={i} del={this.props.del} />
                    })}

                    <div id='total'>
                        <h3 id='total'>{this.calc_Total()}</h3>
                    </div>
                      
                </div>
                <div >
                     <button onClick={() => {if(window.confirm ('are you sure you want to place order?' + this.calc_Total())) this.props.buyAll()}} id='buy_btn'>Buy Products</button>
                </div>

               
                </div>
                
        )
    }
}
