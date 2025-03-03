import styled from 'styled-components';

export const AIMessageContainer = styled.div`
  max-width: 80%;
  display: flex;
  gap: 16px;
`;
export const AIAvatar = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 34px;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;
export const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const AIModel = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 400;
`;
export const AIVersion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--accent-bg);
  border-radius: 14px;
  padding: 4px 12px;
  font-size: 14px;
  font-weight: 500;
`;
export const MessageText = styled.div`
  max-width: 100%;
  overflow-wrap: break-word;
  word-break: break-word;
  white-space: pre-wrap;
  font-size: 18px;
  font-weight: 400;
  overflow: hidden;

  p,
  pre,
  code,
  blockquote,
  table,
  img {
    max-width: 100%;
    overflow-x: auto;
    word-break: break-word;
  }

  pre {
    white-space: pre-wrap;
    overflow-x: auto;
    background-color: black;
    padding: 8px;
    border-radius: 4px;
  }

  table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
export const Content = styled.div`
  max-width: 100%;
  overflow: hidden;
`;
export const Images = styled.div`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  > img {
    width: 100%;
    height: 100%;
  }
`;
export const CopyAndTime = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
`;
