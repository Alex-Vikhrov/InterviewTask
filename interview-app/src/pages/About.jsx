import React from "react";

const About = () => {
  return (
    <section className="about">
      <h1>Interview Task !</h1>
      <article className="about_task">
        <h3>Требуется создать приложение с двумя компонентами:</h3>
        <ol>
          <li>
            С вертикальным графиком(обычная кривая), и асинхронной загрузкой
            данных по мере прокрутки графика.
          </li>
          <li>С таблицей данных, и асинхронной загрузкой по мере прокрутки.</li>
        </ol>
        <h3>Стек:</h3>
        <ul>
          <li>TypeScript</li>
          <li>React+Redux</li>
          <li>Webpack</li>
          <li>Компоненты графиков/таблиц на свое усмотрение.</li>
        </ul>
        <h3>Что будет оцениваться:</h3>
        <ul>
          <li> качество кода</li>
          <li>подход к архитектуре</li>
        </ul>
        Тестовые данные можно получать из любого источника,например:{" "}
        <a className="api" href="https://github.com/public-apis/public-apis#test-data" target={"_blank"}>
          API
        </a>. Выполненное задание залить Github.
        Тестовое не ограничено по времени, но при отправке результатов
        необходимо указать затраченное количество часов. Успехов.
      </article>
      <aside className="about_task">
        Если какие-либо требования не предъявлены - реализуйте на свое
        усмотрение.
      </aside>
    </section>
  );
};

export default About;
