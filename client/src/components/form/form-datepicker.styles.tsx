import styled from 'styled-components';
import DatePicker from 'react-date-picker';

export const InputGroup = styled.div`
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 0.8rem;
  }
`;

export const InputLabel = styled.label`
  color: var(--color-grey-dark);
  font-size: 1.6rem;
`;

export const StyledDatePicker = styled(DatePicker)`
  font-family: inherit;
  font-size: 1.6rem;
  background-color: var(--color-grey-lightest);

  .react-date-picker__wrapper {
    border: 1px solid var(--color-grey-lightest);
    padding: 0.8rem;

    input,
    span {
      color: var(--color-grey-dark);
    }

    svg {
      stroke: var(--color-grey-dark);
    }
  }
`;
