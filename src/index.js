import React from "react";
import ReactDOM from "react-dom";

// PROPS
import json from "./props.json";

// COMPONENTS
import DemoBlock from "./DemoBlock";

class App extends React.Component {
  static async getInitialProps() {
    const props = {};
    return props;
  }

  render() {
    let inlines = {};
    Object.keys(json.inlines).map((key, index) => {
      inlines[key] = (
        <span dangerouslySetInnerHTML={{ __html: json.inlines[key] }} />
      );
    });

    return <DemoBlock view={json.view} inlines={inlines} />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
