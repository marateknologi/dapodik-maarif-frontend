import React from "react"
import PropTypes from 'prop-types'

const Button = ({ children, type = "button", className, variant, ...props }) => {
    const bgVariant = {
        danger: 'bg-red-400',
        primary: 'bg-blue-500',
        warning: 'bg-yellow-600',
        success: 'bg-green-600',
    }

    return (
        <button
            type={type}
            className={`
                ${props.disabled
                    ? "bg-gray-600"
                    : `${(bgVariant[variant]) ?? bgVariant['primary']}`}
                w-full
                sm:w-auto
                px-5
                py-2.5
                rounded-lg
                text-sm
                text-center
                font-medium
                text-white
                hover:opacity-80
                focus:ring-4
                focus:outline-none
                focus:ring-blue-300
                dark:bg-blue-600
                dark:hover:bg-blue-700
                dark:focus:ring-blue-800
                ${className || ''}
            `}
            {...props}
        >
            {children}
        </button>
    )
}

Button.propTypes = {}
export default Button
