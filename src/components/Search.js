import { SearchBar } from 'react-native-elements';
import React from 'react'

export default class Search extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar 
        round
        searchIcon ='false'
        containerStyle={{borderWidth: 0.1, borderRadius: 20}}
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}