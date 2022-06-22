import { Formik } from 'formik';
import * as Yup from 'yup';

// Creating schema
const schema = Yup.object().shape({
  email: Yup.string()
    .required("field required")
    .email("username should be an email"),
  password: Yup.string()
    .required("field required")
    .min(8, "Password must be 8 characters"),
});

function App() {
  console.log("in App function");
  return (
    <>
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          // Alert the input values of the form that we filled
          alert(JSON.stringify(values));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="login">
            <div className="form">
           {/* Passing handleSubmit parameter tohtml form onSubmit property */}
              <form noValidate onSubmit={handleSubmit}>
                <span>Login</span>
                <p></p>
                <span>Username:  </span>
              {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter email id / username"
                  className="form-control inp_text"
                  id="email"
                />
                {/* If validation is not passed show errors */}
                <div className="error">
                  {errors.email && touched.email && errors.email}
                </div>
                 {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <span>Password :   </span>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  className="form-control"
                />
                 {/* If validation is not passed show errors */}
                <div className="error">
                  {errors.password && touched.password && errors.password}
                </div>
                {/* Click on submit button to submit the form */}
                <p></p>
                <button type="submit">Login</button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}
export default App;