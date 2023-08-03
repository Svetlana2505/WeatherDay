import { useForm } from 'react-hook-form';

import { StyledInput, StyledForm } from './Form.styled';

export const Form = ({ setLocation, location, fetchWeather }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = () => {
    fetchWeather(location);
    setLocation('');
  };
  console.log(errors);
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInput
        type="text"
        name="search"
        {...register('search', { register: true })}
        value={location}
        onChange={e => setLocation(e.target.value)}
        placeholder="Поиск..."
      />
      <div>
        {errors?.search && (
          <p style={{ fontSize: '20px', textAlign: 'center', color: '#red' }}>
            {errors?.search.message}
          </p>
        )}
      </div>
    </StyledForm>
  );
};
