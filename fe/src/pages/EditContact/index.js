import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import Loader from '../../components/Loader';

import toast from '../../utils/toast';

import ContactsService from '../../services/ContactsService';

export default function EditContact() {
  const [isLoading, setIsLoading] = useState(true);
  const contactFormRef = useRef(null);

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function loadContact() {
      try {
        const contactData = await ContactsService.getContactById(id);

        setIsLoading(false);
        contactFormRef.current.setFieldsValues(contactData);
      } catch {
        history.push('/');
        toast({
          type: 'danger',
          text: 'Contact not found!',
        });
      }
    }

    loadContact();
  }, [id, history]);

  function handleSubmit() {
    //
  }

  return (
    <>
      <Loader isLoading={isLoading} />

      <PageHeader
        title="Edit contact"
      />
      <ContactForm
        ref={contactFormRef}
        buttonLabel="Save changes"
        onSubmit={handleSubmit}
      />
    </>
  );
}
