import { useField } from "formik";
import PropTypes from "prop-types";
import FallbackComponent from "../Error/FallbackComponent";
import { withErrorBoundary } from "react-error-boundary";

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-3 mb-5">
      <label
        htmlFor={props.id}
        className="text-secondaryGray cursor-pointer text-sm mt-4 hover:text-primaryGreen"
      >
        {label}
      </label>
      <input
        className={`w-full border rounded-lg p-4 text-sm bg-white outline-none focus:border-${
          meta.touched && meta.error ? "red-500" : "primaryGreen"
        } transition-all mb-2`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error && (
        <p className="text-sm text-red-500">{meta.error}</p>
      )}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
};

export default withErrorBoundary(Input, {
  FallbackComponent,
});
