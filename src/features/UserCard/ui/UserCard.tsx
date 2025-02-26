import { logout } from '@/entities'
import { useAppDispatch, useAppSelector } from '@/shared'
import styled from 'styled-components'

export const UserCard = () => {
  const username = useAppSelector(state => state.authSlice.username)

  const dispatch = useAppDispatch()

  const logoutHandler = () => dispatch(logout())

  return (
    <UserCardContainer>
      <UserInfo>
        <img src="/user.svg" alt="user avatar" />

        <NameAndWallet>
          <Name>{username}</Name>
          <Wallet>9 012 TKN</Wallet>
        </NameAndWallet>
      </UserInfo>

      <img src="/logout.svg" alt="logout" onClick={logoutHandler} />
    </UserCardContainer>
  )
}

const UserCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #313e62;
  border-radius: 18px;
  padding: 16px;

  > img {
    cursor: pointer;
  }
`
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`
const NameAndWallet = styled.div`
  display: flex;
  flex-direction: column;
`
const Name = styled.span`
  font-size: 16px;
  font-weight: 600;
`
const Wallet = styled.span`
  font-size: 14px;
  font-weight: 500;
`
