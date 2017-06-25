import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }

    onInputChange(ev) {
        this.setState({
            term: ev.target.value
        });
    }

    onFormSubmit(ev) {
        ev.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return(
            <form onSubmit={ this.onFormSubmit.bind(this) } className="input-group">
                <input
                    placeholder="Get a 5 day forecast for a city"
                    className="form-control"
                    type="text"
                    value={ this.state.term }
                    onChange={ this.onInputChange.bind(this) }/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);