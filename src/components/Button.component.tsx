import * as React from 'react';

import styled from 'styled-components';

interface IButtonComponentProps {
  cb: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
}

const DefaultButton = styled.button`
  background-color: black;
  color: white;
  border: 1px solid green;
  padding: 10px;
  & span {
    background-color: green;
    color: black;
    padding: 10px;
  }
`;

const ButtonComponent: React.FC<IButtonComponentProps> = (props: IButtonComponentProps) => {
  const { cb, label } = props;

  return (
    <DefaultButton onClick={cb}>
      <span>{label}</span>
    </DefaultButton>
  );
};

export default ButtonComponent;
