import * as Yup from 'yup';

const bookSchema = Yup.object({
    name: Yup.string()
        .min(4, 'Name too Short!, min 4char')
        .max(255, 'Name too Long!, max 255char')
        .required('Name is Required!'),
    description: Yup.string()
        .min(10, 'Description too Short!, min 10char')
        .max(255, 'Description too long!, max 255char')
        .required('Description is Required!'),

})

export default bookSchema
