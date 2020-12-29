import { Field, Formik } from "formik";
import React from "react";
import AsyncSelect from "react-select/async";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
} from "reactstrap";
import { Input } from "../../../../components/forms/Input";
import { getInputClasses } from "../../../../utils/formUtils";
import { searchInputType } from "../store/exchangeCrud";

const ExchangeForm = ({
  className,
  handleSubmit,
  loading,
  successMsg,
  exchange,
}) => {
  const initialValues = () => {
    if (exchange) {
      return {
        name: exchange.name,
        description: exchange.description,
        inputType: exchange.inputType.map((ex) => ({
          label: ex,
          value: ex,
        })),
        outputType: exchange.outputType.map((ex) => ({
          label: ex,
          value: ex,
        })),
      };
    } else {
      return {
        name: "",
        description: "",
        inputType: [],
        outputType: [],
      };
    }
  };

  const handleSearchInput = (inputValue) => {
    if (!inputValue || inputValue.length < 3) return Promise.resolve([]);
    return new Promise((resolve) => {
      console.log(inputValue);
      searchInputType(inputValue)
        .then((resp) => {
          console.log("resp for search expert", resp);
          const result = Array.isArray(resp.data) ? resp.data : [resp.data];
          console.log(result);
          resolve(
            result.map((proto) => ({
              label: proto,
              value: proto,
            }))
          );
        })
        .catch((err) => {
          resolve([]);
        });
    });
  };

  return (
    <>
      <Formik
        initialValues={initialValues()}
        validate={(values) => {
          const errors = {};

          if (!values.name) {
            errors.name = "Name is required";
          }

          if (!values.description) {
            errors.description = "Description is required";
          }

          if (values.inputType && values.inputType.length === 0) {
            errors.inputType = "Select atleast one input type";
          }
          if (values.outputType && values.outputType.length === 0) {
            errors.outputType = "Select atleast one output type";
          }
          console.log("errors", errors);
          return errors;
        }}
        onSubmit={(values, { setStatus, setSubmitting }) => {
          values.inputType = values.inputType.map((val) => val.value);
          values.outputType = values.outputType.map((val) => val.value);

          console.log(values);
          //   handleSubmit(values, setStatus, setSubmitting);
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
                    <CardTitle>Add Exchange</CardTitle>
                    {/* <CardSubtitle>Overview of Latest Month</CardSubtitle> */}
                  </div>
                </div>
              </CardHeader>

              <CardBody>
                <div className="row">
                  <div className="col-lg-6 col-md-12 m-auto">
                    <div className="form-group row">
                      <label className="col-xl-3 col-lg-3 col-form-label">
                        Name
                      </label>
                      <div className="col-lg-9 col-xl-9">
                        <Field type="text" name="name" component={Input}>
                          {({ field, form, meta }) => (
                            <div>
                              <input
                                type="text"
                                {...field}
                                className={`${getInputClasses(meta)}`}
                                placeholder="Enter Name"
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
                        Description
                      </label>
                      <div className="col-lg-9 col-xl-9">
                        <Field type="text" name="description" component={Input}>
                          {({ field, form, meta }) => (
                            <div>
                              <textarea
                                type="text"
                                {...field}
                                className={`${getInputClasses(meta)}`}
                                placeholder="Enter Description"
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
                        Input Type
                      </label>
                      <div className="col-lg-9 col-xl-9">
                        <Field
                          name="inputType"
                          placeholder="Search input type"
                          label="Search input type"
                        >
                          {({ field, form, meta }) => (
                            <div>
                              <AsyncSelect
                                {...field}
                                cacheOptions
                                defaultOptions
                                loadOptions={handleSearchInput}
                                isMulti
                                placeholder="Search..."
                                noOptionsMessage={() => "No match"}
                                isSearchable
                                onChange={(value) => {
                                  form.setFieldValue("inputType", value);
                                }}
                              />
                              {meta.touched && meta.error && (
                                <div className="error invalid-feedback d-block">
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
                        Output Type
                      </label>
                      <div className="col-lg-9 col-xl-9">
                        <Field
                          name="outputType"
                          placeholder="Search output type"
                          label="Search output type"
                        >
                          {({ field, form, meta }) => (
                            <div>
                              <AsyncSelect
                                cacheOptions
                                {...field}
                                defaultOptions
                                loadOptions={handleSearchInput}
                                isMulti
                                placeholder="Search..."
                                noOptionsMessage={() => "No match"}
                                isSearchable
                                onChange={(value) => {
                                  form.setFieldValue("outputType", value);
                                }}
                              />
                              {meta.touched && meta.error && (
                                <div className="error invalid-feedback d-block">
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

export default ExchangeForm;
