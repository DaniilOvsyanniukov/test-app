import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import shortid from "shortid";
import operations from '../../redux/products/products-operations';

const INITIAL_VALUES = {
  name: '',
  count: '',
  width: '',
  height: '',
  weight: '',
  comment: '',
};

const InputForm = (toggleModal) => {
  const dispatch = useDispatch();

    const handleSubmit = e => {
    let productId = shortid.generate(); 
    const name = e.name;
    const count = e.count;
    const width = e.width;
    const height = e.height;
    const weight = e.weight;
    const comments = e.comment;
        dispatch(operations.addProduct({
            id: productId,
            name,
            count,
            size: {
                width, height
            },
            weight,
            comments
        }));
    toggleModal()  
  };
    return (
        <Formik
            initialValues={INITIAL_VALUES}
            onSubmit={handleSubmit}
          >{() => (
              <Form>
                <label htmlFor="name">
                  <p >*Name: </p>
                </label>
                <Field
                  type="text"
                  name="name"
                  placeholder="Name"
                />

                <ErrorMessage
                  name="name"
                  component="div"
                />
                <label htmlFor="count">
                  <p >*Count: </p>
                </label>
                <Field
                  type="count"
                  name="count"
                />
                <ErrorMessage
                  name="count"
                  component="div"
                />
                <label htmlFor="width">
                  <p>*Width:</p>
                </label>
                <Field
                  type="width"
                  name="width"
                />
                <ErrorMessage
                  name="width"
                  component="div"
                />
                <label htmlFor="height">
                  <p>*Height:</p>
                </label>
                <Field
                  type="height"
                  name="height"
                />
                <ErrorMessage
                  name="height"
                  component="div"
                    />
                <label htmlFor="weight">
                  <p>*Weight:</p>
                </label>
                <Field
                  type="weight"
                  name="weight"
                />
                <ErrorMessage
                  name="weight"
                  component="div"
                    />
                <label htmlFor="comment">
                  <p>*Comment:</p>
                </label>
                <Field
                  type="comment"
                  name="comment"
                />
                <ErrorMessage
                  name="comment"
                  component="div"
                />
                <div >
                  <button
                    type="submit"

                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>

    )
}
export default InputForm;