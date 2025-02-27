import { ChatButtons, Chats, SidebarHeader, UserCard } from '@/features'
import styled from 'styled-components'

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarHeader />

      <ChatButtons />

      <Line />

      <Chats />

      <UserCard />
    </SidebarContainer>
  )
}

const SidebarContainer = styled.aside`
  width: 324px;
  height: 100%;
  background-color: var(--secondary-color);
  border-radius: 18px;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
`
const Line = styled.hr`
  border: 1px solid var(--border-color);
  margin-bottom: 16px;
`
