import styled from 'styled-components';

// SidebarHeader
export const LogoAndLang = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
`;

// LangSwitcher
export const LangSwitcherContainer = styled.div`
  display: flex;
  gap: 6px;
  align-content: center;
  cursor: pointer;
  user-select: none;
`;
export const CurrentLang = styled.span`
  font-size: 16px;
  font-weight: 600;
`;
