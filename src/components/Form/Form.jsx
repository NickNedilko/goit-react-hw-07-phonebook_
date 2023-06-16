import React, { useState } from 'react';
import { BsFillTelephonePlusFill } from 'react-icons/bs';

import PropTypes from 'prop-types';
import css from './Form.module.css';
import { nanoid } from 'nanoid';

const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const { name } = e.target;
    switch (name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        break;
    }
  };

  const contact = {
    id: nanoid(),
    name,
    number,
  };

  const formSubmit = e => {
    e.preventDefault();
    onSubmit(contact);
    setName('');
    setNumber('');
  };

  const inputNameId = nanoid();
  const inputNumberId = nanoid();

  return (
    <form onSubmit={formSubmit} className={css.form}>
      <label htmlFor={inputNameId}>
        <span className={css.inputLabel}> Name</span>
        <input
          className={css.formInput}
          id={inputNameId}
          onChange={handleInputChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label htmlFor={inputNumberId}>
        <span className={css.inputLabel}>Tel</span>
        <input
          className={css.formInput}
          id={inputNumberId}
          onChange={handleInputChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={css.addBtn}>
        <BsFillTelephonePlusFill /> Add contact
      </button>
    </form>
  );
};

// class Form extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   inputNameId = nanoid();
//   inputNumberId = nanoid();
//   handleInputChange = e => {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value,
//     });
//   };
//   formSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     this.formReset();
//   };

//   formReset = () => {
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };
//   render() {
//     const { name, number } = this.state;
//     return (
//       <form onSubmit={this.formSubmit} className={css.form}>
//         <label htmlFor={this.inputNameId}>
//           <span className={css.inputLabel}> Name</span>
//           <input
//             className={css.formInput}
//             id={this.inputNameId}
//             onChange={this.handleInputChange}
//             value={name}
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </label>

//         <label htmlFor={this.inputNumberId}>
//           <span className={css.inputLabel}>Tel</span>
//           <input
//             className={css.formInput}
//             id={this.inputNumberId}
//             onChange={this.handleInputChange}
//             value={number}
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </label>
//         <button type="submit" className={css.addBtn}>
//           <BsFillTelephonePlusFill /> Add contact
//         </button>
//       </form>
//     );
//   }
// }

Form.propTypes = {
  name: PropTypes.string,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  id: PropTypes.string,
  number: PropTypes.string,
};

export default Form;
