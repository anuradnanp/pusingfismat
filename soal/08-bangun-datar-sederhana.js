/* Copyright (C) 2022 Alma Nuradnan Pramudita (email: gocodealpha@gmail.com)

This file is part of MathSD.

MathSD is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

MathSD is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with MathSD. If not, see <https://www.gnu.org/licenses/>. */

const questions = [

// 1
	{
		question: '<p>Sebuah bangun punya empat sudut.</p><p>Empat sudutnya siku-siku.</p><p>Empat sisinya sama panjang.</p><p>Bentuk bangun tersebut yaitu &hellip;</p>',
		answers:
			[
			{ text: '<p style="text-align: center; margin: 5px"><img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/persegi.svg"></p>', correct: true },
			{ text: '<p style="text-align: center; margin: 5px"><img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/persegi-panjang-a.svg"></p>', correct: false },
			{ text: '<p style="text-align: center; margin: 5px"><img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/persegi-panjang-b.svg"></p>', correct: false },
			{ text: '<p style="text-align: center; margin: 5px"><img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/persegi-panjang-c.svg"></p>', correct: false }
			],
		bahas: 'b1'
	},

// 2
	{
		question: '<p>Nama bangun berikut adalah &hellip;</p><p style="text-align: center"><img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/persegi-panjang-a.svg"></p>',
		answers:
			[
			{ text: 'persegi panjang', correct: true },
			{ text: 'persegi', correct: false },
			{ text: 'segitiga siku-siku', correct: false },
			{ text: 'segitiga sama sisi', correct: false }
			],
		bahas: 'b2'
	},

// 3
	{
		question: '<p>Nama bangun berikut adalah &hellip;</p><p style="text-align: center"><img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/segitiga-sama-sisi-a.svg"></p>',
		answers:
			[
			{ text: 'segitiga sama sisi', correct: true },
			{ text: 'segitiga siku-siku', correct: false },
			{ text: 'persegi', correct: false },
			{ text: 'persegi panjang', correct: false }
			],
		bahas: 'b3'
	},

// 4
	{
		question: '<p>Sebuah bangun punya empat sudut.</p><p>Empat sudutnya sama besar.</p><p>Hanya sisi-sisi yang berhadapan yang sama panjang.</p><p>Bentuk bangun tersebut yaitu &hellip;</p>',
		answers:
			[
			{ text: '<p style="text-align: center; margin: 5px"><img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/persegi-panjang-a.svg"></p>', correct: true },
			{ text: '<p style="text-align: center; margin: 5px"><img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/trapesium-a.svg"></p>', correct: false },
			{ text: '<p style="text-align: center; margin: 5px"><img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/jajaran-genjang.svg"></p>', correct: false },
			{ text: '<p style="text-align: center; margin: 5px"><img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/layang-layang-a.svg"></p>', correct: false }
			],
		bahas: 'b4'
	},

// 5
	{
		question: '<p>Nama bangun berikut adalah &hellip;</p><p style="text-align: center"><img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/segitiga-siku-siku.svg"></p>',
		answers:
			[
			{ text: 'segitiga siku-siku', correct: true },
			{ text: 'segitiga sama sisi', correct: false },
			{ text: 'segitiga sama kaki', correct: false },
			{ text: 'layang-layang', correct: false }
			],
		bahas: 'b3'
	},

// 6
	{
		question: '<p>Sebuah bangun punya tiga sisi.</p><p>Tiga sisinya sama panjang.</p><p>Tiga sudutnya sama besar.</p><p>Bentuk bangun tersebut yaitu &hellip;</p>',
		answers:
			[
			{ text: '<p style="text-align: center; margin: 5px"><img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/segitiga-sama-sisi-a.svg"></p>', correct: true },
			{ text: '<p style="text-align: center; margin: 5px"><img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/segitiga-siku-siku.svg"></p>', correct: false },
			{ text: '<p style="text-align: center; margin: 5px"><img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/segitiga-sama-kaki.svg"></p>', correct: false },
			{ text: '<p style="text-align: center; margin: 5px"><img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/layang-layang-a.svg"></p>', correct: false }
			],
		bahas: 'b6'
	},

// 7
	{
		question: '<p>Nama bangun berikut adalah &hellip;</p><p style="text-align: center"><img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/segitiga-sama-kaki.svg"></p>',
		answers:
			[
			{ text: 'segitiga sama kaki', correct: true },
			{ text: 'segitiga sembarang', correct: false },
			{ text: 'segitiga siku-siku', correct: false },
			{ text: 'layang-layang', correct: false }
			],
		bahas: 'b3'
	},

// 8
	{
		question: '<p>Sebuah bangun punya tiga sisi.</p><p>Salah satu sudutnya siku-siku.</p><p>Bentuk bangun tersebut yaitu &hellip;</p>',
		answers:
			[
			{ text: '<p style="text-align: center; margin: 5px"><img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/segitiga-siku-siku.svg"></p>', correct: true },
			{ text: '<p style="text-align: center; margin: 5px"><img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/segitiga-sama-kaki.svg"></p>', correct: false },
			{ text: '<p style="text-align: center; margin: 5px"><img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/segitiga-sama-sisi-a.svg"></p>', correct: false },
			{ text: '<p style="text-align: center; margin: 5px"><img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/segitiga-sama-sisi-b.svg"></p>', correct: false }
			],
		bahas: 'b8'
	},

// 9
	{
		question: '<p>Nama bangun berikut adalah &hellip;</p><p style="text-align: center"><img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/segitiga-sembarang.svg"></p>',
		answers:
			[
			{ text: 'segitiga sembarang', correct: true },
			{ text: 'segitiga sama kaki', correct: false },
			{ text: 'segitiga siku-siku', correct: false },
			{ text: 'layang-layang', correct: false }
			],
		bahas: 'b3'
	},

// 10
	{
		question: '<p>Nama bangun berikut adalah &hellip;</p><p style="text-align: center"><img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/jajaran-genjang.svg"></p>',
		answers:
			[
			{ text: 'jajaran genjang', correct: true },
			{ text: 'trapesium', correct: false },
			{ text: 'layang-payang', correct: false },
			{ text: 'persegi panjang', correct: false }
			],
		bahas: 'b2'
	},

// 11
	{
		question: '<p>Sifat-sifat bangun berikut yaitu &hellip;</p><p style="text-align: center"><img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/jajaran-genjang.svg"></p>',
		// jajaran genjang
		answers:
			[
			{ text: 'sisinya 4<br>sudutnya 4<br>sisi berhadapan sama panjang<br>sudut berhadapan sama besar<br>tidak ada sudut siku-siku', correct: true },
			{ text: 'sisinya 3<br>sudutnya 3<br>2 sisi sama panjang<br>2 sudut sama besar<br>tidak ada sudut siku-siku', correct: false },
			{ text: 'sisinya 4<br>sudutnya 4<br>sisi berhadapan sama panjang<br>semua sudut siku-siku', correct: false },
			{ text: 'sisinya 3<br>sudutnya 3<br>semua sisi sama panjang<br>semua sudut sama besar<br>tidak ada sudut siku-siku', correct: false }
			],
		bahas: 'b11'
	},

// 12
	{
		question: '<p>Sifat-sifat bangun berikut yaitu &hellip;</p><p style="text-align: center"><img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/segitiga-sama-kaki.svg"></p>',
		// segitiga sama kaki
		answers:
			[
			{ text: 'sisinya 3<br>sudutnya 3<br>2 sisi sama panjang<br>2 sudut sama besar<br>tidak ada sudut siku-siku', correct: true },
			{ text: 'sisinya 4<br>sudutnya 4<br>sisi berhadapan sama panjang<br>sudut berhadapan sama besar<br>tidak ada sudut siku-siku', correct: false },
			{ text: 'sisinya 4<br>sudutnya 4<br>sisi berhadapan sama panjang<br>semua sudut siku-siku', correct: false },
			{ text: 'sisinya 3<br>sudutnya 3<br>semua sisi sama panjang<br>semua sudut sama besar<br>tidak ada sudut siku-siku', correct: false }
			],
		bahas: 'b12'
	},

// 13
	{
		question: '<p>Berikut yang merupakan kumpulan persegi panjang adalah &hellip;</p>',
		answers:
			[
			{ text: '<p style="text-align: center; margin: 5px">' +
					[
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/persegi-panjang-a.svg">',
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/persegi-panjang-b.svg">',
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/persegi-panjang-c.svg">'
					].sort(() => Math.random() - 0.5).join('&nbsp;&nbsp;&nbsp;') + '</p>',
				correct: true },
			{ text: '<p style="text-align: center; margin: 5px">' +
					[
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/persegi-panjang-a.svg">',
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/persegi-panjang-b.svg">',
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/jajaran-genjang.svg">'
					].sort(() => Math.random() - 0.5).join('&nbsp;&nbsp;&nbsp;') + '</p>', correct: false },
			{ text: '<p style="text-align: center; margin: 5px">' +
					[
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/persegi-panjang-a.svg">',
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/persegi-panjang-c.svg">',
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/jajaran-genjang.svg">'
					].sort(() => Math.random() - 0.5).join('&nbsp;&nbsp;&nbsp;') + '</p>', correct: false },
			{ text: '<p style="text-align: center; margin: 5px">' +
					[
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/persegi-panjang-b.svg">',
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/persegi-panjang-c.svg">',
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/jajaran-genjang.svg">'
					].sort(() => Math.random() - 0.5).join('&nbsp;&nbsp;&nbsp;') + '</p>', correct: false }
			],
		bahas: 'b13'
	},

// 14
	{
		question: '<p>Berikut yang merupakan kumpulan segitiga sama sisi adalah &hellip;</p>',
		answers:
			[
			{ text: '<p style="text-align: center; margin: 5px">' +
					[
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/segitiga-sama-sisi-a.svg">',
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/segitiga-sama-sisi-b.svg">',
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/segitiga-sama-sisi-c.svg">'
					].sort(() => Math.random() - 0.5).join('&nbsp;&nbsp;&nbsp;') + '</p>',
				correct: true },
			{ text: '<p style="text-align: center; margin: 5px">' +
					[
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/segitiga-sama-sisi-a.svg">',
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/segitiga-sama-sisi-b.svg">',
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/segitiga-siku-siku.svg">'
					].sort(() => Math.random() - 0.5).join('&nbsp;&nbsp;&nbsp;') + '</p>', correct: false },
			{ text: '<p style="text-align: center; margin: 5px">' +
					[
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/segitiga-sama-sisi-a.svg">',
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/segitiga-sama-sisi-c.svg">',
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/segitiga-siku-siku.svg">'
					].sort(() => Math.random() - 0.5).join('&nbsp;&nbsp;&nbsp;') + '</p>', correct: false },
			{ text: '<p style="text-align: center; margin: 5px">' +
					[
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/segitiga-sama-sisi-b.svg">',
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/segitiga-sama-sisi-c.svg">',
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/segitiga-siku-siku.svg">'
					].sort(() => Math.random() - 0.5).join('&nbsp;&nbsp;&nbsp;') + '</p>', correct: false }
			],
		bahas: 'b14'
	},

// 15
	{
		question: '<p>Berikut yang merupakan kumpulan trapesium adalah &hellip;</p>',
		answers:
			[
			{ text: '<p style="text-align: center; margin: 5px">' +
					[
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/trapesium-a.svg">',
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/trapesium-b.svg">',
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/trapesium-c.svg">'
					].sort(() => Math.random() - 0.5).join('&nbsp;&nbsp;&nbsp;') + '</p>',
				correct: true },
			{ text: '<p style="text-align: center; margin: 5px">' +
					[
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/trapesium-a.svg">',
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/trapesium-b.svg">',
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/jajaran-genjang.svg">'
					].sort(() => Math.random() - 0.5).join('&nbsp;&nbsp;&nbsp;') + '</p>', correct: false },
			{ text: '<p style="text-align: center; margin: 5px">' +
					[
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/trapesium-a.svg">',
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/trapesium-c.svg">',
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/jajaran-genjang.svg">'
					].sort(() => Math.random() - 0.5).join('&nbsp;&nbsp;&nbsp;') + '</p>', correct: false },
			{ text: '<p style="text-align: center; margin: 5px">' +
					[
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/trapesium-b.svg">',
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/trapesium-c.svg">',
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/jajaran-genjang.svg">'
					].sort(() => Math.random() - 0.5).join('&nbsp;&nbsp;&nbsp;') + '</p>', correct: false }
			],
		bahas: 'b13'
	},

// 16
	{
		question: '<p>Berikut yang merupakan kumpulan layang-layang adalah &hellip;</p>',
		answers:
			[
			{ text: '<p style="text-align: center; margin: 5px">' +
					[
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/layang-layang-a.svg">',
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/layang-layang-b.svg">',
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/layang-layang-c.svg">'
					].sort(() => Math.random() - 0.5).join('&nbsp;&nbsp;&nbsp;') + '</p>',
				correct: true },
			{ text: '<p style="text-align: center; margin: 5px">' +
					[
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/layang-layang-a.svg">',
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/layang-layang-b.svg">',
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/jajaran-genjang.svg">'
					].sort(() => Math.random() - 0.5).join('&nbsp;&nbsp;&nbsp;') + '</p>', correct: false },
			{ text: '<p style="text-align: center; margin: 5px">' +
					[
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/layang-layang-a.svg">',
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/layang-layang-c.svg">',
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/jajaran-genjang.svg">'
					].sort(() => Math.random() - 0.5).join('&nbsp;&nbsp;&nbsp;') + '</p>', correct: false },
			{ text: '<p style="text-align: center; margin: 5px">' +
					[
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/layang-layang-b.svg">',
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/layang-layang-c.svg">',
						'<img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/jajaran-genjang.svg">'
					].sort(() => Math.random() - 0.5).join('&nbsp;&nbsp;&nbsp;') + '</p>', correct: false }
			],
		bahas: 'b13'
	},

// 17
	{
		question: '<p>Sifat-sifat bangun berikut yaitu &hellip;</p><p style="text-align: center"><img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/persegi.svg"></p>',
		// persegi
		answers:
			[
			{ text: 'sisinya 4<br>sudutnya 4<br>semua sisi sama panjang<br>semua sudut siku-siku', correct: true },
			{ text: 'sisinya 4<br>sudutnya 4<br>sisi berhadapan sama panjang<br>sudut berhadapan sama besar<br>tidak ada sudut siku-siku', correct: false },
			{ text: 'sisinya 4<br>sudutnya 4<br>sisi berhadapan sama panjang<br>semua sudut siku-siku', correct: false },
			{ text: 'sisinya 4<br>sudutnya 4<br>2 sisi sejajar<br>2 sisi tidak sejajar<br>ada sudut bukan siku-siku', correct: false }
			],
		bahas: 'b17'
	},

// 18
	{
		question: '<p>Sifat-sifat bangun berikut yaitu &hellip;</p><p style="text-align: center"><img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/persegi-panjang-a.svg"></p>',
		// persegi panjang
		answers:
			[
			{ text: 'sisinya 4<br>sudutnya 4<br>sisi berhadapan sama panjang<br>semua sudut siku-siku', correct: true },
			{ text: 'sisinya 4<br>sudutnya 4<br>sisi berhadapan sama panjang<br>sudut berhadapan sama besar<br>tidak ada sudut siku-siku', correct: false },
			{ text: 'sisinya 4<br>sudutnya 4<br>semua sisi sama panjang<br>semua sudut siku-siku', correct: false },
			{ text: 'sisinya 4<br>sudutnya 4<br>2 sisi sejajar<br>2 sisi tidak sejajar<br>ada sudut bukan siku-siku', correct: false }
			],
		bahas: 'b18'
	},

// 19
	{
		question: '<p>Sifat-sifat bangun berikut yaitu &hellip;</p><p style="text-align: center"><img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/trapesium-a.svg"></p>',
		// trapesium
		answers:
			[
			{ text: 'sisinya 4<br>sudutnya 4<br>2 sisi sejajar<br>2 sisi tidak sejajar<br>ada sudut bukan siku-siku', correct: true },
			{ text: 'sisinya 4<br>sudutnya 4<br>sisi berhadapan sama panjang<br>semua sudut siku-siku', correct: false },
			{ text: 'sisinya 4<br>sudutnya 4<br>sisi berhadapan sama panjang<br>sudut berhadapan sama besar<br>tidak ada sudut siku-siku', correct: false },
			{ text: 'sisinya 4<br>sudutnya 4<br>semua sisi sama panjang<br>semua sudut siku-siku', correct: false }
			],
		bahas: 'b19'
	},

// 20
	{
		question: '<p>Sifat-sifat bangun berikut yaitu &hellip;</p><p style="text-align: center"><img style="max-width: 70%" src="aset/08-bangun-datar-sederhana/segitiga-sama-sisi-a.svg"></p>',
		// segitiga sama sisi
		answers:
			[
			{ text: 'sisinya 3<br>sudutnya 3<br>semua sisi sama panjang<br>semua sudut sama besar<br>tidak ada sudut siku-siku', correct: true },
			{ text: 'sisinya 3<br>sudutnya 3<br>2 sisi sama panjang<br>2 sudut sama besar<br>tidak ada sudut siku-siku', correct: false },
			{ text: 'sisinya 4<br>sudutnya 4<br>sisi berhadapan sama panjang<br>sudut berhadapan sama besar<br>tidak ada sudut siku-siku', correct: false },
			{ text: 'sisinya 4<br>sudutnya 4<br>semua sisi sama panjang<br>semua sudut siku-siku', correct: false }
			],
		bahas: 'b20'
	}
];
