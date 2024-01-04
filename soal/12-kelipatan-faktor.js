/* Copyright (C) 2022 Alma Nuradnan Pramudita (email: gocodealpha@gmail.com)

This file is part of MathSD.

MathSD is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

MathSD is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with MathSD. If not, see <https://www.gnu.org/licenses/>. */

const questions = [

// 1
	{
		question: '<p>Kelipatan 3 adalah &hellip;</p>',
		answers:
			[
			{ text: '3, 6, 9, 12, 15, &hellip;', correct: true },
			{ text: '3, 4, 5, 6, 7, &hellip;', correct: false },
			{ text: '1, 2, 3, 4, 5, &hellip;', correct: false },
			{ text: '3, 5, 7, 9, 11, &hellip;', correct: false }
			],
		bahas: 'b1'
	},

// 2
	{
		question: '<p>Kelipatan 4 yang lebih dari 20 dan kurang dari 40 adalah &hellip;</p>',
		answers:
			[
			{ text: '24, 28, 32, 36', correct: true },
			{ text: '20, 24, 28, 32, 36, 40', correct: false },
			{ text: '24, 28, 32, 36, 40', correct: false },
			{ text: '20, 24, 28, 32, 36', correct: false }
			],
		bahas: 'b2'
	},

// 3
	{
		question: '<p>Kelipatan persekutuan dari 6 dan 8 adalah &hellip;</p>',
		answers:
			[
			{ text: '24, 48, 72, &hellip;', correct: true },
			{ text: '1, 12, 24, 36, 48, &hellip;', correct: false },
			{ text: '12, 24, 36, 48, &hellip;', correct: false },
			{ text: '24, 36, 48, &hellip;', correct: false }
			],
		bahas: 'b3'
	},

// 4
	{
		question: '<p>Faktor dari 18 adalah &hellip;</p>',
		answers:
			[
			{ text: '1, 2, 3, 6, 9, 18', correct: true },
			{ text: '1, 2, 3, 6, 18', correct: false },
			{ text: '2, 3, 6, 9', correct: false },
			{ text: '2, 3', correct: false }
			],
		bahas: 'b4'
	},

// 5
	{
		question: '<p>Faktor persekutuan dari 20 dan 24 adalah &hellip;</p>',
		answers:
			[
			{ text: '1, 2, 4', correct: true },
			{ text: '1, 2, 3, 4, 5, 6', correct: false },
			{ text: '2, 4', correct: false },
			{ text: '2', correct: false }
			],
		bahas: 'b5'
	},

// 6
	{
		question: '<p>Faktor persekutuan dari 32 dan 36 adalah &hellip;</p>',
		answers:
			[
			{ text: '1, 2, 4', correct: true },
			{ text: '1, 2, 3, 4, 6', correct: false },
			{ text: '1, 2, 3, 4', correct: false },
			{ text: '2, 4', correct: false }
			],
		bahas: 'b6'
	},

// 7
	{
		question: '<p>Kelipatan 3 antara 20 dan 40 yang habis dibagi 4 adalah &hellip;</p>',
		answers:
			[
			{ text: '24, 36', correct: true },
			{ text: '12, 24, 36', correct: false },
			{ text: '36', correct: false },
			{ text: '40', correct: false }
			],
		bahas: 'b7'
	},

// 8
	{
		question: '<p>Yang bukan kelipatan 6 adalah &hellip;</p>',
		answers:
			[
			{ text: '44', correct: true },
			{ text: '24', correct: false },
			{ text: '30', correct: false },
			{ text: '60', correct: false }
			],
		bahas: 'b8'
	},

// 9
	{
		question: 'Kelipatan 8 antara 40 dan 60 adalah &hellip;',
		answers:
			[
			{ text: '48,56', correct: true },
			{ text: '40, 48, 56', correct: false },
			{ text: '42, 50, 58', correct: false },
			{ text: '40, 48, 56', correct: false }
			],
		bahas: 'b9'
	},

// 10
	{
		question: '<p>Faktor dari 51 adalah &hellip;</p>',
		answers:
			[
			{ text: '1, 3, 17, 51', correct: true },
			{ text: '1, 3, 21, 51', correct: false },
			{ text: '1, 3, 5, 17, 51', correct: false },
			{ text: '1, 3, 5, 15, 51', correct: false }
			],
		bahas: 'b10'
	},

// 11
	{
		question: '<p>KPK dari 3 dan 5 adalah &hellip;</p>',
		answers:
			[
			{ text: '15', correct: true },
			{ text: '3', correct: false },
			{ text: '5', correct: false },
			{ text: '30', correct: false }
			],
		bahas: 'b11'
	},

// 12
	{
		question: '<p>FPB dari 81 dan 72 adalah &hellip;</p>',
		answers:
			[
			{ text: '9', correct: true },
			{ text: '8', correct: false },
			{ text: '3', correct: false },
			{ text: '1', correct: false }
			],
		bahas: 'b12'
	},

// 13
	{
		question: '<p>FPB dari 24 dan 36 adalah &hellip;</p>',
		answers:
			[
			{ text: '12', correct: true },
			{ text: '6', correct: false },
			{ text: '24', correct: false },
			{ text: '36', correct: false }
			],
		bahas: 'b13'
	},

// 14
	{
		question: '<p>KPK dari 36 dan 40 adalah &hellip;</p>',
		answers:
			[
			{ text: '360', correct: true },
			{ text: '320', correct: false },
			{ text: '80', correct: false },
			{ text: '400', correct: false }
			],
		bahas: 'b14'
	},

// 15
	{
		question: '<p>FPB dari 72 dan 84 adalah &hellip;</p>',
		answers:
			[
			{ text: '12', correct: true },
			{ text: '6', correct: false },
			{ text: '24', correct: false },
			{ text: '36', correct: false }
			],
		bahas: 'b15'
	},

// 16
	{
		question: '<p>Kelipatan 9 yang kurang dari 50 adalah &hellip;</p>',
		answers:
			[
			{ text: '9, 18, 27, 36, 45', correct: true },
			{ text: '9, 18, 27, 36, 45, 63', correct: false },
			{ text: '9, 18, 27, 36, 50', correct: false },
			{ text: '50, 63, 72, 81, 90', correct: false }
			],
		bahas: 'b16'
	},

// 17
	{
		question: '<p>Kelipatan 14 adalah &hellip;</p>',
		answers:
			[
			{ text: '14, 28, 42, 56, 70, &hellip;', correct: true },
			{ text: '7, 14, 21, 28, 35, &hellip;', correct: false },
			{ text: '14, 15, 16, 17, 18, &hellip;', correct: false },
			{ text: '1, 2, 7, 14', correct: false }
			],
		bahas: 'b17'
	},

// 18
	{
		question: '<p>Kelipatan persekutuan dari 15 dan 18 adalah &hellip;</p>',
		answers:
			[
			{ text: '90, 180, 270, &hellip;', correct: true },
			{ text: '1, 3', correct: false },
			{ text: '1, 2, 3, 5, 6, 9, 18', correct: false },
			{ text: '60, 120, 180, &hellip;', correct: false }
			],
		bahas: 'b18'
	},

// 19
	{
		question: '<p>Kelipatan 7 yang habis dibagi 2 yaitu &hellip;</p>',
		answers:
			[
			{ text: '14, 28, 42, 56, &hellip;', correct: true },
			{ text: '7, 21, 35, 49, &hellip;', correct: false },
			{ text: '2, 7, 12, 17, &hellip;', correct: false },
			{ text: '2, 4, 6, 8, &hellip;', correct: false }
			],
		bahas: 'b19'
	},

// 20
	{
		question: '<p>KPK dari 28 dan 36 adalah &hellip;</p>',
		answers:
			[
			{ text: '252', correct: true },
			{ text: '4', correct: false },
			{ text: '1, 2, 4', correct: false },
			{ text: '126', correct: false }
			],
		bahas: 'b20'
	},

// 21
	{
		question: '<p>Faktor dari 30 yaitu &hellip;</p>',
		answers:
			[
			{ text: '1, 2, 3, 5, 6, 10, 15, 30', correct: true },
			{ text: '30, 60, 90, 120, &hellip;', correct: false },
			{ text: '1, 2, 3, 4, 8, 12, 30', correct: false },
			{ text: '1, 2, 3, 4, 6, 9, 18, 36', correct: false }
			],
		bahas: 'b21'
	},

// 22
	{
		question: '<p>Faktor dari 42 yaitu &hellip;</p>',
		answers:
			[
			{ text: '1, 2, 3, 6, 7, 14, 21, 42', correct: true },
			{ text: '42, 84, 126, 168, &hellip;', correct: false },
			{ text: '1, 2, 4, 7, 8, 14, 28, 56', correct: false },
			{ text: '1, 2, 4, 5, 8, 10, 20, 40', correct: false }
			],
		bahas: 'b22'
	},

// 23
	{
		question: '<p>Faktor persekutuan dari 39 dan 48 yaitu &hellip;</p>',
		answers:
			[
			{ text: '1, 3', correct: true },
			{ text: '1, 2, 3, 4, 6, 8, 12, 13, 24, 39, 48', correct: false },
			{ text: '624', correct: false },
			{ text: '1, 2, 3, 4, 12', correct: false }
			],
		bahas: 'b23'
	},

// 24
	{
		question: '<p>FPB dari 60 dan 72 adalah &hellip;</p>',
		answers:
			[
			{ text: '12', correct: true },
			{ text: '1, 2, 3, 4, 6, 12', correct: false },
			{ text: '360', correct: false },
			{ text: '360, 720, 1080, &hellip;', correct: false }
			],
		bahas: 'b24'
	},

// 25
	{
		question: '<p>FPB dari 64 dan 32 adalah &hellip;</p>',
		answers:
			[
			{ text: '32', correct: true },
			{ text: '1, 2, 4, 8 16, 32', correct: false },
			{ text: '64', correct: false },
			{ text: '64, 128, 192, &hellip;', correct: false }
			],
		bahas: 'b25'
	},

// 26
	{
		question: '<p>Ayah dan Ibu Ema membeli 48 buah mangga dan 52 buah jambu.</p><p>Buah-buah tersebut akan dimasukkan merata ke sejumlah keranjang.</p><p>Jumlah paling banyak keranjang yang dapat diisi dan jumlah isinya adalah &hellip;</p>',
		answers:
			[
			{ text: '4 keranjang, masing-masing berisi 12 mangga dan 13 jambu', correct: true },
			{ text: '2 keranjang, masing-masing berisi 24 mangga dan 26 jambu', correct: false },
			{ text: '12 keranjang, masing-masing berisi 4 mangga dan 5 jambu', correct: false },
			{ text: '13 keranjang, masing-masing berisi 3 mangga dan 4 jambu', correct: false }
			],
		bahas: 'b26'
	},

// 27
	{
		question: '<p>Abid dan Marbun bermain peluit.</p><p>Abid meniup tiap 24 detik.</p><p>Marbun meniup tiap 18 detik.</p><p>Awalnya, mereka meniup bersamaan.</p><p>Mereka meniup bersamaan lagi tiap &hellip;</p>',
		answers:
			[
			{ text: '72 detik', correct: true },
			{ text: '36 detik', correct: false },
			{ text: '90 detik', correct: false },
			{ text: '48 detik', correct: false }
			],
		bahas: 'b27'
	},

// 28
	{
		question: '<p>Lampu berkedip di taman berwarna merah dan biru.</p><p>Lampu merah berkedip setiap 6 detik.</p><p>Lampu biru berkedip tiap 10 detik.</p><p>Awalnya kedua lampu berkedip bersamaan.</p><p>Kedua lampu akan berkedip bersamaan lagi tiap &hellip;</p>',
		answers:
			[
			{ text: '30 detik', correct: true },
			{ text: '60 detik', correct: false },
			{ text: '16 detik', correct: false },
			{ text: '4 detik', correct: false }
			],
		bahas: 'b28'
	},

// 29
	{
		question: '<p>Ema dan Menik mengikuti kursus renang.</p><p>Ema latihan tiap 5 hari.</p><p>Menik latihan tiap 7 hari.</p><p>Awalnya mereka berdua berlatih bersamaan.</p><p>Mereka berlatih bersamaan lagi tiap &hellip;</p>',
		answers:
			[
			{ text: '35 hari', correct: true },
			{ text: '2 hari', correct: false },
			{ text: '12 hari', correct: false },
			{ text: '6 hari', correct: false }
			],
		bahas: 'b29'
	},

// 30
	{
		question: '<p>Ibu Abid membuat 72 kue donat dan 84 kue bolu.</p><p>Kue-kue itu akan dikemas merata ke dalam toples.</p><p>Jumlah paling banyak toples yang dapat diisi dan jumlah isinya adalah &hellip;</p>',
		answers:
			[
			{ text: '12 toples, masing-masing berisi 6 donat dan 7 bolu', correct: true },
			{ text: '6 toples, masing-masing berisi 12 donat dan 14 bolu', correct: false },
			{ text: '9 toples, masing-masing berisi 8 donat dan 9 bolu', correct: false },
			{ text: '8 toples, masing-masing berisi 9 donat dan 10 bolu', correct: false }
			],
		bahas: 'b30'
	}
];
