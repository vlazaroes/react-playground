import React from 'react';
import ListItem from '../ListItem/ListItem';
import './List.css';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeCompleted = this.onChangeCompleted.bind(this);
        this.onRemoveItem = this.onRemoveItem.bind(this);
    }

    onChangeCompleted(itemId) {
        this.props.onChangeCompleted(itemId);
    }

    onRemoveItem(itemId) {
        this.props.onRemoveItem(itemId);
    }

    render() {
        const { items } = this.props;
        const itemsLeftCount = items.filter(item => item.completed === false).length;

        return (
            <div className="list">
                <ul className="list__items">
                    {items.length === 0 &&
                        <li class="list__empty">The list is empty.</li>
                    }
                    {items.length > 0 && items.map(item =>
                        <ListItem
                            key={item.id}
                            item={item}
                            onChangeCompleted={this.onChangeCompleted}
                            onRemoveItem={this.onRemoveItem}
                        />
                    )}
                </ul>
                <footer className="list__footer">
                    <p className="footer__count">{itemsLeftCount} items left</p>
                </footer>
            </div>
        )
    }
}

export default List;