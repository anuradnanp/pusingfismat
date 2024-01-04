/* Copyright (C) 2022 Alma Nuradnan Pramudita (email: gocodealpha@gmail.com)

This file is part of MathSD.

MathSD is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

MathSD is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with MathSD. If not, see <https://www.gnu.org/licenses/>. */

const questions = [

// 1
	{
		question: '<p>Pasangan nama dan jenis sudut yang benar pada bangun berikut adalah &hellip;</p><p style="text-align: center"><img src="aset/09-sudut/01-01.svg"></p>',
		answers:
			[
			{ text: '&angle;BAC, sudut lancip', correct: true },
			{ text: '&angle;BAC, sudut tumpul', correct: false },
			{ text: '&angle;BCA, sudut tumpul', correct: false },
			{ text: '&angle;BAC, sudut siku-siku', correct: false }
			],
		bahas: 'b1'
	},

// 2
	{
		question: '<p>Titik-titik sudut pada bangun berikut adalah &hellip;</p><p style="text-align: center"><img src="aset/09-sudut/02-01.svg"></p>',
		answers:
			[
			{ text: 'D, E, F', correct: true },
			{ text: '&angle;FDE, &angle;DEF, &angle;DFE', correct: false },
			{ text: 'DE, EF, FD', correct: false },
			{ text: '&Delta;DEF', correct: false }
			],
		bahas: 'b2'
	},

// 3
	{
		question: '<p>Nama-nama sudut pada bangun berikut adalah &hellip;</p><p style="text-align: center"><img src="aset/09-sudut/03-01.svg"></p>',
		answers:
			[
			{ text: '&angle;IGH, &angle;GHI, &angle;HIG', correct: true },
			{ text: 'G, H, I', correct: false },
			{ text: 'HI, IG, GH', correct: false },
			{ text: '&Delta;GHI', correct: false }
			],
		bahas: 'b3'
	},

// 4
	{
		question: '<p>Titik sudut pada gambar berikut adalah &hellip;</p><p style="text-align: center"><img src="aset/09-sudut/04-01.svg"></p>',
		answers:
			[
			{ text: 'L', correct: true },
			{ text: 'K', correct: false },
			{ text: 'M', correct: false },
			{ text: '&Delta;KLM', correct: false }
			],
		bahas: 'b4'
	},

// 5
	{
		question: '<p>Jenis sudut pada gambar berikut adalah &hellip;</p><p style="text-align: center"><img src="aset/09-sudut/05-01.svg"></p>',
		answers:
			[
			{ text: 'sudut tumpul', correct: true },
			{ text: 'sudut lancip', correct: false },
			{ text: 'sudut siku-siku', correct: false },
			{ text: '&angle;NOP', correct: false }
			],
		bahas: 'b5'
	},

// 6
	{
		question: '<p>Nama sudut pada gambar berikut adalah &hellip;</p><p style="text-align: center"><img src="aset/09-sudut/06-01.svg"></p>',
		answers:
			[
			{ text: '&angle;PQR', correct: true },
			{ text: 'Q', correct: false },
			{ text: 'sudut lancip', correct: false },
			{ text: 'sudut tumpul', correct: false }
			],
		bahas: 'b6'
	},

// 7
	{
		question: '<p>Nama sudut pada gambar berikut adalah &hellip;</p><p style="text-align: center"><img src="aset/09-sudut/07-01.svg"></p>',
		answers:
			[
			{ text: '&angle;CDE', correct: true },
			{ text: 'D', correct: false },
			{ text: 'sudut siku-siku', correct: false },
			{ text: 'sudut tumpul', correct: false }
			],
		bahas: 'b7'
	},

// 8
	{
		question: '<p>Urutan sudut dari terkecil ke terbesar berdasarkan gambar-gambar berikut adalah &hellip;</p><p style="text-align: center"><img src="aset/09-sudut/08-01.svg">&nbsp;&nbsp;<img src="aset/09-sudut/08-02.svg">&nbsp;&nbsp;<img src="aset/09-sudut/08-03.svg">&nbsp;&nbsp;<img src="aset/09-sudut/08-04.svg"></p>',
		answers:
			[
			{ text: '(b), (d), (a), (c)', correct: true },
			{ text: '(c), (d), (a), (b)', correct: false },
			{ text: '(a), (d), (b), (c)', correct: false },
			{ text: '(b), (c), (a), (d)', correct: false }
			],
		bahas: 'b8'
	},

// 9
	{
		question: '<p>Jenis sudut pada gambar berikut adalah &hellip;</p><p style="text-align: center"><img src="aset/09-sudut/09-01.svg"></p>',
		answers:
			[
			{ text: 'sudut siku-siku', correct: true },
			{ text: 'sudut tumpul', correct: false },
			{ text: 'sudut lancip', correct: false },
			{ text: '&angle;D', correct: false }
			],
		bahas: 'b9'
	},

// 10
	{
		question: '<p>Jenis sudut pada gambar berikut adalah &hellip;</p><p style="text-align: center"><img src="aset/09-sudut/10-01.svg"></p>',
		answers:
			[
			{ text: 'sudut lancip', correct: true },
			{ text: 'sudut siku-siku', correct: false },
			{ text: 'sudut tumpul', correct: false },
			{ text: 'sudut lurus', correct: false }
			],
		bahas: 'b10'
	},

// 11
	{
		question: '<p>Nama-nama sudut pada bangun berikut adalah &hellip;</p><p style="text-align: center"><img src="aset/09-sudut/11-01.svg"></p>',
		answers:
			[
			{ text: '&angle;DAB, &angle;ABC, &angle;BCD, &angle;CDA', correct: true },
			{ text: 'AB, BC, CD, DA', correct: false },
			{ text: 'A, B, C, D', correct: false },
			{ text: 'AC, BD', correct: false }
			],
		bahas: 'b11'
	},

// 12
	{
		question: '<p>Titik-titik sudut pada bangun berikut adalah &hellip;</p><p style="text-align: center"><img src="aset/09-sudut/12-01.svg"></p>',
		answers:
			[
			{ text: 'E, F, G, H, I, J, K, L', correct: true },
			{ text: 'EF, FG, GH, HI, IJ, JK, KL, LE', correct: false },
			{ text: '&angle;LEF, &angle;EFG, &angle;FGH, &angle;GHI, &angle;HIJ, &angle;IJK, &angle;JKL, &angle;KLE', correct: false },
			{ text: 'GE, HJ', correct: false }
			],
		bahas: 'b12'
	},

// 13
	{
		question: '<p>Nama sudut pada gambar berikut adalah &hellip;</p><p style="text-align: center"><img src="aset/09-sudut/13-01.svg"></p>',
		answers:
			[
			{ text: '&angle;MNO', correct: true },
			{ text: 'N', correct: false },
			{ text: 'sudut tumpul', correct: false },
			{ text: 'sudut lancip', correct: false }
			],
		bahas: 'b13'
	},

// 14
	{
		question: '<p>Berikut yang merupakan pasangan sudut lancip adalah &hellip;</p>',
		answers:
			[
			{ text: '<p style="text-align: center; margin: 5px">' +
					[
						'<img src="aset/09-sudut/14-01.svg">',
						'<img src="aset/09-sudut/14-02.svg">'
					].sort(() => Math.random() - 0.5).join('&nbsp;&nbsp;&nbsp;') + '</p>',
				correct: true },
			{ text: '<p style="text-align: center; margin: 5px">' +
					[
						'<img src="aset/09-sudut/14-01.svg">',
						'<img src="aset/09-sudut/14-03.svg">'
					].sort(() => Math.random() - 0.5).join('&nbsp;&nbsp;&nbsp;') + '</p>', correct: false },
			{ text: '<p style="text-align: center; margin: 5px">' +
					[
						'<img src="aset/09-sudut/14-02.svg">',
						'<img src="aset/09-sudut/14-03.svg">'
					].sort(() => Math.random() - 0.5).join('&nbsp;&nbsp;&nbsp;') + '</p>', correct: false },
			{ text: '<p style="text-align: center; margin: 5px">' +
					[
						'<img src="aset/09-sudut/14-03.svg">',
						'<img src="aset/09-sudut/14-04.svg">'
					].sort(() => Math.random() - 0.5).join('&nbsp;&nbsp;&nbsp;') + '</p>', correct: false }
			],
		bahas: 'b14'
	},

// 15
	{
		question: '<p>Berikut yang merupakan pasangan sudut tumpul adalah &hellip;</p>',
		answers:
			[
			{ text: '<p style="text-align: center; margin: 5px">' +
					[
						'<img src="aset/09-sudut/14-03.svg">',
						'<img src="aset/09-sudut/14-04.svg">'
					].sort(() => Math.random() - 0.5).join('&nbsp;&nbsp;&nbsp;') + '</p>',
				correct: true },
			{ text: '<p style="text-align: center; margin: 5px">' +
					[
						'<img src="aset/09-sudut/14-01.svg">',
						'<img src="aset/09-sudut/14-03.svg">'
					].sort(() => Math.random() - 0.5).join('&nbsp;&nbsp;&nbsp;') + '</p>', correct: false },
			{ text: '<p style="text-align: center; margin: 5px">' +
					[
						'<img src="aset/09-sudut/14-02.svg">',
						'<img src="aset/09-sudut/14-03.svg">'
					].sort(() => Math.random() - 0.5).join('&nbsp;&nbsp;&nbsp;') + '</p>', correct: false },
			{ text: '<p style="text-align: center; margin: 5px">' +
					[
						'<img src="aset/09-sudut/14-01.svg">',
						'<img src="aset/09-sudut/14-02.svg">'
					].sort(() => Math.random() - 0.5).join('&nbsp;&nbsp;&nbsp;') + '</p>', correct: false }
			],
		bahas: 'b15'
	}
];
