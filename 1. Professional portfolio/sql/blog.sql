-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Июн 04 2023 г., 21:04
-- Версия сервера: 10.4.28-MariaDB
-- Версия PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `portfolio`
--

-- --------------------------------------------------------

--
-- Структура таблицы `blog`
--

CREATE TABLE `blog` (
  `id` int(4) NOT NULL,
  `short_text` varchar(168) NOT NULL,
  `full_text` text NOT NULL,
  `add_date` date NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `blog`
--

INSERT INTO `blog` (`id`, `short_text`, `full_text`, `add_date`, `image`) VALUES
(1, 'This is my first IT post that I\'ve ever written in my entire life! What an incredible pleasure it is to do what you like and you love. Computers have always played', 'This is my first IT post that I\'ve ever written in my entire life!\r\n\r\nWhat an incredible pleasure it is to do what you like and you love. Computers have always played a significant part in my life and I\'ve always felt this connection and a sort of computer intuition inside of me!', '2023-05-11', 'img/2.jpg'),
(2, 'Today, I\'ve decided to edit my classes and id-s names so that to make my code more structural. I am on the way of learning how to write a clean code so that to be under', 'Today, I\'ve decided to edit my classes and id-s names so that to make my code more structural. I am on the way of learning how to write a clean code so that to be understandable and to understand others. I\'ve better placed the side elements on the page. And I\'ve checked my page with ZOOM+/- so that my website will be O.K.', '2023-05-12', 'img/1.jpg'),
(3, 'Happy and fruitful Saturday, because I\'ve created several sliders for my website, linked buttons and texts together, made up some new designs in my head to realize them', 'Happy and fruitful Saturday, because I\'ve created several sliders for my website, linked buttons and texts together, made up some new designs in my head to realize them in the future. These days, even small successes make me happy because each of them is a big achievement on the way to be able to create beautiful and functional websites.', '2023-05-13', 'img/pic3.jpg');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `blog`
--
ALTER TABLE `blog`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
