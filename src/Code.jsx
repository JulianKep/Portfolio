import text from "./App.jsx?raw"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Code() {
  return (
    <SyntaxHighlighter
      language="jsx"
      style={oneDark}
      customStyle={{ textAlign: "left" }}
    >
      {text}
    </SyntaxHighlighter>
  );
}
