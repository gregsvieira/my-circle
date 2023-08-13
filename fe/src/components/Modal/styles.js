import styled from 'styled-components';

export const OverLay = styled.div`
  background: rgba(0, 0, 0, 0.60);
  backdrop-filter: blur(3.5px);
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background: #fff;
  width: 100%;
  max-width: 450px;
  height: 204px;
  flex-shrink: 0;
  border-radius: 4px;
  border: none;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);
  padding: 24px;
  text-align: left;

  h1 {
    font-size: 22px;
    color: ${({ theme, danger }) => (
    danger
      ? theme.colors.danger.main
      : theme.colors.gray[900]
  )}
  }

  p {
    margin-top: 8px;
  }
`;

export const Footer = styled.footer`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .cancel-button {
    background: transparent;
    font-size: 16px;
    margin-right: 8px;
    color: ${({ theme }) => theme.colors.gray[200]};
    border: none;
  }
`;