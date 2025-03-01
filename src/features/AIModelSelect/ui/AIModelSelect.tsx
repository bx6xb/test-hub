import {
  AI_MODELS,
  Arrow,
  Dropdown,
  useGetChatInfo,
  useSetChatNameOrModelMutation,
} from '@/shared';
import { useState } from 'react';
import styled from 'styled-components';

export const AIModelSelect = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [setModel, { isLoading }] = useSetChatNameOrModelMutation();
  const chat = useGetChatInfo();

  if (!chat) {
    return null;
  }

  const { id, model_id, aiName } = chat;

  const onOptionChange = (modelId: string) => {
    setModel({ chatId: id, modelId });
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
      selected={model_id}
      getModalState={setIsModalOpen}
      disabled={isLoading}
    >
      <Select>
        <img src={`/images/${model_id}.svg`} alt={model_id + ' logo'} />
        {aiName}
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
