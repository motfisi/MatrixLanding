import React from 'react';
import { Typography } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import FormItem from 'antd/es/form/FormItem';

function MessageInput({ name }) {
  return (
    <>
      <Typography.Text>Описание задачи</Typography.Text>
      <FormItem name={name} hasFeedback validateFirst>
        <TextArea
          rows={4}
          allowClear
          placeholder="Введите описание"
          maxLength={500}
        />
      </FormItem>
    </>
  );
}

export default MessageInput;
