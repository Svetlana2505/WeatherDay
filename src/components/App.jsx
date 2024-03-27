import { Form } from './Form/Form';
import { Container } from './Container';
import { Data } from './Data/Data';

import { useState } from 'react';
import { fetch } from './api';
import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export const App = () => {
  const [weather, setWeather] = useState([]);

  const fetchWeather = async location => {
    const data = await fetch(location);
    setWeather(data);
  };

  return (
    <Container>
      <>
        <Form fetchWeather={fetchWeather} />
        {weather?.status === 404 && (
          <Stack sx={{ margin: ' auto' }} spacing={2}>
            <Alert
              severity="error"
              sx={{
                width: '100%',
                background: 'none',
                color: 'red',
              }}
            >
              Введите город!
            </Alert>
          </Stack>
        )}
        <Data weather={weather} />
      </>
    </Container>
  );
};
