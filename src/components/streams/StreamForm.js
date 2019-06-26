import "./Streams.css";

import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderError = ({ touched, error }) => {
    if (touched && error)
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
  };

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label htmlFor="title">{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  renderButton = ({ meta }) => {
    const disabled = meta.error ? true : false;
    return (
      <button className="ui button primary" disabled={disabled}>
        Submit
      </button>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="title"
          component={this.renderInput}
          label="Enter Title"
          autocomplete="off"
        />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
          autocomplete="off"
        />

        <Field component={this.renderButton} name="button" />
      </form>
    );
  }
}

const validate = values => {
  let errors = {};

  if (!values.title) {
    errors.title = "You must enter title.";
  }

  if (values.title && values.title.length < 3) {
    errors.title = "Title must be at least 3 chars long.";
  }

  if (!values.description) {
    errors.description = "You must enter description.";
  }

  if (values.description && values.description.length < 3) {
    errors.description = "Description must be at least 3 chars long.";
  }

  return errors;
};

export default reduxForm({
  form: "streamForm",
  validate
})(StreamForm);
