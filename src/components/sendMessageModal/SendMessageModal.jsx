import React, { useState, useEffect } from 'react';
import { MODAL_TYPE } from '@constants';
import ClientNameInput from '@modules/sendMessage/ClientNameInput';
import ClientEmailInput from '@modules/sendMessage/ClientEmailInput';
import MessageInput from '@modules/sendMessage/MessageInput';
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
    const mess = form.getFieldValue('message');
    const text = `Имя: ${name}\nEmail: ${email}\nСообщение: ${mess}`;

    const params = {
      chat_id: CHAT_ID,
      text: text,
    };
    try {
      await tgBotApi.sendMessage(params);
      message.success('Заявка успешно отправлена');
    } catch {
      message.error('Невозможно отправить заявку');
    } finally {
      setIsLoading(false);
    }
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
        <MessageInput name="message" />
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
