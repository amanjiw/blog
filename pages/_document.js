import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocumnet extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
        <div id="notifications"></div>
      </Html>
    );
  }
}

export default MyDocumnet;
