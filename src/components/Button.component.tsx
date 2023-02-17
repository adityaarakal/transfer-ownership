import * as React from 'react';
import classes from './Button.module.scss';

interface IButtonComponentProps {
  cb: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
}

const ButtonComponent: React.FC<IButtonComponentProps> = (props: IButtonComponentProps) => {
  const { cb, label } = props;

  return (
    <button className={classes.button} onClick={cb}>
      <span>{label}</span>
    </button>
  );
};

export default ButtonComponent;
