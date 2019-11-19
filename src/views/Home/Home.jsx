import React from 'react';
import api from '../../services/api';
import { Header, Footer } from '../../components';
import './Home.css';
import search_icon from '../../assets/search-icon.png';
import Axios from 'axios';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            topTen: [],
            searchOne: [],
            input: ''
        }
    }

    componentDidMount() {        
        api.get('/coin/topten')
        .then(res => {
            this.setState({
                topTen: res.data
            });
        })
        .catch(error => console.error(error));
    }

    handleButtonClick = () => {
        api.get(`/coin/${this.state.input}`)
        .then(res =>{
            this.setState({
                searchOne: res.data
            });
        })
        .catch(error => console.error(error));
    }
    

    render() {
        return(
            <div className="main_container">
                <Header />
                <div className="wrapper">
                    <div className="searchbox">
                        <input onChange={event =>
                        this.setState({input:event.target.value})} type="text" placeholder="Search by ID"></input>
                        <button onClick={this.handleButtonClick} ><img src={search_icon} alt="search icon" id="search_icon"/></button>
                        {this.state.searchOne.map((coin) => (
                        <div className="coin">
                            <p>{`Name: ${coin.name} - Price (USD): ${parseFloat(coin.price_usd).toFixed(2)}`}</p>
                        </div>
                        ))}
                    </div>
                    {this.state.topTen.map((coin, i) => (
                        <div key={i} className="coin">
                            <p>{`${i + 1} - ${coin.name} - Price (USD): ${parseFloat(coin.price_usd).toFixed(2)}`}</p>
                        </div>
                    ))}
                    <Footer/>
                </div>
            </div>
        );
    }
}