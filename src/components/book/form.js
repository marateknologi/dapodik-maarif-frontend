import React, { useState } from "react"
// import PropTypes from 'prop-types'

import FormControl from '@/components/book/form/formControl'
import Input from '@/components/book/form/input'
import Button from '@/components/book/form/button'

/*
const initBook = {
    name: '',
    price: 0,
    description: '',
}
*/

const Form = ({formik}) => {
    /*
    const [form, setForm] = useState(initBook)
    const { name, price, description } = form

    const resetForm = () => {
        setForm(initBook)
    }
    const handleChangeInput = e => {
        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const bookValSchema = Yup.object({
        name: Yup.string()
            .min(4, 'Name too Short!, min 4char')
            .max(255, 'Name too Long!, max 255char')
            .required('Name is Required!'),
        description: Yup.string()
            .min(10, 'Description too Short!, min 10char')
            .max(255, 'Description too long!, max 255char')
            .required('Description is Required!'),

    })
    const formik = useFormik({
        initialValues: initBook,
        validationSchema: bookValSchema,
        onSubmit: (val, { resetForm }) => {
            // console.log(val)
            handleSubmit(val, resetForm)
        },
    })
*/

    // const handleSubmit = async (value, resetForm) => {
        // const handleSubmit = async e => {
        // e.preventDefault();
        // alert(JSON.stringify(val))

        // ===================================
        // try {
        //     const { data } = await axios.post(
        //         `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books`,
        //         // form,
        //         value,
        //     )
        //     handleAddBook({
        //         book: data.data
        //     })
        //     resetForm()
        //     // console.log(response.data)
        // } catch (error) {
        //     console.log(error)
        // }
        // ===================================

        // const data = await axios
        //     .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books`, form)
        //     .then(res =>
        //         console.log(res)
        //     )
        //     .catch(err => console.log(err))
    // }

    return (
        <div className="mb-5">
            <form
                onSubmit={formik.handleSubmit}
            // onSubmit={handleSubmit}
            >
                <div className="grid md:grid-cols-2 md:gap-6">
                    <FormControl label="Nama Buku" htmlFor={"floating_nama_buku"} formikData={formik.errors['name']}>
                        <Input
                            id="floating_nama_buku"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                        // value={name}
                        // onChange={handleChangeInput}
                        />
                    </FormControl>
                    <FormControl label="Harga Buku">
                        <Input
                            id="floating_harga_buku"
                            type="number"
                            name="price"
                            value={formik.values.price}
                            onChange={formik.handleChange}
                        // value={price}
                        // onChange={handleChangeInput}
                        />
                    </FormControl>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <FormControl label="Deskripsi Buku" htmlFor={"floating_desc_buku"} formikData={formik.errors['description']}>
                        <Input
                            id="floating_desc_buku"
                            name="description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                        // value={description}
                        // onChange={handleChangeInput}
                        />
                    </FormControl>
                </div>
                <Button
                    type="submit"
                    disabled={!(formik.isValid && formik.dirty)}
                >
                    {formik.values.id ? "Update" : "Submit"}
                </Button>
            </form >
            {/* <pre>{JSON.stringify(form, null, 2)}</pre> */}
        </div >
    )
}

Form.propTypes = {}
export default Form
