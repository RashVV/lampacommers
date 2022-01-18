import React from "react";
import { Field, reduxForm } from "redux-form";

const SimpleForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
    <br></br>
      <div>
        <div>
          <Field name="NAME" component="input" type="text" placeholder="NAME" />
        </div>
      </div>
      <br></br>
      <div>
        <div>
          <Field
            name="SURNAME" component="input" type="text" placeholder="SURNAME"
          />
        </div>
      </div>
      <br></br>
      <div>
        <div>
          <Field
            name="ADDRESS" component="input" type="adress" placeholder="ADDRESS"
          />
        </div>
      </div>
      <br></br>
      <div>
        <div>
          <Field component="input" type="phone" placeholder="PHONE" />
        </div>
      </div>
      <br></br>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Відправити запит
        </button>
        <br></br>
        <br></br>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Очистити форму
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "simple" // a unique identifier for this form
})(SimpleForm);