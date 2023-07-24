import React from "react";

const FormField = ({
  label,
  name,
  type,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
  placeholder,
}) => {
  return (
    <div data-theme="valentine">
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-base-content m-4"
        >
          {label}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="btn btn-active btn-neutral m-2"
          >
            Surprise Me
          </button>
        )}
      </div>
      <textarea
        label={label}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="textarea textarea-primary w-full"
      ></textarea>
    </div>
  );
};

export default FormField;
