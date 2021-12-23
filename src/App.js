import {Component} from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
// import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  state = {
    value: '',
  }
  handleFormSubmit = value => {
    this.setState({value});
  } 
  // componentDidMount () {
  //   this.setState({loading: true});
    // const KEY = 'key=23877606-1096bee22002de3079c9510e6';
    // const BASE_URL = `https://pixabay.com/api/?q=${q}&page=${page}&${KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    
//     setTimeout(() => {
//       fetch ('https://pixabay.com/api/?q=cat&page=1&key=23877606-1096bee22002de3079c9510e6&image_type=photo&orientation=horizontal&per_page=12')
//       .then(res => res.json())
//       .then(images => this.setState({images}))
//       .finally(this.setState({loading: false}))
//     }, 2000);
    
// }
  render () {
    return (
      <div>
      {/* {style={{maxWidth: 1170, margin: '0 auto', padding: 20}}} */}
        <Searchbar onSubmit={this.handleSubmit}/>
        <ToastContainer/>
      </div> 
      
//       <div style={{maxWidth: 1170, margin: '0 auto', padding: 20}}>
//         {this.state.loading && <h2>LOADING...</h2>}
//         {this.state.images && <div>
//           <li className='ImageGalleryItem'>
//           <img src="this.state.images.pageURL" alt="this.state.images.tags" />
// </li></div>}
//         </div>
    )
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
