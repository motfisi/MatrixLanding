import React, { useState, useEffect } from 'react';
import { MODAL_TYPE } from '@constants';
import ClientNameInput from '@modules/sendMessage/ClientNameInput';
import ClientEmailInput from '@modules/sendMessage/ClientEmailInput';
import { Button, Form, message, Modal, Space } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { tgBotApi } from '@api/tgBot';

function SendMessageModal({ name, isOpen, onOk, onCancel }) {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onFinish = async () => {
    setIsLoading(true);

    const name = form.getFieldValue('client_name');
    const email = form.getFieldValue('client_email');
    const text = `Имя: ${name}\nEmail: ${email}`;

    const params = {
      chat_id: '',
      text: text,
    };

    tgBotApi.sendMessage(params);
  };

  const onFinishFailed = () => {
    message.error('Проверьте поля для ввода!');
  };

  return (
    <Modal
      title={name}
      open={isOpen}
      onOk={onOk}
      onCancel={onCancel}
      footer={null}
    >
      <Form
        form={form}
        layout="vertical"
        variant="filled"
        requiredMark="Default"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <ClientNameInput name="client_name" />
        <ClientEmailInput name="client_email" />
        <Space>
          <FormItem>
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Отправить
            </Button>
          </FormItem>
          <FormItem>
            <Button onClick={onCancel}>Отмена</Button>
          </FormItem>
        </Space>
      </Form>
    </Modal>
  );
}

export default SendMessageModal;
