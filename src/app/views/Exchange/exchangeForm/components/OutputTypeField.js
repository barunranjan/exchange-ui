import { Field, FieldArray } from "formik";

import AsyncSelect from "react-select/async";
import { Input } from "../../../../../components/forms/Input";
import React from "react";
import { getInputClasses } from "../../../../../utils/formUtils";
import { handleSearchInput } from "../../../../helpers/SearchType";

const OutputTypeField = ({ outputEventTypes }) => {
  return (
    <div>
      <FieldArray
        name="outputEventTypes"
        render={(arrayHelpers) => (
          <div>
            {outputEventTypes && outputEventTypes.length > 0 ? (
              outputEventTypes.map((outputType, index) => (
                <div key={index} className="row">
                  <Field
                    type="text"
                    name={`outputEventTypes.${index}.eventName`}
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
                    name={`outputEventTypes.${index}.eventType`}
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
                              `outputEventTypes.${index}.eventType`,
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
                  <div className="col-md-2  my-2 text-right">
                    <button
                      type="button"
                      className="btn btn-sm btn-danger mr-1"
                      onClick={() => arrayHelpers.remove(index)} // remove a outputType from the list
                    >
                      -
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-primary ml-1"
                      onClick={() =>
                        arrayHelpers.insert(index + 1, {
                          eventName: "",
                          eventType: "",
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

export default OutputTypeField;
