/* Copyright (C) 2022 Alma Nuradnan Pramudita (email: gocodealpha@gmail.com)

This file is part of MathSD.

MathSD is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

MathSD is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with MathSD. If not, see <https://www.gnu.org/licenses/>. */

const questions = [

// 1
	{
		question: '<p>Taksiran terdekat untuk 48 cm adalah &hellip;</p>',
		answers:
			[
			{ text: '50 cm', correct: true },
			{ text: '45 cm', correct: false },
			{ text: '40 cm', correct: false },
			{ text: '55 cm', correct: false }
			],
		bahas: 'b1'
	},

// 2
	{
		question: '<p>Taksiran terdekat untuk 32 kg adalah &hellip;</p>',
		answers:
			[
			{ text: '30 kg', correct: true },
			{ text: '35 kg', correct: false },
			{ text: '25 kg', correct: false },
			{ text: '40 kg', correct: false }
			],
		bahas: 'b2'
	},

// 3
	{
		question: '<p>Taksiran terdekat untuk 1 jam 10 menit adalah &hellip;</p>',
		answers:
			[
			{ text: '1 jam', correct: true },
			{ text: '2 jam', correct: false },
			{ text: '1 jam 30 menit', correct: false },
			{ text: '30 menit', correct: false }
			],
		bahas: 'b3'
	},

// 4
	{
		question: '<p>Taksiran terdekat untuk 7 jam 50 menit adalah &hellip;</p>',
		answers:
			[
			{ text: '7 jam 30 menit', correct: false },
			{ text: '8 jam', correct: true },
			{ text: '8 jam 30 menit', correct: false },
			{ text: '7 jam', correct: false }
			],
		bahas: 'b4'
	},

// 5
	{
		question: '<p>Gambar berikut menunjukkan pukul &hellip;</p><p style="text-align: center"><img style="max-width: 70%" src="aset/05-pengukuran/05-01.svg"></p>',
		answers:
			[
			{ text: '04.00', correct: true },
			{ text: '15.00', correct: false },
			{ text: '05.00', correct: false },
			{ text: '18.00', correct: false }
			],
		bahas: 'b5'
	},

// 6
	{
		question: '<p>Gambar berikut menunjukkan pukul &hellip;</p><p style="text-align: center"><img style="max-width: 70%" src="aset/05-pengukuran/06-01.svg"></p>',
		answers:
			[
			{ text: '16.30', correct: true },
			{ text: '05.30', correct: false },
			{ text: '18.30', correct: false },
			{ text: '03.30', correct: false }
			],
		bahas: 'b6'
	},

// 7
	{
		question: '<p>Jika sekarang pukul 05.00, 3 jam kemudian pukul &hellip;</p>',
		answers:
			[
			{ text: '08.00', correct: true },
			{ text: '07.30', correct: false },
			{ text: '08.30', correct: false },
			{ text: '09.00', correct: false }
			],
		bahas: 'b7'
	},

// 8
	{
		question: '<p>Enam jam sebelum pukul 08.30 adalah pukul &hellip;</p>',
		answers:
			[
			{ text: '02.30', correct: true },
			{ text: '02.00', correct: false },
			{ text: '03.00', correct: false },
			{ text: '03.30', correct: false }
			],
		bahas: 'b8'
	},

// 9
	{
		question: '<p>Sepuluh jam setelah pukul 06.10 adalah pukul &hellip;</p>',
		answers:
			[
			{ text: '16.10', correct: true },
			{ text: '16.40', correct: false },
			{ text: '15.40', correct: false },
			{ text: '15.10', correct: false }
			],
		bahas: 'b9'
	},

// 10
	{
		question: '<p>Tiga jam sebelum pukul 07.15 adalah pukul &hellip;</p>',
		answers:
			[
			{ text: '04.15', correct: true },
			{ text: '04.45', correct: false },
			{ text: '05.15', correct: false },
			{ text: '05.45', correct: false }
			],
		bahas: 'b10'
	},

// 11
	{
		question: '<p>Taksiran terdekat untuk 2 jam 55 menit adalah &hellip;</p>',
		answers:
			[
			{ text: '3 jam', correct: true },
			{ text: '3 jam 30 menit', correct: false },
			{ text: '2 jam 30 menit', correct: false },
			{ text: '2 jam', correct: false }
			],
		bahas: 'b11'
	},

// 12
	{
		question: '<p>Gambar berikut menunjukkan pukul &hellip;</p><p style="text-align: center"><img style="max-width: 70%" src="aset/05-pengukuran/12-01.svg"></p>',
		answers:
			[
			{ text: '22.10', correct: true },
			{ text: '21.10', correct: false },
			{ text: '23.10', correct: false },
			{ text: '20.10', correct: false }
			],
		bahas: 'b12'
	},

// 13
	{
		question: '<p>Lima jam setelah pukul 06.30 adalah pukul &hellip;</p>',
		answers:
			[
			{ text: '11.30', correct: true },
			{ text: '12.00', correct: false },
			{ text: '11.00', correct: false },
			{ text: '12.30', correct: false }
			],
		bahas: 'b13'
	},

// 14
	{
		question: '<p>Empat jam sebelum pukul 12.00 adalah pukul &hellip;</p>',
		answers:
			[
			{ text: '08.00', correct: true },
			{ text: '09.00', correct: false },
			{ text: '08.30', correct: false },
			{ text: '09.30', correct: false }
			],
		bahas: 'b14'
	},

// 15
	{
		question: '<p>Gambar berikut menunjukkan pukul &hellip;</p><p style="text-align: center"><img style="max-width: 70%" src="aset/05-pengukuran/15-01.svg"></p>',
		answers:
			[
			{ text: '08.15', correct: true },
			{ text: '08.45', correct: false },
			{ text: '09.15', correct: false },
			{ text: '09.45', correct: false }
			],
		bahas: 'b15'
	},

// 16
	{
		question: '<p>Ayah berangkat kerja pukul 08.00 dan pulang kerja pukul 16.00.</p><p>Ayah bekerja selama &hellip;</p>',
		answers:
			[
			{ text: '8 jam', correct: true },
			{ text: '7 jam', correct: false },
			{ text: '6 jam', correct: false },
			{ text: '9 jam', correct: false }
			],
		bahas: 'b16'
	},

// 17
	{
		question: '<p>Kakak belajar di sekolah selama 5 jam.</p><p> Pelajaran dimulai pukul 07.15.</p><p>Pelajaran akan berakhir pukul &hellip;</p>',
		answers:
			[
			{ text: '12.15', correct: true },
			{ text: '11.15', correct: false },
			{ text: '13.15', correct: false },
			{ text: '10.15', correct: false }
			],
		bahas: 'b17'
	},

// 18
	{
		question: '<p>Elisa pergi ke rumah Nina pada pukul 11.05.</p><p>Tiga jam 30 menit kemudian dia harus pulang ke rumah.</p><p>Elisa harus pulang pukul &hellip;</p>',
		answers:
			[
			{ text: '14.35', correct: true },
			{ text: '14.05', correct: false },
			{ text: '13.35', correct: false },
			{ text: '15.05', correct: false }
			],
		bahas: 'b18'
	},

// 19
	{
		question: '<p>Arman makan siang pukul 13.45.</p><p>Empat jam yang lalu dia telah makan mi goreng.</p><p>Arman makan mi goreng pukul &hellip;</p>',
		answers:
			[
			{ text: '09.45', correct: true },
			{ text: '09.15', correct: false },
			{ text: '10.15', correct: false },
			{ text: '10.45', correct: false }
			],
		bahas: 'b19'
	},

// 20
	{
		question: '<p>Ferdi dan Lili bermain di taman selama 2 jam 15 menit.</p><p>Mereka selesai bermain pukul 17.15.</p><p>Ferdi dan Lili mulai bermain pukul &hellip;</p>',
		answers:
			[
			{ text: '15.00', correct: true },
			{ text: '15.30', correct: false },
			{ text: '14.00', correct: false },
			{ text: '14.30', correct: false }
			],
		bahas: 'b20'
	}
];
