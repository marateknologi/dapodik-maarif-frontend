import React from "react"
import PropTypes from 'prop-types'

const FormControl = ({ children, htmlFor, label, formikData }) => {
    return (
        <div
            className="
                relative
                z-0
                mb-6
                w-full
                group"
        >
            {children}

            <label
                htmlFor={htmlFor}
                className={`
                    peer-focus:font-medium
                    absolute
                    text-sm
                    ${formikData ? "text-red-500" : "text-gray-500"}
                    dark:text-gray-400
                    duration-300
                    transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
                    peer-focus:left-0
                    peer-focus:dark:text-blue-500
                    peer-placeholder-shown:scale-100
                    peer-placeholder-shown:translate-y-0
                    peer-focus:scale-75
                    peer-focus:-translate-y-6
                    `}
            >
                {formikData ? formikData : label}
            </label>
        </div>
    )
}

FormControl.propTypes = {}
export default FormControl