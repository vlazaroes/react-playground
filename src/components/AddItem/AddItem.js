import React from 'react';
import AddItemStyles from './AddItem.module.css';

export default class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { label: '' };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const label = this.state.label.trim();
    if (!label) {
      return;
    }
    this.props.onAddItem(label);
    this.setState({ label: '' });
  }

  onChangeInput(event) {
    this.setState({ label: event.target.value });
  }

  render() {
    const { label } = this.state;

    return (
      <form
        className={AddItemStyles.Form}
        onSubmit={this.onSubmit}>
        <input
          className={AddItemStyles.Field}
          type='text'
          placeholder='Add a new item...'
          value={label}
          onChange={this.onChangeInput}
        />
        <button
          className={AddItemStyles.SubmitButton}
          type='submit'>
          <img
            className={AddItemStyles.SubmitIcon}
            src='icons/circle.svg'
            alt='Add item icon'
            height='16'
            weight='16'
            loading='lazy'
          />
        </button>
      </form>
    );
  }
}
