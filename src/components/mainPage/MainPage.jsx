import React, { useState, useEffect } from 'react';
import { Button, Row, Col, Result, Typography } from 'antd';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '@constants';
import SendMessageModal from '@components/sendMessageModal/SendMessageModal';
import matrix from '@assets/img/matrix.png';
import ad from '@assets/img/ad.png';
import actual from '@assets/img/actual.png';
import services from '@assets/img/services.png';
import siteview from '@assets/img/siteview.png';

import './sass/index.scss';

const texts = [
  'Сколько стоит?',
  'Какую CMS использовать?',
  'Сделаете сайт как у конкурента?',
];

function MainPage() {
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const onSendMessageButtonClick = () => {
    setIsMessageModalOpen(true);
  };

  return (
    <>
      <div className="main__container">
        <img src={matrix} className="main__img" />
        <Typography.Title className="main__matrixText">MATRIX</Typography.Title>
        <Typography.Title className="main__matrixWeb">WEB</Typography.Title>
        <Typography.Title className="main__matrixStudio">
          STUDIO
        </Typography.Title>
      </div>
      <div className="questions__container">
        <Typography.Title level={1} className="questions__text">
          Вы приходите с вопросами
        </Typography.Title>
        <Typography.Title level={3} className="questions__text">
          {texts[currentTextIndex]}
        </Typography.Title>
      </div>

      <div className="answers__container">
        <Typography.Title level={1} className="answers__text">
          И получаете ответы
        </Typography.Title>
      </div>
      <div className="squares-answers__container">
        <div className="squares-answers__square">
          <Typography.Title level={5} className="squares-answers__text">
            Как должен выглядеть ваш сайт
          </Typography.Title>
          <img src={siteview} className="squares-answers__img1" />
        </div>
        <div className="squares-answers__square">
          <Typography.Title level={5} className="squares-answers__text">
            Как выгодно показать клиентам свои услуги
          </Typography.Title>
          <img src={services} className="squares-answers__img" />
        </div>
        <div className="squares-answers__square">
          <Typography.Title level={5} className="squares-answers__text">
            На какие страницы и как вести рекламу
          </Typography.Title>
          <img src={ad} className="squares-answers__img" />
        </div>
        <div className="squares-answers__square">
          <Typography.Title level={5} className="squares-answers__text">
            Как сделать сайт актуальным на ближайшие пару лет
          </Typography.Title>
          <img src={actual} className="squares-answers__img" />
        </div>
      </div>

      <div className="stages__container">
        <Typography.Title className="stages__text">
          Этапы работы
        </Typography.Title>
        <div className="stages__tab">
          <div className="stages__stagesTexts">
            <div className="stages__stage">
              <Typography.Text>UX design</Typography.Text>
            </div>
            <div className="stages__stage">
              <Typography.Text>React</Typography.Text>
            </div>
            <div className="stages__stage">
              <Typography.Text>Брендинг</Typography.Text>
            </div>
            <div className="stages__stage">
              <Typography.Text>Стратегия</Typography.Text>
            </div>
            <div className="stages__stage">
              <Typography.Text>Таргет</Typography.Text>
            </div>
            <div className="stages__stage">
              <Typography.Text>Воронка продаж</Typography.Text>
            </div>
            <div className="stages__stage">
              <Typography.Text>Анализ конкурентов</Typography.Text>
            </div>
          </div>

          <div className="stages__business">
            <div className="stages__business__card">
              <Typography.Text strong>Изучаем ваш бизнес</Typography.Text>
              <br />
              <Typography.Text>
                Результатом этого будет является стратегия позиционирования на
                рынке, мы будем понимать наши цели и ограничения.
              </Typography.Text>
            </div>
          </div>
          <div className="stages__code">
            <div className="stages__code__card">
              <Typography.Text strong className="stages__code__card__text">
                Работаем с макетами, пишем код
              </Typography.Text>
              <br />
              <Typography.Text className="stages__code__card__text">
                Мы получаем сайт, который является инструментом продаж и он
                готов обрабатывать входящих клиентов.
              </Typography.Text>
            </div>
          </div>
          <div className="stages__clients">
            <div className="stages__clients__card">
              <Typography.Text strong>
                Улучшаем конверсии, изучаем клиентов
              </Typography.Text>
              <br />
              <Typography.Text>
                Проверяем на практике наши идеи, по возможности дорабатываем
                узкие моменты в воронке продаж.
              </Typography.Text>
            </div>
          </div>
        </div>
      </div>

      <div className="examples__container">
        <Typography.Title className="examples__text">
          Примеры работ
        </Typography.Title>
        <div className="examples__cards__container">
          <div className="examples__cards__card">
            <div className="examples__cards__card__text">
              <Typography.Text className="examples__text-black">
                Студия дизайна интерьера
              </Typography.Text>
            </div>
          </div>
          <div className="examples__cards__card">
            <div className="examples__cards__card__text">
              <Typography.Text className="examples__text-black">
                Курьерская служба для юр. лиц
              </Typography.Text>
            </div>
          </div>
          <div className="examples__cards__card">
            <div className="examples__cards__card__text">
              <Typography.Text className="examples__text-black">
                Студия дизайна и архитектуры
              </Typography.Text>
            </div>
          </div>
        </div>
      </div>

      <div className="discuss__container">
        <Row justify="space-between" align="middle">
          <Col>
            <Typography.Title level={1} className="discuss__title">
              Обсудить ваш проект
            </Typography.Title>
          </Col>
          <Col>
            <Button type="primary" onClick={onSendMessageButtonClick}>
              Отправить заявку
            </Button>
          </Col>
        </Row>
      </div>
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
