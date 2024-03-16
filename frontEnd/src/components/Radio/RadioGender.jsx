import { useField } from "formik";
import PropTypes from "prop-types";
import FallbackComponent from "../Error/FallbackComponent";
import { withErrorBoundary } from "react-error-boundary";

const RadioGender = (props) => {
  const [field] = useField(props);
  return (
    <div className="flex items-center gap-x-3">
      <label className="cursor-pointer custom-radio">
        <input
          {...field}
          type="radio"
          value={props.value}
          className="hidden"
          // defaultChecked={props.defaultChecked}
          checked={props.checked}
          // ! để checked thì nó không thay đổi được giá trị được
        />
        <div className="w-full h-full bg-white rounded-full"></div>
      </label>
      <span>{props.label}</span>
    </div>
  );
};

RadioGender.propTypes = {
  value: PropTypes.string,
  checked: PropTypes.bool,
  label: PropTypes.string,
};

export default withErrorBoundary(RadioGender, {
  FallbackComponent,
});
