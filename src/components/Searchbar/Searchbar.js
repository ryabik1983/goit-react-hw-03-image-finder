import {Component} from 'react';
import styles from './Searchbar.module.css';

export default class Searchbar extends Component {
    state = {

     }
handleNameChange = e => {
    this.setState({})
}
     render () {
         return (
<header className={styles.Searchbar}>
  <form className={styles.SearchForm}>
    <button type="submit" className={styles[`SearchForm-button`]}>
      <span className={styles[`SearchForm-button-label`]}>Search</span>
    </button>

    <input
      className={styles[`SearchForm-input`]}
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
)
}
};

