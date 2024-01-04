/* Copyright (C) 2022 Alma Nuradnan Pramudita (email: gocodealpha@gmail.com)

This file is part of MathSD.

MathSD is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

MathSD is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with MathSD. If not, see <https://www.gnu.org/licenses/>. */

const questions = [

// 1
	{
		question: '<p style="text-align: center">6 + 6 + 6 + 6 + 6 = &hellip;</p>',
		answers:
			[
			{ text: '5 &times; 6', correct: true },
			{ text: '6 &times; 6', correct: false },
			{ text: '4 &times; 6', correct: false },
			{ text: '7 &times; 6', correct: false }
			],
		bahas: 'b1'
	},

// 2
	{
		question: '<p style="text-align: center">4 &times; 7 = &hellip;</p>',
		answers:
			[
			{ text: '28', correct: true },
			{ text: '24', correct: false },
			{ text: '21', correct: false },
			{ text: '35', correct: false }
			],
		bahas: 'b2'
	},

// 3
	{
		question: '<p style="text-align: center">8 &times; 7 = &hellip;</p>',
		answers:
			[
			{ text: '56', correct: true },
			{ text: '49', correct: false },
			{ text: '63', correct: false },
			{ text: '35', correct: false }
			],
		bahas: 'b3'
	},

// 4
	{
		question: '<p style="text-align: center">3 &times; 4 &times; 5 = &hellip;</p>',
		answers:
			[
			{ text: '60', correct: true },
			{ text: '48', correct: false },
			{ text: '20', correct: false },
			{ text: '45', correct: false }
			],
		bahas: 'b4'
	},

// 5
	{
		question: '<p style="text-align: center">4 &times; 13 = &hellip;</p>',
		answers:
			[
			{ text: '52', correct: true },
			{ text: '39', correct: false },
			{ text: '65', correct: false },
			{ text: '48', correct: false }
			],
		bahas: 'b5'
	},

// 6
	{
		question: '<p style="text-align: center">56 &times; 7 = &hellip;</p>',
		answers:
			[
			{ text: '392', correct: true },
			{ text: '336', correct: false },
			{ text: '448', correct: false },
			{ text: '385', correct: false }
			],
		bahas: 'b6'
	},

// 7
	{
		question: '<p>$$\\begin{equation*}\\begin{tightarray}[0.2em]{ c r c } & 28 & \\\\ & 4 & \\times \\\\\\hline & \\dotsc & \\end{tightarray}\\end{equation*}$$</p>',
		answers:
			[
			{ text: '112', correct: true },
			{ text: '102', correct: false },
			{ text: '122', correct: false },
			{ text: '92', correct: false }
			],
		bahas: 'b7'
	},

// 8
	{
		question: '<p>$$\\begin{equation*}\\begin{tightarray}[0.2em]{ c r c } & 36 & \\\\ & 8 & \\times \\\\\\hline & \\dotsc & \\end{tightarray}\\end{equation*}$$</p>',
		answers:
			[
			{ text: '288', correct: true },
			{ text: '278', correct: false },
			{ text: '298', correct: false },
			{ text: '308', correct: false }
			],
		bahas: 'b8'
	},

// 9
	{
		question: '<p style="text-align: center">49 &times; 5 = &hellip;</p>',
		answers:
			[
			{ text: '245', correct: true },
			{ text: '235', correct: false },
			{ text: '255', correct: false },
			{ text: '225', correct: false }
			],
		bahas: 'b9'
	},

// 10
	{
		question: '<p>Bentuk berikut adalah bentuk pengurangan berulang dari operasi &hellip;</p><p style="text-align: center">28 &minus; 7 &minus; 7 &minus; 7 &minus; 7 = 0</p>',
		answers:
			[
			{ text: '28 : 7 = 4', correct: true },
			{ text: '28 &minus; 7 = 21', correct: false },
			{ text: '7 &times; 4 = 28', correct: false },
			{ text: '21 + 7 = 28', correct: false }
			],
		bahas: 'b10'
	},

// 11
	{
		question: '<p style="text-align: center">54 : 9 = &hellip;</p>',
		answers:
			[
			{ text: '6', correct: true },
			{ text: '5', correct: false },
			{ text: '4', correct: false },
			{ text: '45', correct: false }
			],
		bahas: 'b11'
	},

// 12
	{
		question: '<p style="text-align: center">27 : (9 : 3) = &hellip;</p>',
		answers:
			[
			{ text: '9', correct: true },
			{ text: '1', correct: false },
			{ text: '3', correct: false },
			{ text: '27', correct: false }
			],
		bahas: 'b12'
	},

// 13
	{
		question: '<p style="text-align: center">105 : 15 = &hellip;</p>',
		answers:
			[
			{ text: '7', correct: true },
			{ text: '6', correct: false },
			{ text: '8', correct: false },
			{ text: '9', correct: false }
			],
		bahas: 'b13'
	},

// 14
	{
		question: '<p>$$\\begin{equation*}\\begin{tightarray}[0.2em]{ c c c } &	& \\dotsc \\\\\\hline3 & ) & 48\\end{tightarray}\\end{equation*}$$</p>',
		answers:
			[
			{ text: '16', correct: true },
			{ text: '15', correct: false },
			{ text: '17', correct: false },
			{ text: '18', correct: false }
			],
		bahas: 'b14'
	},

// 15
	{
		question: '<p>$$\\begin{equation*}\\begin{tightarray}[0.2em]{ c c c } &	& \\dotsc \\\\\\hline7 & ) & 84\\end{tightarray}\\end{equation*}$$</p>',
		answers:
			[
			{ text: '12', correct: true },
			{ text: '11', correct: false },
			{ text: '13', correct: false },
			{ text: '14', correct: false }
			],
		bahas: 'b15'
	},

// 16
	{
		question: '<p>$$\\begin{equation*}\\begin{tightarray}[0.2em]{ c c c } &	& \\dotsc \\\\\\hline6 & ) & 462\\end{tightarray}\\end{equation*}$$</p>',
		answers:
			[
			{ text: '77', correct: true },
			{ text: '67', correct: false },
			{ text: '87', correct: false },
			{ text: '97', correct: false }
			],
		bahas: 'b16'
	},

// 17
	{
		question: '<p style="text-align: center">72 : 4 = &hellip;</p>',
		answers:
			[
			{ text: '18', correct: true },
			{ text: '17', correct: false },
			{ text: '19', correct: false },
			{ text: '16', correct: false }
			],
		bahas: 'b17'
	},

// 18
	{
		question: '<p>$$\\begin{equation*}\\begin{tightarray}[0.2em]{ c c c } &	& \\dotsc \\\\\\hline9 & ) & 594\\end{tightarray}\\end{equation*}$$</p>',
		answers:
			[
			{ text: '66', correct: true },
			{ text: '56', correct: false },
			{ text: '76', correct: false },
			{ text: '86', correct: false }
			],
		bahas: 'b18'
	},

// 19
	{
		question: '<p style="text-align: center">528 : 8 = &hellip;</p>',
		answers:
			[
			{ text: '66', correct: true },
			{ text: '56', correct: false },
			{ text: '76', correct: false },
			{ text: '86', correct: false }
			],
		bahas: 'b19'
	},

// 20
	{
		question: '<p>$$\\begin{equation*}\\begin{tightarray}[0.2em]{ c c c } &	& \\dotsc \\\\\\hline6 & ) & 432\\end{tightarray}\\end{equation*}$$</p>',
		answers:
			[
			{ text: '72', correct: true },
			{ text: '62', correct: false },
			{ text: '82', correct: false },
			{ text: '52', correct: false }
			],
		bahas: 'b20'
	},

// 21
	{
		question: '<p>Bentuk penjumlahan berulang dari 8 &times; 3 yaitu &hellip;</p>',
		answers:
			[
			{ text: '3 + 3 + 3 + 3 + 3 + 3 + 3 + 3 = 24', correct: true },
			{ text: '3 + 3 + 3 + 3 + 3 + 3 + 3 = 24', correct: false },
			{ text: '3 + 3 + 3 + 3 + 3 + 3 + 3 + 3 + 3 = 24', correct: false },
			{ text: '3 + 3 + 3 + 3 + 3 + 3 = 24', correct: false }
			],
		bahas: 'b21'
	},

// 22
	{
		question: '<p>Bentuk pengurangan berulang dari 42 : 7 yaitu &hellip;</p>',
		answers:
			[
			{ text: '42 &minus; 7 &minus; 7 &minus; 7 &minus; 7 &minus; 7 &minus; 7 = 0', correct: true },
			{ text: '42 &minus; 7 &minus; 7 &minus; 7 &minus; 7 &minus; 7 = 0', correct: false },
			{ text: '42 &minus; 7 &minus; 7 &minus; 7 &minus; 7 &minus; 7 &minus; 7 &minus; 7 = 0', correct: false },
			{ text: '42 &minus; 7 &minus; 7 &minus; 7 &minus; 7 = 0', correct: false }
			],
		bahas: 'b22'
	},

// 23
	{
		question: '<p style="text-align: center">65 &times; 7 = &hellip;</p>',
		answers:
			[
			{ text: '455', correct: true },
			{ text: '445', correct: false },
			{ text: '465', correct: false },
			{ text: '475', correct: false }
			],
		bahas: 'b23'
	},

// 24
	{
		question: '<p style="text-align: center">36 &times; 8 = &hellip;</p>',
		answers:
			[
			{ text: '288', correct: true },
			{ text: '278', correct: false },
			{ text: '298', correct: false },
			{ text: '268', correct: false }
			],
		bahas: 'b24'
	},

// 25
	{
		question: '<p style="text-align: center">94 &times; 5 = &hellip;</p>',
		answers:
			[
			{ text: '470', correct: true },
			{ text: '460', correct: false },
			{ text: '480', correct: false },
			{ text: '450', correct: false }
			],
		bahas: 'b25'
	},

// 26
	{
		question: '<p style="text-align: center">172 : 4 = &hellip;</p>',
		answers:
			[
			{ text: '43', correct: true },
			{ text: '33', correct: false },
			{ text: '53', correct: false },
			{ text: '23', correct: false }
			],
		bahas: 'b26'
	},

// 27
	{
		question: '<p style="text-align: center">98 : 7 = &hellip;</p>',
		answers:
			[
			{ text: '14', correct: true },
			{ text: '13', correct: false },
			{ text: '15', correct: false },
			{ text: '16', correct: false }
			],
		bahas: 'b27'
	},

// 28
	{
		question: '<p style="text-align: center">792 : 8 = &hellip;</p>',
		answers:
			[
			{ text: '99', correct: true },
			{ text: '89', correct: false },
			{ text: '79', correct: false },
			{ text: '109', correct: false }
			],
		bahas: 'b28'
	},

// 29
	{
		question: '<p style="text-align: center">756 : 7 = &hellip;</p>',
		answers:
			[
			{ text: '108', correct: true },
			{ text: '98', correct: false },
			{ text: '118', correct: false },
			{ text: '18', correct: false }
			],
		bahas: 'b29'
	},

// 30
	{
		question: '<p style="text-align: center">624 : 6 = &hellip;</p>',
		answers:
			[
			{ text: '104', correct: true },
			{ text: '14', correct: false },
			{ text: '24', correct: false },
			{ text: '94', correct: false }
			],
		bahas: 'b30'
	},

// 31
	{
		question: '<p>Pak Rudi mempunyai 729 buah keramik.</p><p>Keramik tersebut ditata di 9 ruangan.</p><p>Setiap ruangan berisi keramik sama banyak.<p><p>Jumlah keramik di tiap ruangan adalah &hellip;</p>',
		answers:
			[
			{ text: '81 buah', correct: true },
			{ text: '71 buah', correct: false },
			{ text: '91 buah', correct: false },
			{ text: '61 buah', correct: false }
			],
		bahas: 'b31'
	},

// 32
	{
		question: '<p>Ujang mempunyai 8 kantong kelereng.</p><p>Setiap kantong berisi 9 butir kelereng.<p><p>Jumlah seluruh kelereng Ujang adalah &hellip;</p>',
		answers:
			[
			{ text: '72 butir', correct: true },
			{ text: '80 butir', correct: false },
			{ text: '64 butir', correct: false },
			{ text: '63 butir', correct: false }
			],
		bahas: 'b32'
	},

// 33
	{
		question: '<p>Pak Ranto mempunyai 9 keranjang berisi semangka.</p><p>Setiap keranjang berisi 7 semangka.<p><p>Jumlah seluruh semangka Pak Ranto adalah &hellip;</p>',
		answers:
			[
			{ text: '63 buah', correct: true },
			{ text: '72 buah', correct: false },
			{ text: '45 buah', correct: false },
			{ text: '56 buah', correct: false }
			],
		bahas: 'b33'
	},

// 34
	{
		question: '<p>SD Lima Dua mempunyai murid sebanyak 342 anak.</p><p>Sekolah tersebut memiliki 6 kelas dengan jumlah murid yang sama banyak.</p><p>Setiap kelas berisi murid sama banyak.<p><p>Jumlah murid di tiap kelas adalah &hellip;</p>',
		answers:
			[
			{ text: '57 siswa', correct: true },
			{ text: '67 siswa', correct: false },
			{ text: '77 siswa', correct: false },
			{ text: '47 siswa', correct: false }
			],
		bahas: 'b34'
	},

// 35
	{
		question: '<p>Seorang petani memetik jeruk sebanyak 696 buah.</p><p> Jeruk-jeruk tersebut dimasukkan ke dalam 8 keranjang dengan isi tiap keranjang sama banyak.</p><p>Setiap keranjang berisi jeruk sama banyak.<p><p>Jumlah jeruk di tiap keranjang adalah &hellip;</p>',
		answers:
			[
			{ text: '87 buah', correct: true },
			{ text: '97 buah', correct: false },
			{ text: '77 buah', correct: false },
			{ text: '67 buah', correct: false }
			],
		bahas: 'b35'
	}
];
