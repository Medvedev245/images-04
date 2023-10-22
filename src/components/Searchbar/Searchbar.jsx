import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { Search } from './Searchbar.styled';

const nameSchema = Yup.object().shape({
  query: Yup.string()
    .min(2, 'Too Short!')
    .max(25, 'Too Long!')
    .required('Required'),
});

export const Searchbar = props => {
  return (
    <Search>
      <Formik
        initialValues={{
          query: '',
        }}
        validationSchema={nameSchema}
        onSubmit={(values, actions) => {
          props.onSubmit(values);
          actions.resetForm();
        }}
      >
        <Form>
          <label htmlFor="query">Image</label>
          <Field id="query" name="query" placeholder="Enter Image" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </Search>
  );
};
