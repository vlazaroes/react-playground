import React from "react";
import classNames from "classnames";
import FilterSVG from "assets/icons/filter.svg";
import ListFiltersStyles from "./ListFilters.module.css";

export default class ListFilters extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={ListFiltersStyles.Container}>
        <img
          className={ListFiltersStyles.FilterIcon}
          src={FilterSVG}
          alt="Filters icon"
          height="16"
          width="16"
          loading="lazy"
        />
        <ul className={ListFiltersStyles.Filters}>
          <li className={ListFiltersStyles.Filter}>
            <button
              className={classNames(ListFiltersStyles.FilterButton, {
                [ListFiltersStyles.FilterButtonActive]: true,
              })}
              type="button"
            >
              All
            </button>
          </li>
          <li className={ListFiltersStyles.Filter}>
            <button
              className={classNames(ListFiltersStyles.FilterButton, {
                [ListFiltersStyles.FilterButtonActive]: false,
              })}
              type="button"
            >
              Active
            </button>
          </li>
          <li className={ListFiltersStyles.Filter}>
            <button
              className={classNames(ListFiltersStyles.FilterButton, {
                [ListFiltersStyles.FilterButtonActive]: false,
              })}
              type="button"
            >
              Completed
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
