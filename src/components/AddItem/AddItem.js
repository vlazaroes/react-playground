import React from 'react';
import AddItemStyles from './AddItem.module.css';

export default class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { label: '' }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    if (!this.state.label) {
      return;
    }
    this.props.onAddItem(this.state.label.trim());
    this.setState({ label: '' });
  }

  onChangeInput(event) {
    this.setState({ label: event.target.value });
  }

  render() {
    const { label } = this.state;

    return (
      <form
        className={AddItemStyles.AddForm}
        onSubmit={this.onSubmit}
      >
        <input
          className={AddItemStyles.AddField}
          type="text"
          placeholder="Add a new item..."
          value={label}
          onChange={this.onChangeInput}
        />
        <button
          className={AddItemStyles.AddSubmit}
          type="submit"
        >
          <img
            className={AddItemStyles.AddSubmitIcon}
            src="icons/circle.svg"
            alt="Add item icon"
            height="16"
            weight="16"
            loading="lazy"
          />
        </button>
      </form>
    )
  }
}