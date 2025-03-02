import {
  AI_MODELS,
  Arrow,
  Dropdown,
  useAppSelector,
  useGetChatInfo,
  useSetChatNameOrModelMutation,
} from '@/shared';
import { useState } from 'react';
import { Model, Select } from '../styles';

export const AIModelSelect = () => {
  const isChatDisabled = useAppSelector(state => state.appSlice.isChatDisabled);
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
    >
      <Select $disabled={isLoading || isChatDisabled}>
        <img src={`/images/${model_id}.svg`} alt={model_id + ' logo'} />
        {aiName}
        <Arrow isArrowUp={isModalOpen} />
      </Select>
    </Dropdown>
  );
};
