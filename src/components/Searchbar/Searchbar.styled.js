import styled from 'styled-components';
import { Form, Field } from 'formik';

export const Search = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;

  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const MyForm = styled(Form)`
  display: flex;
  gap: 40px;
`;

export const MyField = styled(Field)`
  padding: 3px;
  height: 32px;
`;

export const MyLabel = styled.label`
  font-size: 24px;
`;
