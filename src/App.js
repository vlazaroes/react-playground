import React from "react";
import AddItem from "components/AddItem/AddItem";
import List from "components/List/List";
import AppStyles from "./App.module.css";
import ReactSVG from "assets/icons/react.svg";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          label: "Drinking water.",
          completed: true,
        },
        {
          id: 1,
          label: "Go shopping.",
          completed: false,
        },
      ],
    };
    this.onAddItem = this.onAddItem.bind(this);
    this.onChangeCompletedItem = this.onChangeCompletedItem.bind(this);
    this.onRemoveItem = this.onRemoveItem.bind(this);
    this.onClearCompleted = this.onClearCompleted.bind(this);
  }

  onAddItem(itemLabel) {
    this.setState((state) => ({
      items: [
        ...state.items,
        {
          id: +new Date(),
          label: itemLabel,
          completed: false,
        },
      ],
    }));
  }

  onChangeCompletedItem(itemId) {
    this.setState((state) => ({
      items: state.items.map((item) =>
        item.id === itemId ? { ...item, completed: !item.completed } : item
      ),
    }));
  }

  onRemoveItem(itemId) {
    this.setState((state) => ({
      items: state.items.filter((item) => item.id !== itemId),
    }));
  }

  onClearCompleted() {
    this.setState((state) => ({
      items: state.items.filter((item) => item.completed === false),
    }));
  }

  render() {
    const { items } = this.state;

    return (
      <div className={AppStyles.Container}>
        <header className={AppStyles.Header}>
          <img
            className={AppStyles.ReactIcon}
            src={ReactSVG}
            alt="React logo"
            height="32"
            weight="32"
            loading="lazy"
          />
          <h1 className={AppStyles.Title}>React Playground</h1>
        </header>
        <AddItem onAddItem={this.onAddItem} />
        <List
          items={items}
          onChangeCompletedItem={this.onChangeCompletedItem}
          onRemoveItem={this.onRemoveItem}
          onClearCompleted={this.onClearCompleted}
        />
      </div>
    );
  }
}
