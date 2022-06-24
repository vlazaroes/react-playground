import React from 'react';
import AddItem from './components/AddItem/AddItem';
import List from './components/List/List';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          label: 'Drinking water.',
          completed: true
        },
        {
          id: 1,
          label: 'Go shopping.',
          completed: false
        },
      ]
    };
    this.onAddItem = this.onAddItem.bind(this);
    this.onChangeCompleted = this.onChangeCompleted.bind(this);
    this.onRemoveItem = this.onRemoveItem.bind(this);
  }

  onAddItem(itemLabel) {
    this.setState((state, props) => ({
      items: [...state.items, {
        id: +new Date(),
        label: itemLabel,
        completed: false
      }]
    }));
  }

  onChangeCompleted(itemId) {
    this.setState((state, props) => ({
      items: state.items.map(item => item.id === itemId ? { ...item, completed: !item.completed } : item)
    }));
  }

  onRemoveItem(itemId) {
    this.setState((state, props) => ({
      items: state.items.filter(item => item.id !== itemId)
    }));
  }

  render() {
    const { items } = this.state;

    return (
      <div className="container">
        <h1 className="title">React Playground</h1>
        <AddItem onAddItem={this.onAddItem} />
        <List
          items={items}
          onChangeCompleted={this.onChangeCompleted}
          onRemoveItem={this.onRemoveItem}
        />
      </div>
    )
  }
}

export default App;
