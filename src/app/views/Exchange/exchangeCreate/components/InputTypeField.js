import { Field, FieldArray } from "formik";

import AsyncSelect from "react-select/async";
import { Input } from "../../../../../components/forms/Input";
import React from "react";
import { getInputClasses } from "../../../../../utils/formUtils";
import { handleSearchInput } from "../../../../helpers/SearchType";

const InputTypeField = ({ inputTypes }) => {
  return (
    <div>
      <FieldArray
        name="inputTypes"
        render={(arrayHelpers) => (
          <div>
            {inputTypes && inputTypes.length > 0 ? (
              inputTypes.map((inputType, index) => (
                <div key={index} className="row">
                  <Field
                    type="text"
                    name={`inputTypes.${index}.paramName`}
                    component={Input}
                  >
                    {({ field, form, meta }) => (
                      <div className="col-md-5  my-1">
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
                  <Field
                    name={`inputTypes.${index}.paramType`}
                    placeholder="Search input type"
                    label="Search input type"
                  >
                    {({ field, form, meta }) => (
                      <div className="col-md-5  my-1">
                        <AsyncSelect
                          {...field}
                          cacheOptions
                          defaultOptions
                          loadOptions={handleSearchInput}
                          isMulti={false}
                          placeholder="Search..."
                          noOptionsMessage={() => "No match"}
                          isSearchable
                          onChange={(value) => {
                            form.setFieldValue(
                              `inputTypes.${index}.paramType`,
                              value
                            );
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
                  <div className="col-md-2  mt-2 text-right">
                    <button
                      type="button"
                      className="btn btn-sm btn-danger mr-1"
                      onClick={() => arrayHelpers.remove(index)} // remove a inputType from the list
                    >
                      -
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-primary ml-1"
                      onClick={() =>
                        arrayHelpers.insert(index + 1, {
                          paramName: "",
                          paramType: "",
                        })
                      } // insert an empty string at a position
                    >
                      +
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <button type="button" onClick={() => arrayHelpers.push("")}>
                {/* show this when user has removed all inputTypes from the list */}
                Add
              </button>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default InputTypeField;
