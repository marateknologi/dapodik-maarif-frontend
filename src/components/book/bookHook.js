import { useEffect, useState } from 'react'
import axios from '@/lib/axios'
import { useFormik } from 'formik';
import { bookSchema } from '@/components/book/schema'

const initBook = {
    name: '',
    price: 0,
    description: '',
}

const useBook = () => {
    // react state
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const formik = useFormik({
        initialValues: initBook,
        validationSchema: bookSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                if (values.id) {
                    handleUpdateBooks(values)
                } else {
                    handleAddBook(values)
                }
                resetForm()
            } catch (error) {
                console.log(error)
            }
        },
    })

    // fetch book with formik -> book::get/${id}
    const getBook = async (id) => {
        try {
            const fields = [
                'id',
                'name',
                'price',
                'description'
            ];

            // just READ command by ID param
            const { data } = await axios
                .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books/${id}`)
            const book = data.response

            fields.forEach(
                field => formik.setFieldValue(field, book[field])
            )
        } catch (error) {
            console.log(error)
        }
    }

    //ordinary clean fetch -> book::get::index
    const fetchBooks = async () => {
        // just READ command
        setLoading(true)
        await axios
            .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books`)
            .then(res =>
                setBooks(res.data.response)
            )
            .catch(err => setError(err.message))
            .finally(() => {
                setLoading(false)
            })
    }

    //SPA: ADD item as new list
    const handleAddBook = async (values) => {
        // just CREATE command
        const { data } = await axios.post(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books`,
            values,
        )

        setBooks(prev => [...prev, data.response])
    }

    //SPA: UPDATE item to available targeted item
    const handleUpdateBooks = async (values) => {
        // just UPDATE command
        const { data } = await axios.put(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books/${values.id}`,
            // form,
            values,
        )

        // re-arrange items
        const book = data.response
        const updateBook = books.map(item =>
            // change selected(old item) with new::book data
            item.id === book.id ? book : item
        )

        setBooks(updateBook)

    }

    //SPA: DELETE item to targeted item
    const handleDeleteBook = async (id) => {
        if (confirm("Sure to Delete?")) {
            // just DELETE command
            await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books/${id}`)

            // re-arrange items
            const filteredBooks = books.filter(item =>
                item.id !== id
            )

            setBooks(filteredBooks)
        }
    }

    // react state update refresh
    useEffect(() => {
        fetchBooks()
    }, [])


    return {
        books,
        formik,
        bookLoading: loading,
        bookError: error,
        getBook,
        handleAddBook,
        handleDeleteBook
    }
}

export default useBook
