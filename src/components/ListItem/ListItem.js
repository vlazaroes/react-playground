import React from 'react';
import './ListItem.css';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeCompleted = this.onChangeCompleted.bind(this);
    this.onRemoveItem = this.onRemoveItem.bind(this);
  }

  onChangeCompleted() {
    this.props.onChangeCompleted(this.props.item.id);
  }

  onRemoveItem() {
    this.props.onRemoveItem(this.props.item.id);
  }

  render() {
    const { label, completed } = this.props.item;

    return (
      <li className={`item ${completed ? 'item--completed' : ''}`}>
        <input
          className="item__completed"
          type="checkbox"
          checked={completed}
          onChange={this.onChangeCompleted}
        />
        <p className="item__label">{label}</p>
        <div className="item__options">
          <button
            className="option"
            type="button"
            onClick={this.onRemoveItem}
          >
            <img
              className="option__remove"
              src="icons/trash.svg"
              alt="Remove item icon"
              height="16"
              weight="16"
              loading="lazy"
            />
          </button>
        </div>
      </li>
    )
  }
}

export default ListItem;