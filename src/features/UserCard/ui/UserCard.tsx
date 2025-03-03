import { logout, selectUsername } from '@/entities';
import { useAppDispatch, useAppSelector } from '@/shared';
import { memo } from 'react';
import { Name, NameAndWallet, UserAvatar, UserCardContainer, UserInfo, Wallet } from '../styles';

export const UserCard = memo(() => {
  const username = useAppSelector(selectUsername);
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
