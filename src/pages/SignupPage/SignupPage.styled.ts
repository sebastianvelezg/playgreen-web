import styled from "styled-components";

export const SignupPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.mode.background};
  transition: all 0.2s ease-in-out;
`;

export const SignupPageHeading = styled.h1`
  width: 192px;
  height: 51px;
  margin: 0;
  font-weight: 700;
  font-size: 42px;
  line-height: 122.02%;
  color: ${({ theme }) => theme.mode.text};
  margin-bottom: 0.7rem;
`;

export const SignupDescription = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 148.02%;
  max-width: 20rem;
  color: ${({ theme }) => theme.mode.text2};
  opacity: 0.8;
  margin: 0;
`;
