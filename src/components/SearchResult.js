import React from "react";

function listItem(index, { id, url }) {
  return (
    <li key={index}>
      <img src={url} alt="" />
      <span>{id}</span>
    </li>
  );
}

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    data: [],
  };

  render() {
    const { data } = this.props;
    console.log("props", this.props.data);
    return !data.length ? (
      <div className="nodata">데이터가 존재하지 않습니다.</div>
    ) : (
      <ul className="search-result">
        {data.map((item, index) => {
          return listItem(index, item);
        })}
      </ul>
    );
  }
}

export default SearchResult;
