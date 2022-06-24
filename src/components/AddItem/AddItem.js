import React from 'react';
import './AddItem.css';

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { label: '' }
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onAddItem = this.onAddItem.bind(this);
  }

  onChangeInput(event) {
    this.setState({ label: event.target.value });
  }

  onAddItem() {
    if (!this.state.label) {
      return;
    }
    this.props.onAddItem(this.state.label);
    this.setState({ label: '' });
  }

  render() {
    const { label } = this.state;

    return (
      <div className="add">
        <input
          className="add__input"
          type="text"
          placeholder="Add a new item..."
          value={label}
          onChange={this.onChangeInput}
        />
        <button
          className="add__button"
          type="button"
          onClick={this.onAddItem}
        >
          <img
            className="button__icon"
            src="icons/circle.svg"
            alt="Add item icon"
            height="16"
            weight="16"
            loading="lazy"
          />
        </button>
      </div>
    )
  }
}

export default AddItem;