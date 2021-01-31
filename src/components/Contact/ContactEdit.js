import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import Button from '@material-ui/core/Button';

import s from './ContactEdit.module.scss';

const ContactEdit = ({
  editedName,
  editedNumber,
  onChangeInputHandler,
  saveEditedHandler,
  setEditContactId,
}) => {
  return (
    <li className={s.listItem}>
      <input
        type="text"
        name="name"
        value={editedName}
        onChange={onChangeInputHandler}
      />
      <input
        type="text"
        name="number"
        value={editedNumber}
        onChange={onChangeInputHandler}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        startIcon={<SaveIcon />}
        onClick={saveEditedHandler}
      >
        Save
      </Button>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        startIcon={<CancelIcon />}
        onClick={() => setEditContactId('')}
      >
        Cancel
      </Button>
    </li>
  );
};

export default ContactEdit;
