import "./style.css"
import { ErrorMessage, useField } from "formik"
export default function LoginInput({ placeholder, ...props }) {
  const [field, meta] = useField(props)
  return (
    <div className="input_wrap">
      <div className={meta.touched && meta.error ? "input_error" : ""}>
        {meta.touched && meta.error && <ErrorMessage name={field.name} />}
      </div>
      <input
        className={meta.touched && meta.error ? "input_error_border" : ""}
        placeholder={placeholder}
        type={field.type}
        name={field.name}
        {...field}
        {...props}
      />
      {meta.touched && meta.error && <i className="error_icon"></i>}
    </div>
  )
}
