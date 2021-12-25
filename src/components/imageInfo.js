import { Component } from "react";
// import fetchApi from './ApiService/ApiService';

export default class ImageInfo extends Component {
    state = {
pokemon: null,
loading: false,
error: null,

    }
    componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.value;
        const nextName = this.props.value;
        if (prevProps.value !== this.props.value) {
        console.log('changed');
        console.log('prevProps.value:', prevName);
        console.log('this.props.value:', nextName);
        this.setState({loading: true});
        setTimeout(() => {fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
        .then(response => {
            if (response.ok){
                return response.json();
            }
            return Promise.reject(
                new Error (`Pokemon ${nextName} not found!`)
            )
            
        })
        .then(pokemon => this.setState({pokemon}))
        .catch(error => this.setState({error}))
        .finally(this.setState({loading: false}))}, 1000)
                
        }
    }
    render () {
        const {pokemon, loading, error} = this.state;
        
        return (
            <div>
                <h1>PokemonInfo</h1>
                {error && <h2>{error.message}</h2>}
                {loading && <div>Загружаем...</div>}
                {!this.props.value && <div>Type data for sarch!</div>}
                {pokemon && <div>
                    <p>{pokemon.name}</p>
                    <img 
                    src={pokemon.sprites.other['official-artwork'].front_default}
                    alt={pokemon.name}
                    width="240"
                    />
                    </div>}
            </div>
        )
    }
};
