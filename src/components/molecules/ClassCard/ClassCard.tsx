import styled from 'styled-components';
import React from 'react';

const ClassWrapper = styled.div`
  background-color: white;
  margin-top: 3rem;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);

  p {
    font-size: ${({ theme }) => theme.fontSize.s};

    strong {
      color: ${({ theme }) => theme.colors.accentBlue};
    }
  }
`;

const ClassDetails = styled.details`
  height: 5.5rem;
  width: 35rem;
  background-color: white;
  display: flex;
  max-width: 35rem;
  border-radius: 1rem;
  border-top: 5px solid ${({ theme }) => theme.colors.accentGreen};
  text-decoration: none;
  position: relative;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);

  summary {
    list-style: none;
    padding: 1rem;
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }

  summary::after {
    content: '>';
    position: absolute;
    // left: -10px;
    right: 20px;
    transition: transform 0.1s ease-in-out;
    transform: rotate(90deg);
  }

  &[open] {
    summary::after {
      transform: rotate(-90deg);
    }
  }
`;

const ClassCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5rem;
  height: 5rem;
  width: 5rem;
  background-color: #eceff7;
`;

interface Props {
  classYear?: string;
  classes: {
    amountOfStudents?: number;
    name?: string;
  }[];
}

const ClassCard: React.FC<Props> = ({ classYear, classes }) => (
  <div>
    <ClassDetails>
      <summary>{classYear}</summary>
      <div>
        {classes.map(({ name, amountOfStudents }) => (
          <ClassWrapper>
            <ClassCircle>
              <h1>{name}</h1>
            </ClassCircle>
            <p>liczba uczniów: {amountOfStudents}</p>
          </ClassWrapper>
        ))}
      </div>
    </ClassDetails>
  </div>
);

export default ClassCard;
