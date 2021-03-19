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
        lightTheme   
        round
        searchIcon ='false'
        containerStyle={{borderWidth: 0, backgroundColor:'transparent'}}
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}