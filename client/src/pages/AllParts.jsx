import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import ProstheticsCard from '../components/Cards/ProstheticsCard';
import * as prostheticsServices from '../services/prosthetics';
import * as categoryServices from '../services/categories';
import Autosuggest from 'react-autosuggest';
import './AllParts.css';

let categories;

categoryServices.all()
    .then(data => categories = data);

const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : categories.filter(lang =>
        lang.name.toLowerCase().slice(0, inputLength) === inputValue
    );
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
    <span id={suggestion.id}>
        {suggestion.name}
    </span>
);

class AllParts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prosthetics: [],
            displayProsthetics: [],
            suggestions: [],
            value: ''
        };
    }

    async componentDidMount() {
        try {
            let displayProsthetics = await prostheticsServices.all();
            this.setState({ displayProsthetics });
        } catch (e) {
            console.log(e);
        }
        try {
          let res = await fetch("/api/prosthetics");
          let prosthetics = await res.json();
          console.log(prosthetics);
          this.setState({ prosthetics });
        } catch (e) {
          console.log(e);
        }
    }

    renderProsthetics = () => {
      return this.state.prosthetics.map(prosthetic => {
        return (
          <ProstheticsCard
            key={prosthetic.id}
            id={prosthetic.id}
            brand={prosthetic.brand}
            height={prosthetic.height}
            weight={prosthetic.weight}
            prosthetic={prosthetic}
          />
        );
      });
    };
  

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {

        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: 'What type of prosthetic are you looking for?',
            value,
            onChange: this.onChange,
        };

        return (
            <>
                <Navbar />
                <Jumbotron title="Full Selection" subtitle="See What's Available" />
                <div className="m-5">
                <h2>Welcome to PBP</h2>
                <p>We have a selection of prosthetics from our authorized donors.</p>
                    <Autosuggest
                        suggestions={suggestions}
                        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                        getSuggestionValue={getSuggestionValue}
                        renderSuggestion={renderSuggestion}
                        inputProps={inputProps}
                    />
                </div>
                <div className="container">
                    <div className="row">
                        {this.state.displayProsthetics.map(item => {
                            return(
                                    <ProstheticsCard key={item.id} prosthetic={item} />
                            );
                        })}
                    </div>
                </div>
                <div className="prosthetics-container">{this.renderProsthetics()}</div>
                <Footer />
            </>
        );
    }
}
export default AllParts;