import React, { useState } from 'react';
import { Button, Result } from 'antd';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '@constants';
import Header from '@components/header/Header';
import Footer from '@components/footer/Footer';
import SendMessageModal from '@components/sendMessageModal/SendMessageModal';

function MainPage() {
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);

  const onSendMessageButtonClick = () => {
    setIsMessageModalOpen(true);
  };

  return (
    <>
      <Header></Header>
      <Button type="primary" onClick={onSendMessageButtonClick}>
        Отправить заявку
      </Button>
      <Footer></Footer>

      <SendMessageModal
        name="Отправить заявку"
        isOpen={isMessageModalOpen}
        onOk={() => setIsMessageModalOpen(false)}
        onCancel={() => setIsMessageModalOpen(false)}
      />
    </>
  );
}

export default MainPage;
