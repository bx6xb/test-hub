import {
  Arrow,
  Dropdown,
  useFetchChatsQuery,
  useGetChatId,
  useSetChatNameOrModelMutation,
} from '@/shared';
import { useState } from 'react';
import styled from 'styled-components';
import { AI_MODELS, AIModels } from '../model';

export const AIModelSelect = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [setModel, { isLoading }] = useSetChatNameOrModelMutation();
  const { data } = useFetchChatsQuery({});
  const { chatId } = useGetChatId();

  let modelId: AIModels = 'gpt';
  if (data) {
    const currentChat = data.data.find(chat => chat.id === chatId);

    if (currentChat) {
      modelId = currentChat.model_id as AIModels;
    }
  }

  const onOptionChange = (modelId: string) => {
    setModel({ chatId, modelId });
  };

  const mappedAIModels = Object.entries(AI_MODELS).map(([id, label]) => ({
    id,
    label: (
      <Model key={id}>
        <img src={`/images/${id}.svg`} alt={label + ' logo'} />
        {label}
      </Model>
    ),
  }));

  return (
    <Dropdown
      top="-150px"
      options={mappedAIModels}
      onOptionChange={onOptionChange}
      selected={modelId}
      getModalState={setIsModalOpen}
      disabled={isLoading}
    >
      <Select>
        <img src={`/images/${modelId}.svg`} alt={modelId + ' logo'} />
        {AI_MODELS[modelId]}
        <Arrow isArrowUp={isModalOpen} />
      </Select>
    </Dropdown>
  );
};

const Select = styled.div`
  min-width: 147px;
  height: 40px;
  padding: 10px 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  cursor: pointer;
  user-select: none;
`;
const Model = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  font-weight: 500;
`;
