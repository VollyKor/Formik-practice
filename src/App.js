import './App.css';
import 'react-phone-number-input/style.css';
import { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Input, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isValidPhoneNumber,
} from 'react-phone-number-input';

const yupValidation = Yup.object({
  name: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .min(3, 'Must be 3 characters or more')
    .required('Required'),
  phoneNumber: Yup.string()
    .min(8, 'Must be 8 symbols or more')
    .required('Required'),
});

export default class App extends Component {
  state = {
    contacts: [],
    phoneNumber: '',
  };
  addContact(values) {
    this.setState({ contacts: [values, ...this.state.contacts] });
  }

  // SignupForm = () => {
  //   const formik = useFormik({
  //     initialValues: {
  //       name: '',
  //       phoneNumber: '',
  //     },
  //     validationSchema: Yup.object({
  //       firstName: Yup.string()
  //         .max(15, 'Must be 15 characters or less')
  //         .required('Required'),
  //     }),
  //     onSubmit: values => this.addContact(values),
  //   });
  //   return (
  //     <form onSubmit={formik.handleSubmit}>
  //       <label htmlFor="name">Name</label>
  //       <input
  //         id="name"
  //         type="name"
  //         {...formik.getFieldProps('name')}
  //       />

  //       <label htmlFor="lastName">Phone Number</label>
  //       <input
  //         id="phoneNumber"
  //         type="tel"
  //         {...formik.getFieldProps('phoneNumber')}
  //       />

  //       <button type="submit">Submit</button>
  //     </form>
  //   );
  // };

  handleChange(e) {
    console.log(this.state);
    console.log(e);
    // this.setState({phoneNumber: })
    // this.setState({
    //   phoneNumber: e.target.value,
    // });
  }

  render() {
    // const [value, setValue] = useState();

    return (
      <div>
        <h1>Form</h1>
        <Formik
          initialValues={{ name: '' }}
          validationSchema={yupValidation}
          onSubmit={value => {
            this.addContact(value);
          }}
        >
          {formik => (
            <form
              onSubmit={e => {
                e.preventDefault();
                formik.handleSubmit();
                formik.resetForm();
              }}
            >
              <label htmlFor="name">Name</label>
              <input id="name" type="name" {...formik.getFieldProps('name')} />

              <Input
                country="UA"
                value={this.state.phoneNumber}
                onChange={this.handleChange}
              />

              <button type="submit">Submit</button>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}
