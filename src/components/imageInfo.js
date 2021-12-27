import { Component } from "react";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";

// import fetchApi from './ApiService/ApiService';

// 'idle'
// 'pending'
// 'resolved'
// 'rejected'


export default class ImageInfo extends Component {
    state = {
pokemon: null,
error: null,
status: 'idle'

    }
    componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.value;
        const nextName = this.props.value;
        if (prevProps.value !== this.props.value) {
        console.log('changed');
        console.log('prevProps.value:', prevName);
        console.log('this.props.value:', nextName);
        this.setState({status: 'pending'});
        fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
        .then(response => {
            if (response.ok){
                return response.json();
            }
            return Promise.reject(
                new Error (`Pokemon ${nextName} not found!`)
            )
            
        })
        .then(pokemon => this.setState({pokemon, status: 'resolved'}))
        .catch(error => this.setState({error, status: 'rejected'}))
        }
    }
    
// 'idle'
// 'pending'
// 'resolved'
// 'rejected'

    render () {
        const {pokemon,  error, status} = this.state;
        // const {pokemonName} = this.props;
        if (status === 'idle') {
            return <div>
            <h1>PokemonInfo</h1>
            Type data for sarch!
            </div>;
            }
            if (status === 'pending'){
                return <div>Загружаем...</div>;
            }
                   
            if (status === 'rejected') {
                return <h2>{error.message}</h2>
            }
            if (status === 'resolved') {
                return <ImageGalleryItem pokemon={pokemon}/>;
            }
        }
        
        
        // return (
        //     <div>
        //         <h1>PokemonInfo</h1>
        //         {error && <h2>{error.message}</h2>}
        //         {loading && <div>Загружаем...</div>}
        //         {!this.props.value && <div>Type data for sarch!</div>}
        //         {pokemon && <div>
        //             <p>{pokemon.name}</p>
        //             <img 
        //             src={pokemon.sprites.other['official-artwork'].front_default}
        //             alt={pokemon.name}
        //             width="240"
        //             />
        //             </div>}
        //     </div>
    
    }