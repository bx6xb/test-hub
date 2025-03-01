import { ChatButtons, Chats, SidebarHeader, UserCard } from '@/features';
import { useState } from 'react';
import styled, { css } from 'styled-components';

export const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleShowSidebarHandler = () => setShowSidebar(!showSidebar);

  return (
    <>
      <SidebarContainer $showSidebar={showSidebar}>
        <SidebarHeader />

        <ChatButtons />

        <Line />

        <Chats />

        <UserCard />
      </SidebarContainer>

      <Hamburger onClick={toggleShowSidebarHandler}>
        <span />
        <span />
        <span />
      </Hamburger>
    </>
  );
};

const SidebarContainer = styled.aside<{ $showSidebar: boolean }>`
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
const Line = styled.hr`
  border: 1px solid var(--border-color);
  margin-bottom: 16px;
`;
const Hamburger = styled.div`
  width: 50px;
  height: 50px;
  background-color: var(--secondary-color);
  border: 2px solid var(--primary-color);
  border-radius: 5px;
  position: fixed;
  z-index: 2;
  top: 50px;
  right: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;

  span {
    height: 2px;
    width: 100%;
    background-color: var(--white-color);
  }

  @media (min-width: 769px) {
    display: none;
  }
`;
