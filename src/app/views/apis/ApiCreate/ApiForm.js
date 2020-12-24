import { Button, Card, CardBody, CardFooter, CardHeader, CardTitle } from "reactstrap";
import { Field, Formik } from "formik";

import { Input } from "../../../../components/forms/Input";
import PropTypes from "prop-types";
import React from "react";
import { getInputClasses } from "../../../../utils/formUtils";

const ApiForm = ({ className, handleSubmit, loading, successMsg }) => {
  return (
    <>
      <Formik
        initialValues={{
          gitUrl: "",
          userName: "",
          password: "",
        }}
        validate={(values) => {
          const errors = {};

          if (!values.gitUrl) {
            errors.gitUrl = "Git Url is required";
          }

          if (!values.userName) {
            errors.userName = "Username is required";
          }

          if (!values.password) {
            errors.password = "password is required";
          }
          console.log("errors", errors);
          return errors;
        }}
        onSubmit={(values, { setStatus, setSubmitting }) => {
          handleSubmit(values, setStatus, setSubmitting);
        }}
      >
        {({
          values,
          status,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          handleReset,
        }) => (
          <form onSubmit={handleSubmit} noValidate autoComplete="off">
            {status && (
              <div
                role="alert"
                className="mb-10 alert alert-custom alert-light-danger alert-dismissible"
              >
                <div className="alert-text font-weight-bold">{status}</div>
              </div>
            )}

            {successMsg && (
              <div
                role="alert"
                className="mb-10 alert alert-custom alert-light-primary alert-dismissible"
              >
                <div className="alert-text font-weight-bold">{successMsg}</div>
              </div>
            )}

            <Card>
              <CardHeader
                subheader="All fields are required"
                title="Create Api"
              >
                 <div className="d-flex align-items-center">
                    <div>
                        <CardTitle>Create API</CardTitle>
                        {/* <CardSubtitle>Overview of Latest Month</CardSubtitle> */}
                    </div>
                    {/* <div className="ml-auto d-flex no-block align-items-center">
                        <div className="dl">
                            <Input type="select" className="custom-select">
                                <option value="0">Monthly</option>
                                <option value="1">Daily</option>
                                <option value="2">Weekly</option>
                                <option value="3">Yearly</option>
                            </Input>
                        </div>
                    </div> */}
                </div>
                </CardHeader>
             
              <CardBody>
                <div className="row">
                  <div className="col-lg-6 col-md-12 m-auto">
                    {/* <Grid item md={12} xs={12}>
                    <Input
                      fullWidth
                      helperText="Please specify the github url"
                      label="Github Url"
                      name="gitUrl"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={
                        errors.gitUrl && touched.gitUrl && errors.gitUrl
                      }
                      error={errors.gitUrl && touched.gitUrl}
                      value={values.gitUrl}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <Input
                      fullWidth
                      label="username"
                      name="userName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={
                        errors.userName && touched.userName && errors.userName
                      }
                      error={errors.userName && touched.userName}
                      value={values.userName}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <Input
                      fullWidth
                      label="Password"
                      name="username"
                      type="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={
                        errors.password && touched.password && errors.password
                      }
                      error={errors.password && touched.password}
                      value={values.password}
                      variant="outlined"
                    />
                  </Grid> */}

                    <div className="form-group row">
                      <label className="col-xl-3 col-lg-3 col-form-label">
                        Git Url
                      </label>
                      <div className="col-lg-9 col-xl-9">
                        <Field type="text" name="gitUrl" component={Input}>
                          {({ field, form, meta }) => (
                            <div>
                              <input
                                type="text"
                                {...field}
                                className={`${getInputClasses(meta)}`}
                                placeholder="Enter Git url"
                              />
                              {meta.touched && meta.error && (
                                <div className="error invalid-feedback">
                                  {meta.error}
                                </div>
                              )}
                            </div>
                          )}
                        </Field>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-xl-3 col-lg-3 col-form-label">
                        Git username
                      </label>
                      <div className="col-lg-9 col-xl-9">
                        <Field type="text" name="userName" component={Input}>
                          {({ field, form, meta }) => (
                            <div>
                              <input
                                type="text"
                                {...field}
                                className={`${getInputClasses(meta)}`}
                                placeholder="Enter Git username"
                              />
                              {meta.touched && meta.error && (
                                <div className="error invalid-feedback">
                                  {meta.error}
                                </div>
                              )}
                            </div>
                          )}
                        </Field>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-xl-3 col-lg-3 col-form-label">
                        Git Url
                      </label>
                      <div className="col-lg-9 col-xl-9">
                        <Field
                          type="password"
                          name="password"
                          component={Input}
                        >
                          {({ field, form, meta }) => (
                            <div>
                              <input
                                type="password"
                                {...field}
                                className={`${getInputClasses(meta)}`}
                                placeholder="Enter Git url"
                              />
                              {meta.touched && meta.error && (
                                <div className="error invalid-feedback">
                                  {meta.error}
                                </div>
                              )}
                            </div>
                          )}
                        </Field>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
              <CardFooter>

              <div className="row">
                <div className="col-md-12 text-right">
                  <Button type="submit" color="primary" variant="contained">
                    Save details
                  </Button>
                </div>
              </div>
              </CardFooter>
            </Card>
          </form>
        )}
      </Formik>
    </>
  );
};

ApiForm.propTypes = {
  className: PropTypes.string,
};

export default ApiForm;
