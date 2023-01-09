import { database } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { useState } from 'react';
import styles from './Form.module.css';
import Image from 'next/image';
const dbInstance = collection(database, 'User');


const Form = ({close}) => {
  // const [noteTitle, setNoteTitle] = useState({name: "IGOR", email:
  // "novgorodskiji@gmail.com"});
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const saveNote = () => {
    addDoc(dbInstance, {
      name: name,
      email: email
    })
  }

  const onChangeHandlerName = event => {
    setName(event.target.value);
 };

 const onChangeHandlerEmail = event => {
  setEmail(event.target.value);
};

const submit = () => {
  if (email.length > 1) {
    saveNote();
    close(false);
  }
}

  return (
    <form onSubmit={submit} className={styles.form}>
      <div className={styles.body}>
      <span>SUBSCRIBE TO OUR NEWS AND UPDATES</span>
      <div onClick={() => close(false)} className={styles.close}>
        <Image src="/close.svg" layout='fixed' width={20} height={20} alt="close" />
      </div>
        {/* <button
          onClick={saveNote}>
          Save Note
        </button> */}

        <div className={styles.input}>
          <label htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            onChange={onChangeHandlerName}
            value={name}
          />
        </div>

        <div className={styles.input}>
          <label htmlFor="name">
            Email*
          </label>
          <input
            required
            type="email"
            name="email"
            onChange={onChangeHandlerEmail}
            value={email}
            pattern="[a-zA-Z0-9._-]*@[a-zA-Z]*\.[a-zA-Z]{2,3}"
          />
        </div>
       
        <div className={styles.btn}>
          <button type='submit' className="wrapper-link-button text-md font-weight-md btn-text">
            SUBSCRIBE
            <svg className="wrapper-arrow-img" width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.75 5.25a.75.75 0 0 0 0 1.5H9l-3.593 3.592a.753.753 0 0 0 1.066 1.065l4.7-4.7a1 1 0 0 0 0-1.415l-4.7-4.7a.753.753 0 1 0-1.066 1.065L9 5.25H.75Z"/></svg>
          </button>
        </div>

      </div>
    </form>
  )
}

export default Form;