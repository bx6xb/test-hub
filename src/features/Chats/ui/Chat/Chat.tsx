import { ChatType, ChatRenameInput, useSetChatNameOrModelMutation, ChatPreview } from '@/shared';
import { useState } from 'react';

export const Chat = ({ name, id }: ChatType) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const [renameChat] = useSetChatNameOrModelMutation();

  const toggleEditMode = () => setIsEditMode(!isEditMode);

  const onSubmit = (name: string) => {
    renameChat({ name, chatId: id });
    toggleEditMode();
  };

  return isEditMode ? (
    <ChatRenameInput name={name} onSubmit={onSubmit} />
  ) : (
    <ChatPreview id={id} chatName={name} toggleEditMode={toggleEditMode} />
  );
};
