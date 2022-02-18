import styled from 'styled-components';
import PsychoTemplate from 'components/templates/PsychoTemplate/PsychoTemplate';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';
import blueStudent from 'assets/icons/BlueStudent.svg';
import AcceptIcon from 'assets/icons/AcceptIcon.png';
import CancelIcon from 'assets/icons/CancelIcon.png';
import PsychoGreet from 'components/molecules/PsychoGreet/PsychoGreet';

const PageWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transform: translateY(-1%);
`;

const Meeting = styled.div`
  height: 10rem;
  border-radius: 1.5rem;
  background-color: white;
  box-shadow: ${({ theme }) => theme.innerStyles.box};
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }
`;

const MeetingWrapper = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: center;

  height: 100%;
  transform: translateY(-1%);
`;

const Box = styled(SidebarLink)`
  border-radius: 1rem;
  height: 4.5rem;
  width: 4.5rem;
  padding: 1rem;
  opacity: 0.8;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

export const EditBox = styled(Box)`
  background-color: #e8fcd9;
`;

export const StudentBox = styled(Box)`
  background-color: #b8d0fc;
`;

export const StudentInfo = styled.div`
  transform: translateY(10%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }

  p {
    transform: translateY(-70%);
    width: 11rem;
    text-align: left;
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

export const DeleteBox = styled(Box)`
  background-color: #fcb3b0;
`;

export const BoxWrapper = styled.div`
  display: flex;
`;

const TodayPage = () => (
  <PsychoTemplate>
    <PageWrapper>
      <PsychoGreet />
      <MeetingWrapper>
        <Meeting>
          <div>
            <StudentBox icon={blueStudent} />
            <StudentInfo>
              <h1>Tomasz Dupeczka</h1>
              <p>3E</p>
            </StudentInfo>
          </div>
          <BoxWrapper>
            <EditBox icon={AcceptIcon} />
            <DeleteBox icon={CancelIcon} />
          </BoxWrapper>
        </Meeting>
        <Meeting>
          <div>
            <StudentBox icon={blueStudent} />
            <StudentInfo>
              <h1>Tomasz Dupeczka</h1>
              <p>3E</p>
            </StudentInfo>
          </div>
          <BoxWrapper>
            <EditBox icon={AcceptIcon} />
            <DeleteBox icon={CancelIcon} />
          </BoxWrapper>
        </Meeting>
        <Meeting>
          <div>
            <StudentBox icon={blueStudent} />
            <StudentInfo>
              <h1>Tomasz Dupeczka</h1>
              <p>3E</p>
            </StudentInfo>
          </div>
          <BoxWrapper>
            <EditBox icon={AcceptIcon} />
            <DeleteBox icon={CancelIcon} />
          </BoxWrapper>
        </Meeting>
        <Meeting>
          <div>
            <StudentBox icon={blueStudent} />
            <StudentInfo>
              <h1>Tomasz Dupeczka</h1>
              <p>3E</p>
            </StudentInfo>
          </div>
          <BoxWrapper>
            <EditBox icon={AcceptIcon} />
            <DeleteBox icon={CancelIcon} />
          </BoxWrapper>
        </Meeting>
      </MeetingWrapper>
    </PageWrapper>
  </PsychoTemplate>
);

export default TodayPage;
