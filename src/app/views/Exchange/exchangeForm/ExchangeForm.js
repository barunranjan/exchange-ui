import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
} from "reactstrap";
import { Field, Formik } from "formik";
import { exchangeValidate, submitValues } from "./exchangeFormUtility";

import { Input } from "../../../../components/forms/Input";
import InputTypeField from "./components/InputTypeField";
import OutputTypeField from "./components/OutputTypeField";
import React from "react";
import { Textarea } from "../../../../components/forms/Textarea";
import { getInputClasses } from "../../../../utils/formUtils";

const ExchangeForm = ({
  className,
  handleSubmit,
  loading,
  successMsg,
  initialValues,
}) => {

  const onSubmit = (values) => {
    handleSubmit(submitValues(values))
  }

  return (
    <>
      <Formik
        data-test='test-exchange-form'
        initialValues={initialValues}
       
        validate={exchangeValidate}
       onSubmit={onSubmit}
        // onSubmit={(values, { setStatus, setSubmitting }) => {
        //   values.inputTypes = values.inputTypes.map((type) => ({
        //     ...type,
        //     paramType: type.paramType.value,
        //   }));
        //   values.outputTypes = values.outputTypes.map((type) => ({
        //     ...type,
        //     paramType: type.paramType.value,
        //   }));
          

        //     handleSubmit(values, setStatus, setSubmitting);
        // }}
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
          getFieldProps
        }) => (
          <form data-test='test-form' onSubmit={handleSubmit} noValidate autoComplete="off">
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
                        <Field data-test = 'test-name' type="text" name="name" component={Input} placeholder='Enter name'/>
                          {/* {({ field, form, meta}) => (
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
                          )} */}
                       
                       
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-xl-3 col-lg-3 col-form-label">
                        Description
                      </label>
                      <div className="col-lg-9 col-xl-9">
                        <Field data-test = 'test-description' type="text" name="description" component={Textarea} placeholder='Enter description...'>
                          {/* {({ field, form, meta }) => (
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
                          )} */}
                        </Field>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-xl-12 col-lg-12 col-form-label">
                        Input Types
                      </label>
                      <div className="col-lg-12 col-xl-12 mt-2">
                        <InputTypeField inputTypes={values && values.inputTypes}/>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-xl-12 col-lg-12 col-form-label">
                        Output Types
                      </label>
                      <div className="col-lg-12 col-xl-12 mt-2">
                        <OutputTypeField outputTypes={values&&values.outputTypes} />
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
