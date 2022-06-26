import React from 'react';
import ListItem from '../ListItem/ListItem';
import ListStyles from './List.module.css';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeCompletedItem = this.onChangeCompletedItem.bind(this);
    this.onRemoveItem = this.onRemoveItem.bind(this);
  }

  onChangeCompletedItem(itemId) {
    this.props.onChangeCompletedItem(itemId);
  }

  onRemoveItem(itemId) {
    this.props.onRemoveItem(itemId);
  }

  render() {
    const {items} = this.props;
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
        </footer>
      </div>
    );
  }
}
