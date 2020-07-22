import React, { Fragment } from "react";
import "./App.css";
import Api from "./components/Api";
import DarkModeToggle from "./components/DarkModeToggle";
import SearchInput from "./components/SearchInput";
import SearchResult from "./components/SearchResult";

class App extends React.Component {
  state = {
    isLoading: true,
    keyword: "aaa",
    data: [],
  };

  onSearch(keyword) {
    Api.fetchCats(keyword).then(({ isError, data }) => {
      //isError가 없을 시(false);
      !isError && this.setState({ data: data });
    });
  }

  componentDidMount() {
    this.setState({ isLoading: false });
    /*
    setTimeout(() => {
      this.onSearch("l");
    }, 2000);
    */
  }

  render() {
    //console.log(this.state.data)
    const { data, keyword, isLoading } = this.state;
    //console.log(data);
    return isLoading ? (
      <div>Loading...</div>
    ) : (
      <Fragment>
        <DarkModeToggle />
        <SearchInput onSearch={this.onSearch.bind(this)} />
        <SearchResult data={data} />
      </Fragment>
    );
  }
}

export default App;
