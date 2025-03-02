import { ChatButtons, Chats, SidebarHeader, UserCard } from '@/features';
import { useGetChatId } from '@/shared';
import { useEffect, useState } from 'react';
import { Hamburger, Line, SidebarContainer } from '../styles';

export const Sidebar = () => {
  const { chatId } = useGetChatId();
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    setShowSidebar(false);
  }, [chatId]);

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

      <Hamburger onClick={toggleShowSidebarHandler} $closeHambIcon={showSidebar}>
        <div />
        <div />
        <div />
      </Hamburger>
    </>
  );
};
