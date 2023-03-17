import React from 'react';

export class SearchBar extends React.Component<unknown, { search: string }> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      search: localStorage.getItem('search') || '',
    };
  }

  componentWillUnmount() {
    localStorage.setItem('search', this.state.search);
  }

  render() {
    return (
      <div className="search">
        <input type="submit" value="" className="search__submit-btn" />
        <input
          type="search"
          value={this.state.search}
          className="search__search-bar"
          onChange={(e) =>
            this.setState({
              search: e.target.value,
            })
          }
        />
      </div>
    );
  }
}
