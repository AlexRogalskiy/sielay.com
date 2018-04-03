import * as React from "react";

export default function ga(WrappedComponent) {
    return class extends React.Component {
      componentDidMout() {
        if (typeof window["ga"] !== "undefined") {
            window["ga"]("set", "page", document.location.pathname);
            window["ga"]("send", "pageview");
        }
      }
      render() {
        return <WrappedComponent {...this.props} />;
      }
    };
  }
