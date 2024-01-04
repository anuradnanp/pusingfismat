/* Copyright (C) 2022 Alma Nuradnan Pramudita (email: gocodealpha@gmail.com)

This file is part of MathSD.

MathSD is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

MathSD is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with MathSD. If not, see <https://www.gnu.org/licenses/>. */

const questions = [

// 1
	{
		question: '<p style="text-align: center">6 + (&minus;1) = &hellip;</p>',
		answers:
			[
			{ text: '(&minus;1) + 6 = 5', correct: true },
			{ text: '1 + (&minus;6) = &minus;5', correct: false },
			{ text: '(&minus;1) + 6 = 7', correct: false },
			{ text: '1 + (&minus;6) = &minus;7', correct: false }
			],
		bahas: 'b1'
	},

// 2
	{
		question: '<p style="text-align: center">7 + (2 + 6) = (7 + 2) + 6 = &hellip;</p>',
		answers:
			[
			{ text: '9 + 6 = 15', correct: true },
			{ text: '9 + 6 = 13', correct: false },
			{ text: '7 + 6 = 15', correct: false },
			{ text: '7 + 6 = 13', correct: false }
			],
		bahas: 'b2'
	},

// 3
	{
		question: '<p>Sifat komutatif tidak berlaku pada &hellip;</p>',
		answers:
			[
			{ text: 'pengurangan dan pembagian', correct: true },
			{ text: 'pengurangan dan perkalian', correct: false },
			{ text: 'penjumlahan dan pembagian', correct: false },
			{ text: 'perkalian dan pembagian', correct: false }
			],
		bahas: 'b3'
	},

// 4
	{
		question: '<p style="text-align: center">&minus;2 &times; (5 &minus; 2) = &hellip;</p>',
		answers:
			[
			{ text: '&minus;6', correct: true },
			{ text: '6', correct: false },
			{ text: '&minus;12', correct: false },
			{ text: '&minus;8', correct: false }
			],
		bahas: 'b4'
	},

// 5
	{
		question: '<p>Nilai yang tepat untuk mengisi titik-titik berikut secara berurutan adalah &hellip;</p><p>$$\\begin{tightarray}[0.2em]{cl} & 5\\times 99\\\\ = & 5\\times (100-1)\\\\ = & (5\\times 100) - (5\\times\\dots) \\\\ = & \\dots\\end{tightarray}$$</p>',
		answers:
			[
			{ text: '1 dan 495', correct: true },
			{ text: '99 dan 495', correct: false },
			{ text: '1 dan 5', correct: false },
			{ text: '99 dan 5', correct: false }
			],
		bahas: 'b5'
	},

// 6
	{
		question: '<p>Nilai yang tepat untuk mengisi titik-titik berikut secara berurutan adalah &hellip;</p><p>$$\\begin{tightarray}[0.2em]{cl} & 4^3\\\\ = & \\dots\\times\\dots\\times\\dots\\\\ = & \\dots\\end{tightarray}$$</p>',
		answers:
			[
			{ text: '4, 4, 4, dan 64', correct: true },
			{ text: '4, 4, 4, dan 12', correct: false },
			{ text: '4, 3, 2, dan 24', correct: false },
			{ text: '4, 3, 2, dan 9', correct: false }
			],
		bahas: 'b6'
	},

// 7
	{
		question: '<p>Nilai yang tepat untuk mengisi titik-titik berikut secara berurutan adalah &hellip;</p><p>$$\\begin{tightarray}[0.2em]{cl} & (-2)^3\\\\ = & \\dots\\times\\dots\\times\\dots\\\\ = & \\dots\\end{tightarray}$$</p>',
		answers:
			[
			{ text: '&minus;2, &minus;2, &minus;2, dan &minus;8', correct: true },
			{ text: '&minus;2, &minus;2, &minus;2, dan &minus;6', correct: false },
			{ text: '&minus;2, &minus;3, &minus;4, dan &minus;24', correct: false },
			{ text: '&minus;2, &minus;3, &minus;4, dan &minus;9', correct: false }
			],
		bahas: 'b7'
	},

// 8
	{
		question: '<p>Bilangan kubik antara 20 dan 30 adalah &hellip;</p>',
		answers:
			[
			{ text: '27', correct: true },
			{ text: '25', correct: false },
			{ text: '24', correct: false },
			{ text: '21', correct: false }
			],
		bahas: 'b8'
	},

// 9
	{
		question: '<p>$$\\sqrt[3]{27}=\\dots $$</p>',
		answers:
			[
			{ text: '3', correct: true },
			{ text: '&minus;3', correct: false },
			{ text: '1', correct: false },
			{ text: '\\(\\displaystyle\\frac{1}{3}\\)', correct: false }
			],
		bahas: 'b9'
	},

// 10
	{
		question: '<p>$$\\sqrt[3]{8000}=\\dots $$</p>',
		answers:
			[
			{ text: '20', correct: true },
			{ text: '&minus;20', correct: false },
			{ text: '\\(\\displaystyle\\frac{8000}{3}\\)', correct: false },
			{ text: '24000', correct: false }
			],
		bahas: 'b10'
	},

// 11
	{
		question: '<p>$$2^3+4^3-1^3=\\dots $$</p>',
		answers:
			[
			{ text: '71', correct: true },
			{ text: '73', correct: false },
			{ text: '19', correct: false },
			{ text: '21', correct: false }
			],
		bahas: 'b11'
	},

// 12
	{
		question: '<p>FPB dari 15 dan 20 adalah &hellip;</p>',
		answers:
			[
			{ text: '5', correct: true },
			{ text: '60', correct: false },
			{ text: '1', correct: false },
			{ text: '35', correct: false }
			],
		bahas: 'b12'
	},

// 13
	{
		question: '<p>FPB dari 30, 35, dan 50 adalah &hellip;</p>',
		answers:
			[
			{ text: '5', correct: true },
			{ text: '1050', correct: false },
			{ text: '115', correct: false },
			{ text: '5 dan 15', correct: false }
			],
		bahas: 'b13'
	},

// 14
	{
		question: '<p>KPK dari 7 dan 8 adalah &hellip;</p>',
		answers:
			[
			{ text: '56', correct: true },
			{ text: '1', correct: false },
			{ text: '15', correct: false },
			{ text: '0', correct: false }
			],
		bahas: 'b14'
	},

// 15
	{
		question: '<p>KPK dari 15, 30, dan 45 adalah &hellip;</p>',
		answers:
			[
			{ text: '90', correct: true },
			{ text: '15', correct: false },
			{ text: '30', correct: false },
			{ text: '180', correct: false }
			],
		bahas: 'b15'
	},

// 16
	{
		question: '<p>Sifat-sifat pada operasi penjumlahan dan perkalian yaitu &hellip;</p>',
		answers:
			[
			{ text: 'komutatif, asosiatif, distributif', correct: true },
			{ text: 'korelatif, asosiatif, distributif', correct: false },
			{ text: 'komutatif, korelatif, distributif', correct: false },
			{ text: 'komutatif, asosiatif, korelatif', correct: false }
			],
		bahas: 'b16'
	},

// 17
	{
		question: '<p>Panjang rusuk sebuah kubus adalah 11 cm.</p><p>Volume kubus tersebut adalah &hellip;</p>',
		answers:
			[
			{ text: '1331 cm<sup>3</sup>', correct: true },
			{ text: '121 cm<sup>3</sup>', correct: false },
			{ text: '22 cm<sup>3</sup>', correct: false },
			{ text: '33 cm<sup>3</sup>', correct: false }
			],
		bahas: 'b17'
	},

// 18
	{
		question: '<p>Volume sebuah kubus 2197 cm<sup>3</sup>.</p><p>Panjang rusuk kubus tersebut adalah &hellip;</p>',
		answers:
			[
			{ text: '13 cm', correct: true },
			{ text: '17 cm', correct: false },
			{ text: '19 cm', correct: false },
			{ text: '21 cm', correct: false }
			],
		bahas: 'b18'
	},

// 19
	{
		question: '<p>Bu Ira punya 20 mangga, 25 jeruk, dan 35 rambutan.</p><p>Semua buah tadi akan dimasukkan ke keranjang secara merata.</p><p>Tiap keranjang dapat berisi paling sedikit &hellip;</p>',
		answers:
			[
			{ text: '4 mangga, 5 jeruk, dan 7 rambutan', correct: true },
			{ text: '5 mangga, 5 jeruk, dan 5 rambutan', correct: false },
			{ text: '7 mangga, 5 jeruk, dan 4 rambutan', correct: false },
			{ text: '20 mangga, 20 jeruk, dan 20 rambutan', correct: false }
			],
		bahas: 'b19'
	},

// 20
	{
		question: '<p>Ahmad lebih tua dari Dodi.</p><p>Usia Dodi sekarang 12 tahun.</p><p>FPB usia mereka adalah 4.</p><p>KPK usia mereka adalah 60.</p><p>Usia Ahmad adalah &hellip;</p>',
		answers:
			[
			{ text: '20 tahun', correct: true },
			{ text: '30 tahun', correct: false },
			{ text: '10 tahun', correct: false },
			{ text: '15 tahun', correct: false }
			],
		bahas: 'b20'
	},

// 21
	{
		question: '<p>Bu Siska punya 28 kue keju dan 40 kue donat.</p><p>Semua kue tadi akan dimasukkan ke dalam kotak secara merata.</p><p>Tiap kotak dapat berisi paling sedikit &hellip;</p>',
		answers:
			[
			{ text: '7 kue keju dan 10 kue donat', correct: true },
			{ text: '28 kue keju dan 28 kue donat', correct: false },
			{ text: '12 kue keju dan 12 kue donat', correct: false },
			{ text: '4 kue keju dan 4 kue donat', correct: false }
			],
		bahas: 'b21'
	},

// 22
	{
		question: '<p>Seorang pedagang punya 42 permen cokelat, 48 permen jeruk, dan 60 permen mangga.</p><p>Semua permen tadi akan disimpan ke dalam kotak secara merata.</p><p>Tiap kotak dapat berisi paling sedikit &hellip;</p>',
		answers:
			[
			{ text: '7 permen cokelat,<br>8 permen jeruk, dan<br>10 permen mangga', correct: true },
			{ text: '6 permen cokelat,<br>6 permen jeruk, dan<br>6 permen mangga', correct: false },
			{ text: '42 permen cokelat,<br>42 permen jeruk, dan<br>42 permen mangga', correct: false },
			{ text: '9 permen cokelat,<br>9 permen jeruk, dan<br>9 permen mangga', correct: false }
			],
		bahas: 'b22'
	},

// 23
	{
		question: '<p>Frida berenang 10 hari sekali.</p><p>Wulan 15 hari sekali.</p><p>Tanggal 5 Maret 2023, mereka berenang bersama.</p><p>Mereka berenang bersama lagi untuk kedua dan ketiga kalinya pada &hellip;</p>',
		answers:
			[
			{ text: '4 April 2023 dan 4 Mei 2023', correct: true },
			{ text: '5 April 2023 dan 5 Mei 2023', correct: false },
			{ text: '4 April 2023 dan 3 Mei 2023', correct: false },
			{ text: '5 April 2023 dan 4 Mei 2023', correct: false }
			],
		bahas: 'b23'
	},

// 24
	{
		question: '<p>Pak Made ronda 6 hari sekali.</p>Pak Janu ronda 8 hari sekali.</p><p>Pak Tono ronda 12 hari sekali.</p><p>Tanggal 10 Juni 2023, mereka ronda bersama.</p><p>Mereka ronda bersama lagi untuk kedua dan ketiga kalinya pada &hellip;</p>',
		answers:
			[
			{ text: '4 Juli 2023 dan 28 Juli 2023', correct: true },
			{ text: '3 Juli 2023 dan 27 Juli 2023', correct: false },
			{ text: '22 Juni 2023 dan 4 Juli 2023', correct: false },
			{ text: '22 Juni 2023 dan 3 Juli 2023', correct: false }
			],
		bahas: 'b24'
	},

// 25
	{
		question: '<p>Sebuah bak air berbentuk kubus.</p><p>Volume bak tersebut 2744000 dm<sup>3</sup>.</p><p>Panjang rusuk bak tersebut adalah &hellip;</p>',
		answers:
			[
			{ text: '140 dm', correct: true },
			{ text: '14 dm', correct: false },
			{ text: '180 dm', correct: false },
			{ text: '18 dm', correct: false }
			],
		bahas: 'b25'
	}
];
