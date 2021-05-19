import React from 'react';
import './App.css';
import styled, { css } from 'styled-components'


const Form = styled.form`
    .autocomplete-form {
        width: 100%;
        max-width: 500px;
        margin: 0 auto;

        &_input {
            font-family: 'Roboto', sans-serif;
            font-size: 16px;
            color: #333;
            width: 100%;
            max-width: 500px;
            border: 2px solid #000;
            padding: 10px 11px 11px 11px;
            border-radius: 3px;
            box-shadow: none;
            outline: none;
            margin: 0;
            box-sizing: border-box; 
        }

        &_list {
            list-style: none;
            border: 2px solid #000;
            border-top: none;
        }

        &_list-element {
            color: #333;
            padding: 0.5rem 0.8rem;

            &:hover {
                background-color: #d4d4d4;
            }
        }
    }

    ${props => props.primary && css`
        .autocomplete-form {
            &_input {
                background-color: #000;
                color: #fff;
            }

            &_list {
                background-color: #000;
            }

            &_list-element {
                color: #fff;

                &:hover {
                    background-color: #fff;
                    color: #000;
                }
            }
        }
    `}
`

export default class Autocomplete extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            suggestions: [],
            text: '',
        }
    }

    onTextChanged = (event) => {
        const { items } = this.props;
        const value = event.target.value;
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = items.filter(filteredItem => regex.test(filteredItem));
        }
        this.setState(() => ({ suggestions, text: value }));
    }

    suggestionSelected (value) {
        this.setState(() => ({
            text: value,
            suggestions: [],
        }))
    }

    renderSuggestions () {
        const { suggestions } = this.state;
        if (suggestions.length === 0) {
            return null;
        }
        return(
            <ul className="autocomplete-form_list">
                {suggestions.map((item) => <li className="autocomplete-form_list-element" onClick={() => this.suggestionSelected(item)}>{item}</li>)}
            </ul>
        )
    }

    render () {
        const { text } = this.state;
        return (
            <Form primary>
                <div className="autocomplete-form">
                    <input className="autocomplete-form_input" value={text} onChange={this.onTextChanged} type="text" />
                    {this.renderSuggestions()}
                </div>
            </Form>
        )
    }
}
