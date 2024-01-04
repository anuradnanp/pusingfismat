/* Copyright (C) 2022 Alma Nuradnan Pramudita (email: gocodealpha@gmail.com)

This file is part of MathSD.

MathSD is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

MathSD is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with MathSD. If not, see <https://www.gnu.org/licenses/>. */

const questions = [

// 1
	{
		question: '<p>Daerah yang diarsir berikut menunjukkan pecahan &hellip;</p><p style="text-align: center"><img style="max-width: 70%" src="aset/07-pecahan/01-01.svg"></p>',
		answers:
			[
			{ text: '$$\\frac{1}{3}$$', correct: true },
			{ text: '$$\\frac{3}{1}$$', correct: false },
			{ text: '$$\\frac{1}{2}$$', correct: false },
			{ text: '$$\\frac{2}{1}$$', correct: false }
			],
		bahas: 'b1'
	},

// 2
	{
		question: '<p>Daerah yang diarsir berikut menunjukkan pecahan &hellip;</p><p style="text-align: center"><img style="max-width: 70%" src="aset/07-pecahan/02-01.svg"></p>',
		answers:
			[
			{ text: '$$\\frac{2}{4}$$', correct: true },
			{ text: '$$\\frac{2}{2}$$', correct: false },
			{ text: '$$\\frac{4}{2}$$', correct: false },
			{ text: '$$\\frac{4}{4}$$', correct: false }
			],
		bahas: 'b2'
	},

// 3
	{
		question: '<p>Daerah yang diarsir berikut menunjukkan pecahan &hellip;</p><p style="text-align: center"><img style="max-width: 70%" src="aset/07-pecahan/03-01.svg"></p>',
		answers:
			[
			{ text: '$$\\frac{3}{6}$$', correct: true },
			{ text: '$$\\frac{6}{3}$$', correct: false },
			{ text: '$$\\frac{3}{3}$$', correct: false },
			{ text: '$$\\frac{6}{6}$$', correct: false }
			],
		bahas: 'b3'
	},

// 4
	{
		question: 'Lambang bilangan empat per enam adalah &hellip;</p>',
		answers:
			[
			{ text: '$$\\frac{4}{6}$$', correct: true },
			{ text: '$$\\frac{6}{4}$$', correct: false },
			{ text: '$$\\frac{2}{4}$$', correct: false },
			{ text: '$$\\frac{4}{2}$$', correct: false }
			],
		bahas: 'b4'
	},

// 5
	{
		question: 'Lambang bilangan enam per tujuh adalah &hellip;</p>',
		answers:
			[
			{ text: '$$\\frac{6}{7}$$', correct: true },
			{ text: '$$\\frac{7}{6}$$', correct: false },
			{ text: '$$\\frac{1}{7}$$', correct: false },
			{ text: '$$\\frac{7}{1}$$', correct: false }
			],
		bahas: 'b5'
	},

// 6
	{
		question: '<p>Daerah yang diarsir berikut menunjukkan pecahan &hellip;</p><p style="text-align: center"><img style="max-width: 70%" src="aset/07-pecahan/06-01.svg"></p>',
		answers:
			[
			{ text: '$$\\frac{3}{6}$$', correct: true },
			{ text: '$$\\frac{6}{3}$$', correct: false },
			{ text: '$$\\frac{3}{3}$$', correct: false },
			{ text: '$$\\frac{6}{6}$$', correct: false }
			],
		bahas: 'b6'
	},

// 7
	{
		question: 'Daerah arsiran berikut yang menunjukkan pecahan \\(\\frac{3}{4}\\) yaitu &hellip;</p>',
		answers:
			[
			{ text: '<p style="margin: 5px; text-align: center"><img style="max-width: 70%" src="aset/07-pecahan/07-01.svg"></p>', correct: true },
			{ text: '<p style="margin: 5px; text-align: center"><img style="max-width: 70%" src="aset/07-pecahan/07-02.svg"></p>', correct: false },
			{ text: '<p style="margin: 5px; text-align: center"><img style="max-width: 70%" src="aset/07-pecahan/07-03.svg"></p>', correct: false },
			{ text: '<p style="margin: 5px; text-align: center"><img style="max-width: 70%" src="aset/07-pecahan/07-04.svg"></p>', correct: false }
			],
		bahas: 'b7'
	},

// 8
	{
		question: 'Daerah arsiran berikut yang menunjukkan pecahan \\(\\frac{5}{7}\\) yaitu &hellip;</p>',
		answers:
			[
			{ text: '<p style="margin: 5px; text-align: center"><img style="max-width: 70%" src="aset/07-pecahan/08-01.svg"></p>', correct: true },
			{ text: '<p style="margin: 5px; text-align: center"><img style="max-width: 70%" src="aset/07-pecahan/08-02.svg"></p>', correct: false },
			{ text: '<p style="margin: 5px; text-align: center"><img style="max-width: 70%" src="aset/07-pecahan/08-03.svg"></p>', correct: false },
			{ text: '<p style="margin: 5px; text-align: center"><img style="max-width: 70%" src="aset/07-pecahan/08-04.svg"></p>', correct: false }
			],
		bahas: 'b8'
	},

// 9
	{
		question: 'Daerah arsiran berikut yang menunjukkan pecahan \\(\\frac{5}{8}\\) yaitu &hellip;</p>',
		answers:
			[
			{ text: '<p style="margin: 5px; text-align: center"><img style="max-width: 70%" src="aset/07-pecahan/09-01.svg"></p>', correct: true },
			{ text: '<p style="margin: 5px; text-align: center"><img style="max-width: 70%" src="aset/07-pecahan/09-02.svg"></p>', correct: false },
			{ text: '<p style="margin: 5px; text-align: center"><img style="max-width: 70%" src="aset/07-pecahan/09-03.svg"></p>', correct: false },
			{ text: '<p style="margin: 5px; text-align: center"><img style="max-width: 70%" src="aset/07-pecahan/09-04.svg"></p>', correct: false }
			],
		bahas: 'b9'
	},

// 10
	{
		question: '<p>Lambang bilangan dua per tiga, tiga per tujuh, lima per enam, dan satu per empat berturut-turut adalah &hellip;</p>',
		answers:
			[
			{ text: '$$\\frac{2}{3},\\frac{3}{7},\\frac{5}{6},\\frac{1}{4}$$', correct: true },
			{ text: '$$\\frac{3}{7},\\frac{2}{3},\\frac{1}{4},\\frac{5}{6}$$', correct: false },
			{ text: '$$\\frac{5}{6},\\frac{1}{4},\\frac{2}{3},\\frac{3}{7}$$', correct: false },
			{ text: '$$\\frac{1}{4},\\frac{5}{6},\\frac{3}{7},\\frac{2}{3}$$', correct: false },
			],
		bahas: 'b10'
	},

// 11
	{
		question: '<p>Daerah yang diarsir berikut menunjukkan pecahan &hellip;</p><p style="text-align: center"><img src="aset/07-pecahan/11-01.svg" style="width: 86%"></p>',
		answers:
			[
			{ text: '$$\\frac{4}{10}$$', correct: true },
			{ text: '$$\\frac{10}{4}$$', correct: false },
			{ text: '$$\\frac{6}{10}$$', correct: false },
			{ text: '$$\\frac{10}{6}$$', correct: false }
			],
		bahas: 'b11'
	},

// 12
	{
		question: '<p>Rina punya roti \\(\\frac{5}{10}\\) bagian.</p><p>Rudi punya roti \\(\\frac{3}{10}\\) bagian.</p><p>Yang bagian rotinya lebih besar yaitu &hellip;</p>',
		answers:
			[
			{ text: 'Rina', correct: true },
			{ text: 'Rudi', correct: false },
			{ text: 'bagian roti Rina dan Rudi sama', correct: false },
			{ text: 'tidak dapat diketahui', correct: false }
			],
		bahas: 'b12'
	},

// 13
	{
		question: '<p>Ayah punya sepotong bambu.</p><p>Bambu tersebut dipotong jadi 4 bagian sama panjang.</p><p>Tiap bagian bambu menyatakan pecahan &hellip;</p>',
		answers:
			[
			{ text: '$$\\frac{1}{4}$$', correct: true },
			{ text: '$$\\frac{4}{1}$$', correct: false },
			{ text: '$$\\frac{1}{3}$$', correct: false },
			{ text: '$$\\frac{3}{1}$$', correct: false }
			],
		bahas: 'b13'
	},

// 14
	{
		question: '<p>Dona punya \\(\\frac{1}{2}\\) m tali.</p><p>Feri punya \\(\\frac{1}{8}\\) m tali.</p><p>Yang talinya lebih panjang yaitu &hellip;</p>',
		answers:
			[
			{ text: 'Dona', correct: true },
			{ text: 'Feri', correct: false },
			{ text: 'panjang tali Dona dan Feri sama', correct: false },
			{ text: 'tidak dapat diketahui', correct: false }
			],
		bahas: 'b14'
	},

// 15
	{
		question: '<p>Santi punya sebuah roti.</p><p>Roti tersebut dia potong menjadi 4 bagian.</p><p>Dua bagian potongan diberikan pada Lulu.</p><p>Bagian yang diterima Lulu menyatakan pecahan &hellip;</p>',
		answers:
			[
			{ text: '$$\\frac{2}{4}$$', correct: true },
			{ text: '$$\\frac{4}{2}$$', correct: false },
			{ text: '$$\\frac{2}{2}$$', correct: false },
			{ text: '$$\\frac{1}{3}$$', correct: false }
			],
		bahas: 'b15'
	}
];
