import TextField, { TextFieldProps } from '@mui/material/TextField';
import styles from './style.module.scss';

/**
 * FormInput - Text field
 * @param props Component props
 * @returns Child component
 */
export default function InputText(props: TextFieldProps) {
  // [Props] Destructuring props
  const { label, error } = props;

  //! [JSX Section] -----------------------------------------------------------------
  return (
    <div className={styles['textfield-container']}>
      <label className={`${styles['label']} ${error && styles['error']}`}>
        {label}
      </label>
      <TextField
        {...props}
        inputRef={props.ref}
        variant='outlined'
        label=''
        slotProps={{
          root: { className: styles['textfield-root'] },
          input: { className: styles['textfield-input-wrapper'] },
          inputLabel: { className: styles['textfield-label'] },
          htmlInput: { className: styles['textfield-input'] },
          formHelperText: { className: styles['textfield-helper-text'] },
        }}
      />
      <small className={styles['error-text']}>{error}</small>
    </div>
  );
}
