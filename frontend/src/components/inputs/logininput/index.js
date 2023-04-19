import "./style.css"
import { ErrorMessage, useField } from "formik"
import { useEffect } from "react"
import { useMediaQuery } from "react-responsive"
export default function LoginInput({ placeholder, bottom, ...props }) {
  const [field, meta] = useField(props)
  const desktopView = useMediaQuery({
    query: "(min-width:850px)",
  })
  return (
    <div className="input_wrap">
      {meta.touched && meta.error && !bottom && (
        <div
          className={
            desktopView ? "input_error input_error_desktop" : "input_error"
          }
          style={desktopView ? {} : { transform: "translateY(-4px)" }}
        >
          <ErrorMessage name={field.name} />
          <div
            className={desktopView ? "error_arrow_left" : "error_arrow_bottom"}
          ></div>
        </div>
      )}
      <input
        className={meta.touched && meta.error ? "input_error_border" : ""}
        placeholder={placeholder}
        type={field.type}
        name={field.name}
        {...field}
        {...props}
      />
      {meta.touched && meta.error && (
        <i
          className="error_icon"
          style={{ top: `${!bottom && !desktopView ? "62%" : "15px"}` }}
        ></i>
      )}
      {meta.touched && meta.error && bottom && (
        <div
          className={
            desktopView ? "input_error input_error_desktop" : "input_error"
          }
          style={desktopView ? {} : { transform: "translateY(4px)" }}
        >
          <ErrorMessage name={field.name} />
          <div
            className={desktopView ? "error_arrow_left" : "error_arrow_top"}
          ></div>
        </div>
      )}
    </div>
  )
}
