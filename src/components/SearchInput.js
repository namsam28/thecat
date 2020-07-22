import React from "react";

class SearchInput extends React.Component {
  constructor(props) {
    super(props);

    /*
    //섹션 설정
    const $SearchInputWrap = document.createElement("section");
    this.$SearchInputWrap = $SearchInputWrap;

    //검색창 생성
    const $SearchInput = document.createElement("input");
    this.$SearchInput = $SearchInput;
    $SearchInput.placeholder = "검색할 고양이 키워드를 입력하세요.";

    //검색 버튼 생성
    const $SearchButton = document.createElement("button");
    this.$SearchButton = $SearchButton;
    $SearchButton.type = "button";
    $SearchButton.innerHTML = "고영희 검색";

    $SearchInputWrap.appendChild($SearchInput);
    $SearchInputWrap.appendChild($SearchButton);
    */
    this.state = {
      onSearch: this.props.onSearch,
    };
  }
  onSearchKeyword(e) {
    e.key === "Enter" && this.state.onSearch(e.target.value);
  }

  componentDidMount() {
    //console.log('마운트!')
  }

  /* 바인드를 붙인 이유https://devlog.jwgo.kr/2018/08/20/set-state-undefined-error-in-react/ */
  render() {
    const $SearchWrap = this.$SearchInputWrap;
    return (
      <section className="search-area">
        <input
          type="text"
          placeholder="고양이를 검색해주세요."
          onKeyPress={this.onSearchKeyword.bind(this)}
        />
        <button type="button">검색</button>
        {$SearchWrap}
      </section>
    );
  }
}

export default SearchInput;
