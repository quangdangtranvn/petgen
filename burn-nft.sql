-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: sql312.byetcluster.com
-- Thời gian đã tạo: Th8 02, 2025 lúc 05:54 PM
-- Phiên bản máy phục vụ: 11.4.7-MariaDB
-- Phiên bản PHP: 7.2.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `if0_39464941_petgen`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nft`
--

CREATE TABLE `nft` (
  `token_id` int(11) NOT NULL,
  `owner_address` varchar(100) DEFAULT NULL,
  `metadata_url` text DEFAULT NULL,
  `traits` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ;

--
-- Đang đổ dữ liệu cho bảng `nft`
--

INSERT INTO `nft` (`token_id`, `owner_address`, `metadata_url`, `traits`, `status`, `updated_at`) VALUES
(104, '0x45B286e1c19f147eDF33A3F3b83C9F8E6a706638', 'https://wallet.kesug.com/assets/2.json', '{\"type\":\"dragon\",\"rarity\":\"legendary\",\"element\":\"fire\",\"power\":1}', 'burned', '2025-08-02 21:51:50');

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `nft`
--
ALTER TABLE `nft`
  MODIFY `token_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
