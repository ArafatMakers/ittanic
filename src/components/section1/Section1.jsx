import React from "react";
import { Carousel } from "react-bootstrap";
const Section1 = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          style={{ height: "700px" }}
          className="d-block w-100"
          src="https://mobimg.b-cdn.net/v3/fetch/10/10c396ccbafbe2a5f498d87e9eacfffe.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Стратегическая игра DOTA2</h3>
          <p>
            Dota 2 — многопользовательская командная компьютерная игра в жанре
            MOBA, разработанная и изданная корпорацией Valve. Игра является
            продолжением DotA — пользовательской карты-модификации для игры
            Warcraft III: Reign of Chaos и дополнения к ней Warcraft III: The
            Frozen Throne.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "700px" }}
          className="d-block w-100"
          src="https://img1.akspic.ru/crops/9/1/9/5/6/165919/165919-amegakure_from_naruto_shippuden_in_a_cyberpunk_world-1920x1080.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Онлайн Шутер VOLORANT</h3>
          <p>
            {" "}
            многопользовательская компьютерная игра, разработанная и издаваемая
            компанией Riot Games. Valorant является первой игрой Riot Games в
            жанре шутер от первого лица. Изначально игра была анонсирована под
            названием Project A в октябре 2019 года, анонсирована уже под
            текущим названием 1 марта 2020 года и выпущена для игроков 2 июня
            2020 года.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "700px" }}
          className="d-block w-100"
          src="https://img3.akspic.ru/crops/4/1/7/7/6/167714/167714-chuvstvo_cheloveka_pauka-1920x1080.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Жанр открытый мир Cyberpunk 2077 </h3>
          <p>
            компьютерная игра в жанре action-adventure в открытом мире,
            разработанная и изданная польской студией CD Projekt[14]. Действие
            игры происходит в 2077 году в Найт-Сити, вымышленном
            североамериканском городе из вселенной Cyberpunk.Перейти к разделу
            «#Сюжет» Игрок управляет настраиваемым протагонистом по имени Ви,
            который работает наёмником и владеет навыками взлома и боя.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Section1;
