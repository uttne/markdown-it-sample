import React, { useEffect } from "react";
import logo from "./logo.svg";
import MarkdownIt from "markdown-it";

import { Button, createStyles, makeStyles, Theme } from "@material-ui/core";
import "./App.css";
import ReactDOM from "react-dom";

const sanitizer = require("markdown-it-sanitizer");

const testMarkdown = `# テストマークダウン

これはテスト用のマークダウンです。

- リスト
- [example.com](https://example.com)

| 名前   | 説明 |
| ------ | ---- |
| テスト | 説明 |

`;

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      "& h1": {
        color: "#FF0000",
      },
    },
  })
);

function App() {
  const classes = useStyle();
  const md = new MarkdownIt();

  const result = md.use(sanitizer).render(testMarkdown);

  console.log(result);

  useEffect(() => {
    ReactDOM.render(
      <Button variant="contained" color="primary">
        Primary
      </Button>,
      document.getElementById("test-id")
    );
  });

  return (
    <div>
      <div
        className={classes.container}
        dangerouslySetInnerHTML={{
          __html: result + `<div id="test-id"></div>`,
        }}
      />
      <h1>これにはスタイルが適用されない</h1>
    </div>
  );
}

export default App;
