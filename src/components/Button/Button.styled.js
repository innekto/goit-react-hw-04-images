import styled from 'styled-components';

export const LoadButton = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  background-color: #20979e;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  margin: auto;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  width: 15%;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  :hover,
  :focus {
    background-color: #3b8ba8;
  }

  :disabled {
    background-color: grey;
    cursor: not-allowed;
  }
`;
