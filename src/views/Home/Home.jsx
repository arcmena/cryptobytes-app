import React from 'react';
import api from '../../services/api';
import { Header, Footer } from '../../components';
import './Home.css';
import search_icon from '../../assets/search-icon.png';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: true,
            active1: true,
            topTen: [],
            coin: {},
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
        .then(res => {
            this.setState({
                active1: false,
                coin: res.data
            });
            this.setState({
                active:true,
            });
        })
        .catch(error => console.error(error));
    }

    handleButtonClick1 = () => {
        this.setState({
            active: false,
        });
        this.setState({
            active1:true,
        });
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
                        <button onClick={this.handleButtonClick1}>Show top ten</button>
                    </div>
                    {this.state.topTen.map((coin, i) => (
                        <div key={i} style={{display: this.state.active ? 'none' : 'block'}} className="coin">
                            <p>{`${i + 1} - ${coin.name} - Price (USD): ${parseFloat(coin.price_usd).toFixed(2)}`}</p>
                        </div>
                    ))}
                    <div style={{display: this.state.active1 ? 'none' : 'block'}} className="coin">
                        <p>{`Name: ${this.state.coin.name} - Price (USD): ${parseFloat(this.state.coin.price_usd).toFixed(2)}`}</p>
                    </div>
                    <Footer/>
                </div>
            </div>
        );
    }
}