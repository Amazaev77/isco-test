import React, {ChangeEvent, FC} from 'react';
import styles from './Input.module.scss';

interface IInputProps {
  value: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void,
}

const Input: FC<IInputProps> = (props) => {

  return <input {...props} className={styles.input} type="text" />;
};

export default Input;
