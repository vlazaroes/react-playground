import React from 'react';
import classNames from 'classnames';
import ListItemStyles from './ListItem.module.css';

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeCompletedItem = this.onChangeCompletedItem.bind(this);
    this.onRemoveItem = this.onRemoveItem.bind(this);
  }

  onChangeCompletedItem() {
    this.props.onChangeCompletedItem(this.props.item.id);
  }

  onRemoveItem() {
    this.props.onRemoveItem(this.props.item.id);
  }

  render() {
    const { id, label, completed } = this.props.item;

    return (
      <li
        className={classNames(ListItemStyles.Item, {
          [ListItemStyles.ItemCompleted]: completed,
        })}>
        <input
          id={id}
          className={ListItemStyles.Check}
          type='checkbox'
          checked={completed}
          onChange={this.onChangeCompletedItem}
        />
        <label
          for={id}
          className={ListItemStyles.Label}>
          {label}
        </label>
        <div className={ListItemStyles.Options}>
          <button
            className={ListItemStyles.RemoveButton}
            type='button'
            onClick={this.onRemoveItem}>
            <img
              className={ListItemStyles.RemoveIcon}
              src='icons/remove.svg'
              alt='Remove item icon'
              height='16'
              weight='16'
              loading='lazy'
            />
          </button>
        </div>
      </li>
    );
  }
}
