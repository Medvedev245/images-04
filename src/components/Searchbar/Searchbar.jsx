import { Formik } from 'formik';
import * as Yup from 'yup';
import { MyForm, Search, MyField, MyLabel } from './Searchbar.styled';

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
        <MyForm>
          <MyLabel htmlFor="query">Image</MyLabel>
          <MyField id="query" name="query" placeholder="Enter Image" />

          <button type="submit">Submit</button>
        </MyForm>
      </Formik>
    </Search>
  );
};
