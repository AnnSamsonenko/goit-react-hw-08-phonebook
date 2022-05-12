import {
  Container,
  Title,
  SubTitle,
  Section,
  SectionWrapper,
  BoxWrapper,
} from 'components/AppStyled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

export const Phonebook = () => {
  return (
    <Section>
      <Container>
        <SectionWrapper>
          <BoxWrapper>
            <Title>Add Contact</Title>
            <ContactForm />
          </BoxWrapper>
          <BoxWrapper>
            <SubTitle>Contacts</SubTitle>
            <Filter />
            <ContactList />
          </BoxWrapper>
        </SectionWrapper>
      </Container>
    </Section>
  );
};
