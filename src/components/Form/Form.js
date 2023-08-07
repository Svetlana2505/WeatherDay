import { StyledInput, StyledForm } from './Form.styled';
import { useState } from 'react';

export const Form = ({ fetchWeather }) => {
  const [location, setLocation] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    fetchWeather(location);
    setLocation('');
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledInput
        type="text"
        name="search"
        value={location}
        onChange={e => setLocation(e.target.value)}
        placeholder="Поиск..."
      />
    </StyledForm>
  );
};
