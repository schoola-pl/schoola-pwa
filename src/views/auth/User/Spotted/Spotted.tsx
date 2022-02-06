import styled from 'styled-components';
import UserTemplate from 'components/templates/UserTemplate/UserTemplate';
import { PageWrapper } from './Spotted.styles';
import Question from 'components/organisms/Question/Question';
import AskQuestionInput from 'components/molecules/AskQuestionInput/AskQuestionInput';

const mockData = [
  {
    date: '24.04.2022',
    content: 'Czy karny Błaszczykowskiego zostanie powtórzony?',
    numberOfComments: 4,
    numberOfHearts: 8
  },
  {
    date: '04.06.2022',
    content: 'Przyniesie ktoś papier do kibla?',
    numberOfComments: 3,
    numberOfHearts: 12
  },
  {
    date: '24.04.2022',
    content: 'Czy karny Błaszczykowskiego zostanie powtórzony?',
    numberOfComments: 4,
    numberOfHearts: 8
  },
  {
    date: '04.06.2022',
    content: 'Przyniesie ktoś papier do kibla?',
    numberOfComments: 3,
    numberOfHearts: 12
  },
  {
    date: '24.04.2022',
    content: 'Czy karny Błaszczykowskiego zostanie powtórzony?',
    numberOfComments: 4,
    numberOfHearts: 8
  },
  {
    date: '04.06.2022',
    content: 'Przyniesie ktoś papier do kibla?',
    numberOfComments: 3,
    numberOfHearts: 12
  },
  {
    date: '24.04.2022',
    content: 'Czy karny Błaszczykowskiego zostanie powtórzony?',
    numberOfComments: 4,
    numberOfHearts: 8
  },
  {
    date: '04.06.2022',
    content: 'Przyniesie ktoś papier do kibla?',
    numberOfComments: 3,
    numberOfHearts: 12
  }
];

const Spotted = () => {
  return (
    <UserTemplate>
      <PageWrapper>
        <AskQuestionInput />
        {mockData.map(({ date, content, numberOfHearts, numberOfComments }) => (
          <Question isSpotted={true} date={date} content={content} numberOfComments={numberOfComments} numberOfHearts={numberOfHearts} />
        ))}
      </PageWrapper>
    </UserTemplate>
  );
};

export default Spotted;
