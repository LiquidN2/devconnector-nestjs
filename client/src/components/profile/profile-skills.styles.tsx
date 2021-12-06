import styled from 'styled-components';

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > *:not(:last-child) {
    margin-right: 1rem;
  }
`;
