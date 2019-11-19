import React from 'react';
import api from '../../services/api';
import { Header, Footer } from '../../components';
import './Home.css';
import search_icon from '../../assets/search-icon.png';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            topTen: [],
            searchOne: []
        }
    }

    componentDidMount() {
        // api.get('/coin')
        // .then(res => {
        //     console.log(res);
        // })
        // .catch(error => console.error(error));
        
        api.get('/coin/topten')
        .then(res => {
            this.setState({
                topTen: res.data
            });
        })
        .catch(error => console.error(error));

               // api.get('/coin/'+ this.searchBox)
        // .then(res =>{
        //     this.setState({
        //         searchOne: res.data
        //     });
        // })
        // .catch(error => console.error(error));
    }

    render() {
        return(
            <div className="main_container">
                <Header />
                <div className="wrapper">
                    <div className="searchbox">
                        <input type="text"></input>
                        <button><img src={search_icon} alt="search icon" id="search_icon"/></button>
                        {/* <input id="button" type="submit"><img src={search_icon} id="search_icon" alt="search icon"
                        onClick={this.searchBox}/></input>
                        {this.state.searchOne.map((coin=this.searchBox) =>(
                            <div>
                                <p>{`${coin.name}`}</p>
                            </div>
                        ))} */}
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