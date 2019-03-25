import React from "react";
import ReactDOM from "react-dom";

// PROPS
// import json from "./props.json";
import json from "./DirectSpeech/props.json";

// COMPONENTS
// import DemoBlock from "./DemoBlock/DemoBlock";
import DirectSpeech from "./DirectSpeech/DirectSpeech";

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

    return <DirectSpeech view={json.view} inlines={inlines} />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
