import "./Streams.css";

import React from "react";
import { createStream } from "../../actions/index";
import { connect } from "react-redux";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <>
        <h3>Create Stream</h3>
        <StreamForm onSubmit={this.onSubmit}/>
      </>
    );
  }
}

export default connect(
  null,
  { createStream }
)(StreamCreate);
