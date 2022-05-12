import {
  Container,
  Title,
  SubTitle,
  Section,
  SectionWrapper,
} from 'components/AppStyled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

export const Phonebook = () => {
  return (
    <Section>
      <Container>
        <SectionWrapper>
          <div>
            <Title>Add Contact</Title>
            <ContactForm />
          </div>
          <div>
            <SubTitle>Contacts</SubTitle>
            <Filter />
            <ContactList />
          </div>
        </SectionWrapper>
      </Container>
    </Section>
  );
};
