import AdminTemplate from 'components/templates/AdminTemplate/AdminTemplate';
import styled from 'styled-components';
import EditIcon from 'assets/icons/EditIcon.png';
import blueStudent from 'assets/icons/BlueStudent.svg';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';
import DeleteIcon from 'assets/icons/DeleteIcon.svg';
import { Wrapper, InfoWrapper, Heading, ParagraphsWrapper, Paragraph, InnerWrapper } from './ClassDetails.styles';

const PeopleCard = styled.div`
  width: 95.8%;
  height: 8.5rem;
  background-color: white;
  margin: 2rem 0rem 0 5rem;
  border-radius: 1rem;
  display: flex;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  align-items: center;
`;

const StudentBox = styled(SidebarLink)`
  background-color: #b8d0fc;
  border-radius: 1rem;
  height: 4.75rem;
  width: 4.75rem;
  padding: 1rem;
  margin-left: 2rem;
`;

const DeleteBox = styled(SidebarLink)`
  background-color: #fcb3b0;
  border-radius: 1rem;
  height: 4.75rem;
  width: 4.75rem;
  padding: 1rem;
`;

const EditBox = styled(SidebarLink)`
  background-color: #e8fcd9;
  border-radius: 1rem;
  height: 4.75rem;
  width: 4.75rem;
  padding: 1rem;
`;

const Name = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  margin-left: 7.5rem;
  margin-right: 14rem;
`;

const Role = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  margin-right: 16.5rem;
`;

const Number = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  text-align: center;
  margin-right: 10rem;
`;

const Date = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  text-align: center;
  margin-right: 20rem;
`;
const ClassDetails = () => (
  <AdminTemplate>
    <Wrapper>
      <InfoWrapper>
        <Heading>
          Edytuj <span>1A</span>
        </Heading>
        <ParagraphsWrapper>
          <Paragraph>Imię i nazwisko</Paragraph>
          <Paragraph>Rola</Paragraph>
          <Paragraph>Data urodzenia</Paragraph>
          <Paragraph>Numer</Paragraph>
        </ParagraphsWrapper>
      </InfoWrapper>
      <InnerWrapper>
        <PeopleCard>
          <StudentBox icon={blueStudent} />
          <Name>Marcin Najman</Name>
          <Role>Uczeń</Role>
          <Date>12.12.2012</Date>
          <Number>1</Number>
          <EditBox icon={EditIcon} />
          <DeleteBox icon={DeleteIcon} />
        </PeopleCard>
      </InnerWrapper>
    </Wrapper>
  </AdminTemplate>
);

export default ClassDetails;
