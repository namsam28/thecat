import React from "react";

class DarkModeToggle extends React.Component {
  state = {
    isDarkMode: "null",
  };

  darkModeChange() {
    document.querySelector("html").dataset.colorMode = "dark";
    this.setState({ isDarkMode: true });
  }

  lightModeChange() {
    document.querySelector("html").dataset.colorMode = "light";
    this.setState({ isDarkMode: false });
  }

  onChange(e) {
    e.target.checked ? this.darkModeChange() : this.lightModeChange();
  }

  componentDidMount() {
    //true일 때 dark, false일 때 light
    window.matchMedia("(prefers-color-scheme:dark)").matches
      ? this.darkModeChange()
      : this.lightModeChange();
  }
  /* 바인드를 붙인 이유https://devlog.jwgo.kr/2018/08/20/set-state-undefined-error-in-react/ */
  render() {
    const { isDarkMode } = this.state;
    return (
      <div className="darkmode-toggle">
        <label>
          <input
            type="checkbox"
            onChange={this.onChange.bind(this)}
            checked={isDarkMode}
          />
        </label>
      </div>
    );
  }
}

export default DarkModeToggle;
