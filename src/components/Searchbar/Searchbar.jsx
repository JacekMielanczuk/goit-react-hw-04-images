import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import styles from './Searchbar.module.css';

class Searchbar extends React.Component {
  state = {
    inputValue: '',
  };

  handleChange = event => {
    this.setState({
      inputValue: event.currentTarget.value.toLowerCase(),
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.inputValue.trim() === '') {
      return toast.warn('Sorry, there are no search query. Please try again.', {
        theme: 'colored',
      });
    }
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <header className={styles.searchbar}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.button}></button>

          <input
            onChange={this.handleChange}
            name="input"
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };

export default Searchbar;
