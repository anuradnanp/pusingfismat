/* Copyright (C) 2022 Alma Nuradnan Pramudita (email: gocodealpha@gmail.com)

This file is part of MathSD.

MathSD is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

MathSD is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with MathSD. If not, see <https://www.gnu.org/licenses/>. */

const questions = [

// 1
	{
		question: '<p>Pola garis bilangan berikut akan tertib jika &#10063; berisi bilangan &hellip;</p><p style="text-align: center"><img src="aset/01-letak-bilangan/01-01.svg" style="width: 72%"></p>',
		answers:
			[
			{ text: '17', correct: true },
			{ text: '16', correct: false },
			{ text: '18', correct: false },
			{ text: '15', correct: false }
			],
		bahas: 'b1'
	},

// 2
	{
		question: '<p>Agar pola berikut tertib, kotak kosong harus bernilai &hellip;</p><p style="text-align: center"><img src="aset/01-letak-bilangan/02-01.svg" style="width: 30%"></p>',
		answers:
			[
			{ text: '17', correct: true },
			{ text: '16', correct: false },
			{ text: '18', correct: false },
			{ text: '15', correct: false }
			],
		bahas: 'b2'
	},

// 3
	{
		question: '<p>Pola garis bilangan berikut akan tertib jika &#10063; berisi bilangan &hellip;</p><p style="text-align: center"><img src="aset/01-letak-bilangan/03-01.svg" style="width: 72%"></p>',
		answers:
			[
			{ text: '43', correct: true },
			{ text: '42', correct: false },
			{ text: '44', correct: false },
			{ text: '45', correct: false }
			],
		bahas: 'b3'
	},

// 4
	{
		question: '<p>Agar pola berikut tertib, kotak kosong harus bernilai &hellip;</p><p style="text-align: center"><img src="aset/01-letak-bilangan/04-01.svg" style="width: 45%"px></p>',
		answers:
			[
			{ text: '13', correct: true },
			{ text: '12', correct: false },
			{ text: '14', correct: false },
			{ text: '15', correct: false }
			],
		bahas: 'b4'
	},

// 5
	{
		question: '<p>Pola garis bilangan berikut akan tertib jika &#10063; berisi bilangan &hellip;</p><p style="text-align: center"><img src="aset/01-letak-bilangan/05-01.svg" style="width: 100%"></p>',
		answers:
			[
			{ text: '72', correct: true },
			{ text: '70', correct: false },
			{ text: '74', correct: false },
			{ text: '76', correct: false }
			],
		bahas: 'b5'
	},

// 6
	{
		question: '<p>Pola berikut akan tertib jika &#10063; berisi bilangan &hellip;</p><p style="text-align: center">$$\\begin{equation*}3,5,7,9,11,\\dotsc ,\\dotsc ,\\begin{tightarray}[0.2em]{|c|}\\hline\\dots\\\\\\hline\\end{tightarray} ,\\dotsc \\end{equation*}$$</p>',
		answers:
			[
			{ text: '17', correct: true },
			{ text: '16', correct: false },
			{ text: '15', correct: false },
			{ text: '18', correct: false }
			],
		bahas: 'b6'
	},

// 7
	{
		question: '<p>Bilangan di antara 62 dan 64 yaitu &hellip;</p>',
		answers:
			[
			{ text: '63', correct: true },
			{ text: '62', correct: false },
			{ text: '64', correct: false },
			{ text: '61', correct: false }
			],
		bahas: 'b7'
	},

// 8
	{
		question: '<p>Pola garis bilangan berikut akan tertib jika &#10063; berisi bilangan &hellip;</p><p style="text-align: center"><img src="aset/01-letak-bilangan/08-01.svg" style="width: 79%"></p>',
		answers:
			[
			{ text: '27', correct: true },
			{ text: '25', correct: false },
			{ text: '23', correct: false },
			{ text: '29', correct: false }
			],
		bahas: 'b8'
	},

// 9
	{
		question: '<p>Bilangan di antara 69 dan 71 yaitu &hellip;</p>',
		answers:
			[
			{ text: '70', correct: true },
			{ text: '69', correct: false },
			{ text: '71', correct: false },
			{ text: '68', correct: false }
			],
		bahas: 'b9'
	},

// 10
	{
		question: '<p>Bilangan di antara 133 dan 135 yaitu &hellip;</p>',
		answers:
			[
			{ text: '134', correct: true },
			{ text: '135', correct: false },
			{ text: '133', correct: false },
			{ text: '132', correct: false }
			],
		bahas: 'b10'
	},

// 11
	{
		question: '<p>Tanda yang tepat untuk hubungan berikut yaitu &hellip;</p><p>$$\\begin{equation*}122\\ \\dotsc \\ 320\\end{equation*}$$</p>',
		answers:
			[
			{ text: '&lt;', correct: true },
			{ text: '=', correct: false },
			{ text: '&gt;', correct: false },
			{ text: '&#8801;', correct: false }
			],
		bahas: 'b11'
	},

// 12
	{
		question: '<p>Tanda yang tepat untuk hubungan berikut yaitu &hellip;</p><p>$$\\begin{equation*}444\\ \\dotsc \\ 503\\end{equation*}$$</p>',
		answers:
			[
			{ text: '&lt;', correct: true },
			{ text: '=', correct: false },
			{ text: '&gt;', correct: false },
			{ text: '&#8801;', correct: false }
			],
		bahas: 'b12'
	},

// 13
	{
		question: '<p>Tanda yang tepat untuk hubungan berikut yaitu &hellip;</p><p>$$\\begin{equation*}439\\ \\dotsc \\ 375\\end{equation*}$$</p>',
		answers:
			[
			{ text: '&gt;', correct: true },
			{ text: '=', correct: false },
			{ text: '&lt;', correct: false },
			{ text: '&#8801;', correct: false }
			],
		bahas: 'b13'
	},

// 14
	{
		question: '<p>Tanda yang tepat untuk hubungan berikut yaitu &hellip;</p><p>$$\\begin{equation*}8\\ \\dotsc \\ 64\\end{equation*}$$</p>',
		answers:
			[
			{ text: '&lt;', correct: true },
			{ text: '=', correct: false },
			{ text: '&gt;', correct: false },
			{ text: '&#8801;', correct: false }
			],
		bahas: 'b14'
	},

// 15
	{
		question: '<p>Tanda yang tepat untuk hubungan berikut yaitu &hellip;</p><p>$$\\begin{equation*}119\\ \\dotsc \\ 79\\end{equation*}$$</p>',
		answers:
			[
			{ text: '&gt;', correct: true },
			{ text: '=', correct: false },
			{ text: '&lt;', correct: false },
			{ text: '&#8801;', correct: false }
			],
		bahas: 'b15'
	},

// 16
	{
		question: '<p>Urutan membesar bilangan-bilangan berikut yaitu &hellip;</p><p style="text-align: center">23, 22, 25, 24, 26</p>',
		answers:
			[
			{ text: '22, 23, 24, 25, 26', correct: true },
			{ text: '26, 25, 24, 23, 22', correct: false },
			{ text: '26, 27, 28, 29, 30', correct: false },
			{ text: '18, 19, 20, 21, 22', correct: false }
			],
		bahas: 'b16'
	},

// 17
	{
		question: '<p>Bilangan di antara 57 dan 59 yaitu &hellip;</p>',
		answers:
			[
			{ text: '58', correct: true },
			{ text: '57', correct: false },
			{ text: '59', correct: false },
			{ text: '60', correct: false }
			],
		bahas: 'b17'
	},

// 18
	{
		question: '<p>Urutan mengecil bilangan-bilangan berikut yaitu &hellip;</p><p style="text-align: center">49, 52, 53, 50, 51</p>',
		answers:
			[
			{ text: '53, 52, 51, 50, 49', correct: true },
			{ text: '49, 50, 51, 52, 53', correct: false },
			{ text: '53, 54, 55, 56, 57', correct: false },
			{ text: '44, 45, 46, 47, 48', correct: false }
			],
		bahas: 'b18'
	},

// 19
	{
		question: '<p>Bilangan di antara 68 dan 70 yaitu &hellip;</p>',
		answers:
			[
			{ text: '69', correct: true },
			{ text: '68', correct: false },
			{ text: '70', correct: false },
			{ text: '71', correct: false }
			],
		bahas: 'b19'
	},

// 20
	{
		question: '<p>Banyak bilangan di antara 96 dan 108 yaitu &hellip;</p>',
		answers:
			[
			{ text: '11 bilangan', correct: true },
			{ text: '10 bilangan', correct: false },
			{ text: '9 bilangan', correct: false },
			{ text: '12 bilangan', correct: false }
			],
		bahas: 'b20'
	}
];
