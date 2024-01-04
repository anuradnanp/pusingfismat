/* Copyright (C) 2022 Alma Nuradnan Pramudita (email: gocodealpha@gmail.com)

This file is part of MathSD.

MathSD is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

MathSD is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with MathSD. If not, see <https://www.gnu.org/licenses/>. */

document.getElementById("wideNav").innerText = "";
document.getElementById("wideNav").insertAdjacentHTML("afterbegin",

'<div class="w3-bar w3-black w3-card">'
+ '<a class="w3-bar-item w3-button w3-padding w3-hide-small-medium w3-hide-medium w3-hide-medium-large w3-hide-large w3-right" href="javascript:void(0)" onclick="navNarrow()" title="Toggle Navigation Menu">&#8801;|&#8801;</a>'
+ '<a href="00-pengantar.html" class="w3-bar-item w3-button w3-padding">MathSD</a>'

+ '<div class="w3-dropdown-hover w3-hide-small">'
+ '<button class="w3-padding w3-button">Level 1 &#187;</button>'
+ '<div class="w3-dropdown-content w3-bar-block w3-card-4">'
+ '<a href="01-letak-bilangan.html" class="w3-bar-item w3-button w3-padding w3-hide-small">Posisi Bilangan</a>'
+ '<a href="02-penjumlahan-pengurangan.html" class="w3-bar-item w3-button w3-padding w3-hide-small">Penjumlahan dan Pengurangan</a>'
+ '<a href="03-perkalian-pembagian.html" class="w3-bar-item w3-button w3-padding w3-hide-small">Perkalian dan Pembagian</a>'
+ '<a href="04-masalah-uang.html" class="w3-bar-item w3-button w3-padding w3-hide-small">Masalah yang Melibatkan Uang</a>'
+ '<a href="05-pengukuran.html" class="w3-bar-item w3-button w3-padding w3-hide-small">Pengukuran I</a>'
+ '<a href="06-hubungan-antarsatuan.html" class="w3-bar-item w3-button w3-padding w3-hide-small">Hubungan Antarsatuan</a>'
+ '<a href="07-pecahan.html" class="w3-bar-item w3-button w3-padding w3-hide-small">Pecahan I</a>'
+ '<a href="08-bangun-datar-sederhana.html" class="w3-bar-item w3-button w3-padding w3-hide-small">Bangun Datar Sederhana</a>'
+ '<a href="09-sudut.html" class="w3-bar-item w3-button w3-padding w3-hide-small">Sudut</a>'
+ '<a href="10-persegi-persegi-panjang.html" class="w3-bar-item w3-button w3-padding w3-hide-small not-ready">Keliling dan Luas Persegi dan Persegi Panjang</a>'
+ '</div>'
+ '</div>'

+ '<div class="w3-dropdown-hover w3-hide-small">'
+ '<button class="w3-padding w3-button">Level 2 &#187;</button>'
+ '<div class="w3-dropdown-content w3-bar-block w3-card-4">'
+ '<a href="11-operasi-hitung.html" class="w3-bar-item w3-button w3-padding w3-hide-small">Operasi Hitung I</a>'
+ '<a href="12-kelipatan-faktor.html" class="w3-bar-item w3-button w3-padding w3-hide-small">Kelipatan dan Faktor Bilangan</a>'
+ '<a href="13-pengukuran.html" class="w3-bar-item w3-button w3-padding w3-hide-small not-ready">Pengukuran II</a>'
+ '<a href="14-segitiga-jajargenjang.html" class="w3-bar-item w3-button w3-padding w3-hide-small not-ready">Segitiga dan Jajargenjang</a>'
+ '<a href="15-bilangan-bulat.html" class="w3-bar-item w3-button w3-padding w3-hide-small not-ready">Bilangan Bulat I</a>'
+ '<a href="16-pecahan.html" class="w3-bar-item w3-button w3-padding w3-hide-small not-ready">Pecahan II</a>'
+ '<a href="17-bilangan-romawi.html" class="w3-bar-item w3-button w3-padding w3-hide-small not-ready">Bilangan Romawi</a>'
+ '<a href="18-bagun-datar-ruang.html" class="w3-bar-item w3-button w3-padding w3-hide-small not-ready">Bangun Datar dan Bangun Ruang I</a>'
+ '</div>'
+ '</div>'

+ '<div class="w3-dropdown-hover w3-hide-small">'
+ '<button class="w3-padding w3-button">Level 3 &#187;</button>'
+ '<div class="w3-dropdown-content w3-bar-block w3-card-4">'
+ '<a href="19-operasi-hitung.html" class="w3-bar-item w3-button w3-padding w3-hide-small">Operasi Hitung II</a>'
+ '<a href="20-pengukuran.html" class="w3-bar-item w3-button w3-padding w3-hide-small">Pengukuran III</a>'
+ '<a href="21-luas-bangun-datar.html" class="w3-bar-item w3-button w3-padding w3-hide-small not-ready">Luas Bangun Datar Sederhana</a>'
+ '<a href="22-volume-kubus-balok.html" class="w3-bar-item w3-button w3-padding w3-hide-small not-ready">Volume Kubus dan Balok</a>'
+ '<a href="23-pecahan.html" class="w3-bar-item w3-button w3-padding w3-hide-small not-ready">Pecahan III</a>'
+ '<a href="24-sifat-hubungan-bangun.html" class="w3-bar-item w3-button w3-padding w3-hide-small not-ready">Sifat Bangun dan Hubungan Antarbangun</a>'
+ '</div>'
+ '</div>'

+ '<div class="w3-dropdown-hover w3-hide-small">'
+ '<button class="w3-padding w3-button">Level 4 &#187;</button>'
+ '<div class="w3-dropdown-content w3-bar-block w3-card-4">'
+ '<a href="25-bilangan-bulat.html" class="w3-bar-item w3-button w3-padding w3-hide-small">Bilangan Bulat II</a>'
+ '<a href="26-volume-debit.html" class="w3-bar-item w3-button w3-padding w3-hide-small not-ready">Volume dan Debit</a>'
+ '<a href="27-bangun-datar-ruang.html" class="w3-bar-item w3-button w3-padding w3-hide-small not-ready">Bangun Datar dan Bangun Ruang II</a>'
+ '<a href="28-pengumpulan-penyajian-data.html" class="w3-bar-item w3-button w3-padding w3-hide-small not-ready">Pengumpulan dan Penyajian Data</a>'
+ '<a href="29-pecahan.html" class="w3-bar-item w3-button w3-padding w3-hide-small not-ready">Pecahan IV</a>'
+ '<a href="30-sistem-koordinat.html" class="w3-bar-item w3-button w3-padding w3-hide-small not-ready">Sistem Koordinat</a>'
+ '<a href="31-pengelolaan-data.html" class="w3-bar-item w3-button w3-padding w3-hide-small not-ready">Pengelolaan Data</a>'
+ '</div>'
+ '</div>'

+ '<a href="dokumentasi.html" class="w3-bar-item w3-button w3-padding w3-hide-small">&#128193; Dokumentasi</a>'
+ '</div>'
);

