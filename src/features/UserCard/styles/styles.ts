import styled from 'styled-components';

// UserCard
export const UserCardContainer = styled.div`
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
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const UserAvatar = styled.img`
  @media (max-width: 1024px) {
    width: 35px;
    height: 35px;
  }
  @media (max-width: 768px) {
    width: auto;
    height: auto;
  }
`;
export const NameAndWallet = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Name = styled.span`
  font-size: 16px;
  font-weight: 600;

  @media (max-width: 1024px) {
    font-size: 13px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
export const Wallet = styled.span`
  font-size: 14px;
  font-weight: 500;

  @media (max-width: 1024px) {
    font-size: 11px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
