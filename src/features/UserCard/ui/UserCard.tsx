import { logout } from '@/entities';
import { useAppDispatch, useAppSelector } from '@/shared';
import { memo } from 'react';
import styled from 'styled-components';

export const UserCard = memo(() => {
  const username = useAppSelector(state => state.authSlice.username);

  const dispatch = useAppDispatch();

  const logoutHandler = () => dispatch(logout());

  return (
    <UserCardContainer>
      <UserInfo>
        <UserAvatar src="/images/user-with-border.svg" alt="user avatar" />

        <NameAndWallet>
          <Name>{username}</Name>
          <Wallet>9 012 TKN</Wallet>
        </NameAndWallet>
      </UserInfo>

      <img src="/images/logout.svg" alt="logout" onClick={logoutHandler} width={16} height={16} />
    </UserCardContainer>
  );
});

const UserCardContainer = styled.div`
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--border-color);
  border-radius: 18px;
  padding: 16px;

  > img {
    cursor: pointer;
  }
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const UserAvatar = styled.img`
  @media (max-width: 1024px) {
    width: 35px;
    height: 35px;
  }
  @media (max-width: 768px) {
    width: auto;
    height: auto;
  }
`;
const NameAndWallet = styled.div`
  display: flex;
  flex-direction: column;
`;
const Name = styled.span`
  font-size: 16px;
  font-weight: 600;

  @media (max-width: 1024px) {
    font-size: 13px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const Wallet = styled.span`
  font-size: 14px;
  font-weight: 500;

  @media (max-width: 1024px) {
    font-size: 11px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
