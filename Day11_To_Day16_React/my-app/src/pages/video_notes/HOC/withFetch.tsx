// hoc is a higher order component:
// a function that takes in a component, and return a new component
// the purpose of HOC: is to reuse component state and lifecycle logics
//

import React from "react";

export default function withFetch(OldComponent: any, url: RequestInfo | URL) {
  return class NewComponent extends React.Component {
    state = {
      data: null,
      loading: true,
    };

    componentDidMount() {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          this.setState({ data });
        })
        .finally(() => {
          this.setState({ loading: false });
        });
    }

    render() {
      const { data, loading } = this.state;
      console.log("data", data);
      return <OldComponent data={data} loading={loading} {...this.props} />;
    }
  };
}
