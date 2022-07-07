import React from "react";
import PropTypes from "prop-types";
import ListItem from "components/ListItem/ListItem";
import ListStyles from "./List.module.css";

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeCompletedItem = this.onChangeCompletedItem.bind(this);
    this.onRemoveItem = this.onRemoveItem.bind(this);
    this.onClearCompleted = this.onClearCompleted.bind(this);
  }

  onChangeCompletedItem(itemId) {
    this.props.onChangeCompletedItem(itemId);
  }

  onRemoveItem(itemId) {
    this.props.onRemoveItem(itemId);
  }

  onClearCompleted() {
    this.props.onClearCompleted();
  }

  render() {
    const { items } = this.props;
    const itemsLeftCount = items.filter((item) => item.completed === false).length;

    return (
      <div className={ListStyles.List}>
        <ul className={ListStyles.Items}>
          {items.length === 0 && <li className={ListStyles.ListEmpty}>The list is empty.</li>}
          {items.length > 0 &&
            items.map((item) => (
              <ListItem
                key={item.id}
                item={item}
                onChangeCompletedItem={this.onChangeCompletedItem}
                onRemoveItem={this.onRemoveItem}
              />
            ))}
        </ul>
        <footer className={ListStyles.Footer}>
          <p className={ListStyles.ItemsLeft}>{itemsLeftCount} items left</p>
          <button
            className={ListStyles.ClearCompleted}
            type="button"
            onClick={this.onClearCompleted}
          >
            Clear completed
          </button>
        </footer>
      </div>
    );
  }
}

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onChangeCompletedItem: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
};
