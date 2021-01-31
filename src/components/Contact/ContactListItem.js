import s from './ContactListItem.module.scss';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const ContactListItem = ({
  id,
  name,
  number,
  deleteContactHandler,
  editIdHandler,
}) => {
  return (
    <li className={s.listItem}>
      <span className={s.name}>{name}: </span>
      <span className={s.number}>{number}</span>
      <Button
        variant="contained"
        color="secondary"
        type="submit"
        startIcon={<DeleteIcon />}
        onClick={() => deleteContactHandler(id)}
      >
        Delete
      </Button>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        startIcon={<EditIcon />}
        onClick={() => editIdHandler(id)}
      >
        Edit
      </Button>
    </li>
  );
};
export default ContactListItem;
