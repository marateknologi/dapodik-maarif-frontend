import React, { useState } from "react"
import PropTypes from 'prop-types'
import Button from '@/components/book/form/button'

const ListBook = ({ books = [], getBook , handleDeleteBook}) => {
    const List = ({ children, ...props}) => {
        return (<div className="w-full border-gray-300 border-2 py-5 px-5 mb-2 rounded-lg" {...props}>
            {children}
        </div>)
    }
    return books.map(
        (book, index) =>
            <List name="jajal" key={book.id}>
                <div className="flex justify-between items-center">
                    <div className="flex">
                        <p className="mr-2">{index + 1 + '.'}</p>
                        <p >{book.name}</p>
                    </div>
                    <div>
                        <Button className="mr-2" onClick={() => getBook(book.id)} >Edit</Button>
                        <Button variant="danger" onClick={()=> handleDeleteBook(book.id)} >Delete</Button>
                    </div>
                </div>
            </List>
    )
}

ListBook.propTypes = {
    books: PropTypes.array.isRequired,
}

export default ListBook
