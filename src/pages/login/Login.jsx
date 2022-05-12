import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Button } from 'components/Button/Button';
import { Title } from 'components/AppStyled';
import { Container, Section } from 'components/AppStyled';
import {
  FormStyled,
  Input,
  LabelStyled,
  InputWrapper,
} from 'components/ContactForm/ContactFormStyled';
import { authOperations } from 'redux/auth/authOperations';

const initialValues = {
  email: '',
  password: '',
};

export const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = async ({ email, password }, { resetForm }) => {
    const loginObj = { email, password };
    dispatch(authOperations.logIn(loginObj));
    resetForm();
  };

  return (
    <Section>
      <Container>
        <Title>Login Page</Title>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <FormStyled autoComplete="off">
            <InputWrapper>
              <LabelStyled htmlFor="email">Email</LabelStyled>
              <div>
                <Input name="email" type="email" required />
              </div>
            </InputWrapper>
            <InputWrapper>
              <LabelStyled htmlFor="password">Password</LabelStyled>
              <div>
                <Input name="password" type="password" required />
              </div>
            </InputWrapper>
            <Button type="submit" text={'Confirm'} />
          </FormStyled>
        </Formik>
      </Container>
    </Section>
  );
};
