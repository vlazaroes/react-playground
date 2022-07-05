import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import ListItemStyles from "./ListItem.module.css";
import RemoveSVG from "../../assets/icons/remove.svg";

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
        })}
      >
        <input
          id={id}
          className={ListItemStyles.Check}
          type="checkbox"
          checked={completed}
          onChange={this.onChangeCompletedItem}
        />
        <label
          htmlFor={id}
          className={ListItemStyles.Label}
        >
          {label}
        </label>
        <div className={ListItemStyles.Options}>
          <button
            className={ListItemStyles.RemoveButton}
            type="button"
            onClick={this.onRemoveItem}
          >
            <img
              className={ListItemStyles.RemoveIcon}
              src={RemoveSVG}
              alt="Remove item icon"
              height="16"
              weight="16"
              loading="lazy"
            />
          </button>
        </div>
      </li>
    );
  }
}

ListItem.propTypes = {
  item: PropTypes.exact({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onChangeCompletedItem: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
};
