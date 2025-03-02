import styled, { css } from 'styled-components';

export const SidebarContainer = styled.aside<{ $showSidebar: boolean }>`
  max-width: 324px;
  width: 100%;
  height: 100%;
  background-color: var(--secondary-color);
  border-radius: 18px;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  transition: 0.2s;

  @media (max-width: 1024px) {
    max-width: 240px;
  }

  @media (max-width: 768px) {
    max-width: none;
    width: 100%;
    position: absolute;
    z-index: 1;
    left: -100%;

    ${({ $showSidebar }) =>
      $showSidebar &&
      css`
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
      `}
  }
`;
export const Line = styled.hr`
  border: 1px solid var(--border-color);
  margin-bottom: 16px;
`;
export const Hamburger = styled.div<{ $closeHambIcon: boolean }>`
  width: 45px;
  height: 45px;
  background-color: var(--secondary-color);
  border: 3px solid var(--primary-color);
  border-radius: 5px;
  position: fixed;
  z-index: 2;
  top: 40px;
  right: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  padding: 0 6px;

  ${({ $closeHambIcon }) =>
    $closeHambIcon &&
    css`
      :first-child {
        display: none;
      }
      :nth-child(2) {
        transform: rotate(45deg);
      }
      :nth-child(3) {
        transform: rotate(-45deg);
      }

      div {
        position: absolute;
        right: 0;
      }
    `}

  div {
    width: 100%;
    height: 3px;
    background-color: var(--white-color);
    border-radius: 2px;
    transition: 0.2s;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;
