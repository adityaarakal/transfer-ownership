import { Box } from '@mui/material';
import * as React from 'react';
import ButtonComponent from './components/Button.component';
import { useLocalStorage } from './hooks/useLocalStorage.hook';
import { Login } from './pages';

const App: React.FC = () => {
  const [, setUserPref, removeUserPref] = useLocalStorage('userPref', '');
  const label = 'Set data in local storage';

  return (
    <>
      <h3>Boilerplate React Typescript</h3>
      <ButtonComponent cb={() => setUserPref(label)} label={label} />
      <ButtonComponent cb={() => removeUserPref()} label={'Clear local storage item'} />
      <Box m={2}>
        <Login />
      </Box>
    </>
  );
};

export default App;
