import { Item, ItemContent, ItemNumber } from './ContactsItemStyled';
import { Button } from 'components/Button/Button';
import propTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsApi';

export const ContactsItem = ({ contact: { id, name, number } }) => {
  const [deleteContact, { error }] = useDeleteContactMutation();
  const handleDeleteContact = async () => {
    await deleteContact({ id });
    if (error) {
      alert('Something went wrong. Please try again');
    }
  };

  return (
    <Item>
      <ItemContent>
        {name}:<ItemNumber>{number}</ItemNumber>
      </ItemContent>
      <Button type="button" onClick={handleDeleteContact} text={'Delete'} />
    </Item>
  );
};

ContactsItem.propTypes = {
  contact: propTypes.object.isRequired,
};