document.getElementById("navDemo").innerText = "";
document.getElementById("navDemo").insertAdjacentHTML("afterbegin",

'<a class="w3-bar-item w3-button w3-padding nav-sep">Level 1</a>'

+ '<a href="01-letak-bilangan.html" class="w3-bar-item w3-button w3-padding">Posisi Bilangan</a>'
+ '<a href="02-penjumlahan-pengurangan.html" class="w3-bar-item w3-button w3-padding">Penjumlahan dan Pengurangan</a>'
+ '<a href="03-perkalian-pembagian.html" class="w3-bar-item w3-button w3-padding">Perkalian dan Pembagian</a>'
+ '<a href="04-masalah-uang.html" class="w3-bar-item w3-button w3-padding">Masalah yang Melibatkan Uang</a>'
+ '<a href="05-pengukuran.html" class="w3-bar-item w3-button w3-padding">Pengukuran I</a>'
+ '<a href="06-hubungan-antarsatuan.html" class="w3-bar-item w3-button w3-padding">Hubungan Antarsatuan</a>'
+ '<a href="07-pecahan.html" class="w3-bar-item w3-button w3-padding">Pecahan I</a>'
+ '<a href="08-bangun-datar-sederhana.html" class="w3-bar-item w3-button w3-padding">Bangun Datar Sederhana</a>'
+ '<a href="09-sudut.html" class="w3-bar-item w3-button w3-padding">Sudut</a>'
+ '<a href="10-persegi-persegi-panjang.html" class="w3-bar-item w3-button w3-padding not-ready">Keliling dan Luas Persegi dan Persegi Panjang</a>'

+ '<a class="w3-bar-item w3-button w3-padding nav-sep">Level 2</a>'

+ '<a href="11-operasi-hitung.html" class="w3-bar-item w3-button w3-padding">Operasi Hitung I</a>'
+ '<a href="12-kelipatan-faktor.html" class="w3-bar-item w3-button w3-padding">Kelipatan dan Faktor Bilangan</a>'
+ '<a href="13-pengukuran.html" class="w3-bar-item w3-button w3-padding not-ready">Pengukuran II</a>'
+ '<a href="14-segitiga-jajargenjang.html" class="w3-bar-item w3-button w3-padding not-ready">Segitiga dan Jajargenjang</a>'
+ '<a href="15-bilangan-bulat.html" class="w3-bar-item w3-button w3-padding not-ready">Bilangan Bulat I</a>'
+ '<a href="16-pecahan.html" class="w3-bar-item w3-button w3-padding not-ready">Pecahan II</a>'
+ '<a href="17-bilangan-romawi.html" class="w3-bar-item w3-button w3-padding not-ready">Bilangan Romawi</a>'
+ '<a href="18-bagun-datar-ruang.html" class="w3-bar-item w3-button w3-padding not-ready">Bangun Datar dan Bangun Ruang I</a>'

+ '<a class="w3-bar-item w3-button w3-padding nav-sep">Level 3</a>'

+ '<a href="19-operasi-hitung.html" class="w3-bar-item w3-button w3-padding">Operasi Hitung II</a>'
+ '<a href="20-pengukuran.html" class="w3-bar-item w3-button w3-padding">Pengukuran III</a>'
+ '<a href="21-luas-bangun-datar.html" class="w3-bar-item w3-button w3-padding not-ready">Luas Bangun Datar Sederhana</a>'
+ '<a href="22-volume-kubus-balok.html" class="w3-bar-item w3-button w3-padding not-ready">Volume Kubus dan Balok</a>'
+ '<a href="23-pecahan.html" class="w3-bar-item w3-button w3-padding not-ready">Pecahan III</a>'
+ '<a href="24-sifat-hubungan-bangun.html" class="w3-bar-item w3-button w3-padding not-ready">Sifat Bangun dan Hubungan Antarbangun</a>'

+ '<a class="w3-bar-item w3-button w3-padding nav-sep">Level 4</a>'

+ '<a href="25-bilangan-bulat.html" class="w3-bar-item w3-button w3-padding">Bilangan Bulat II</a>'
+ '<a href="26-volume-debit.html" class="w3-bar-item w3-button w3-padding not-ready">Volume dan Debit</a>'
+ '<a href="27-bangun-datar-ruang.html" class="w3-bar-item w3-button w3-padding not-ready">Bangun Datar dan Bangun Ruang II</a>'
+ '<a href="28-pengumpulan-penyajian-data.html" class="w3-bar-item w3-button w3-padding not-ready">Pengumpulan dan Penyajian Data</a>'
+ '<a href="29-pecahan.html" class="w3-bar-item w3-button w3-padding not-ready">Pecahan IV</a>'
+ '<a href="30-sistem-koordinat.html" class="w3-bar-item w3-button w3-padding not-ready">Sistem Koordinat</a>'
+ '<a href="31-pengelolaan-data.html" class="w3-bar-item w3-button w3-padding not-ready">Pengelolaan Data</a>'

+ '<a href="dokumentasi.html" class="w3-bar-item w3-button w3-padding" style="text-align: center">&#128193; Dokumentasi</a>'
);

// Used to toggle the menu on small screens when clicking on the menu button
function navNarrow() {
	var x = document.getElementById("navDemo");
	if (x.className.indexOf("w3-show") == -1) {x.className += " w3-show";}
	else {x.className = x.className.replace(" w3-show", "");}
}
