import React from 'react';
import api from '../../services/api';
import './Home.css';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            topTen: []
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
    }

    render() {
        return(
            <div className="container">
                {this.state.topTen.map((coin, i) => (
                    <div key={i} className="coin">
                        <p>{`${i + 1} - ${coin.name} Price (USD): ${parseFloat(coin.price_usd).toFixed(2)}`}</p>
                    </div>
                ))}
            </div>
        );
    }
}