import styled from 'styled-components';

export const InputGroup = styled.div`
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 0.8rem;
  }
`;

export const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const CheckMark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 2.5rem;
  width: 2.5rem;
  background-color: var(--color-grey-lightest);
  transition: all 0.2s;

  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`;

export const CheckboxContainer = styled.label`
  display: block;
  position: relative;
  padding-left: 3.5rem;
  margin-bottom: 1.2rem;
  cursor: pointer;
  font-family: inherit;
  font-size: 1.4rem;
  color: var(--color-grey-dark);
  padding-top: 0.5rem;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  ${CheckboxInput}:checked ~ ${CheckMark}:after {
    display: block;
  }

  &:hover ${CheckboxInput} ~ ${CheckMark} {
    background-color: var(--color-grey-lighter);
  }

  ${CheckboxInput}:checked ~ ${CheckMark} {
    background-color: var(--color-primary);
  }

  ${CheckMark}:after {
    left: 0.9rem;
    top: 0.3rem;
    width: 0.75rem;
    height: 1.5rem;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
