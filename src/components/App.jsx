
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

const App = () => {


  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Phonebook</h1>
      <Form/>
      <h2 className={css.title}>Contacts</h2>
      <Filter/>
      <Contacts/>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default App;
