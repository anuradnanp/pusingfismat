/* Copyright (C) 2022 Alma Nuradnan Pramudita (email: gocodealpha@gmail.com)

This file is part of MathSD.

MathSD is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

MathSD is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with MathSD. If not, see <https://www.gnu.org/licenses/>. */

const questions = [

// 1
	{
		question: '<p>Bulan Oktober lamanya &hellip;</p>',
		answers:
			[
			{ text: '31 hari', correct: true },
			{ text: '30 hari', correct: false },
			{ text: '28 hari', correct: false },
			{ text: '29 hari', correct: false }
			],
		bahas: 'b1'
	},

// 2
	{
		question: '<p>Bulan April lamanya &hellip;</p>',
		answers:
			[
			{ text: '30 hari', correct: true },
			{ text: '31 hari', correct: false },
			{ text: '28 hari', correct: false },
			{ text: '29 hari', correct: false }
			],
		bahas: 'b2'
	},

// 3
	{
		question: '<p>Sepekan adalah hari Senin sampai hari &hellip;</p>',
		answers:
			[
			{ text: 'Minggu', correct: true },
			{ text: 'Sabtu', correct: false },
			{ text: 'Jumat', correct: false },
			{ text: 'Kamis', correct: false }
			],
		bahas: 'b3'
	},

// 4
	{
		question: '<p style="text-align: center">5 pekan = &hellip;</p>',
		answers:
			[
			{ text: '35 hari', correct: true },
			{ text: '30 hari', correct: false },
			{ text: '40 hari', correct: false },
			{ text: '25 hari', correct: false }
			],
		bahas: 'b4'
	},

// 5
	{
		question: '<p style="text-align: center">2 tahun + 2 bulan = &hellip;</p>',
		answers:
			[
			{ text: '26 bulan', correct: true },
			{ text: '24 bulan', correct: false },
			{ text: '28 bulan', correct: false },
			{ text: '30 bulan', correct: false }
			],
		bahas: 'b5'
	},

// 6
	{
		question: '<p>Bu Marni tinggal di Solo selama 2 tahun 3 bulan, atau selama &hellip;</p>',
		answers:
			[
			{ text: '27 bulan', correct: true },
			{ text: '15 bulan', correct: false },
			{ text: '23 bulan', correct: false },
			{ text: '33 bulan', correct: false }
			],
		bahas: 'b6'
	},

// 7
	{
		question: '<p style="text-align: center">420 menit + 2 jam = &hellip;</p>',
		answers:
			[
			{ text: '9 jam', correct: true },
			{ text: '8 jam', correct: false },
			{ text: '10 jam', correct: false },
			{ text: '7 jam', correct: false }
			],
		bahas: 'b7'
	},

// 8
	{
		question: '<p style="text-align: center">6 menit + 50 detik = &hellip;</p>',
		answers:
			[
			{ text: '410 detik', correct: true },
			{ text: '110 detik', correct: false },
			{ text: '210 detik', correct: false },
			{ text: '310 detik', correct: false }
			],
		bahas: 'b8'
	},

// 9
	{
		question: '<p style="text-align: center">5 jam – 48 menit = &hellip;</p>',
		answers:
			[
			{ text: '252 menit', correct: true },
			{ text: '132 menit', correct: false },
			{ text: '372 menit', correct: false },
			{ text: '492 menit', correct: false }
			],
		bahas: 'b9'
	},

// 10
	{
		question: '<p style="text-align: center">7 m + 10 dm = &hellip;</p>',
		answers:
			[
			{ text: '800 cm', correct: true },
			{ text: '17 cm', correct: false },
			{ text: '170 cm', correct: false },
			{ text: '80 cm', correct: false }
			],
		bahas: 'b10'
	},

// 11
	{
		question: '<p style="text-align: center">3 m + 5 dm = &hellip;</p>',
		answers:
			[
			{ text: '3500 mm', correct: true },
			{ text: '350 mm', correct: false },
			{ text: '800 mm', correct: false },
			{ text: '8000 mm', correct: false }
			],
		bahas: 'b11'
	},

// 12
	{
		question: '<p style="text-align: center">4 kg + 10 hg = &hellip;</p>',
		answers:
			[
			{ text: '50 ons', correct: true },
			{ text: '14 ons', correct: false },
			{ text: '41 ons', correct: false },
			{ text: '5 ons', correct: false }
			],
		bahas: 'b12'
	},

// 13
	{
		question: '<p style="text-align: center">8 ons + 200 g = &hellip;</p>',
		answers:
			[
			{ text: '1000 g', correct: true },
			{ text: '280 g', correct: false },
			{ text: '208 g', correct: false },
			{ text: '100 g', correct: false }
			],
		bahas: 'b13'
	},

// 14
	{
		question: '<p style="text-align: center">7 kg – 50 ons = &hellip;</p>',
		answers:
			[
			{ text: '20 ons', correct: true },
			{ text: '65 ons', correct: false },
			{ text: '10 ons', correct: false },
			{ text: '55 ons', correct: false }
			],
		bahas: 'b14'
	},

// 15
	{
		question: '<p style="text-align: center">5 kg – 5 hg = &hellip;</p>',
		answers:
			[
			{ text: '45 ons', correct: true },
			{ text: '50 ons', correct: false },
			{ text: '40 ons', correct: false },
			{ text: '35 ons', correct: false }
			],
		bahas: 'b15'
	},

// 16
	{
		question: '<p>Bulan berikut yang mempunyai 31 hari adalah &hellip;</p>',
		answers:
			[
			{ text: 'Januari, Maret, Mei, Juli', correct: true },
			{ text: 'Januari, Maret, April, Mei', correct: false },
			{ text: 'Juli, Agustus, September, Oktober', correct: false },
			{ text: 'Juni, Juli, Agustus, September', correct: false }
			],
		bahas: 'b16'
	},

// 17
	{
		question: '<p style="text-align: center">3 bulan = &hellip;</p>',
		answers:
			[
			{ text: '12 pekan', correct: true },
			{ text: '15 pekan', correct: false },
			{ text: '9 pekan', correct: false },
			{ text: '18 pekan', correct: false }
			],
		bahas: 'b17'
	},

// 18
	{
		question: '<p style="text-align: center">4 jam + 240 detik = &hellip;</p>',
		answers:
			[
			{ text: '244 menit', correct: true },
			{ text: '64 menit', correct: false },
			{ text: '124 menit', correct: false },
			{ text: '300 menit', correct: false }
			],
		bahas: 'b18'
	},

// 19
	{
		question: '<p style="text-align: center">1 kg + 3 ons = &hellip;</p>',
		answers:
			[
			{ text: '1300 g', correct: true },
			{ text: '4 g', correct: false },
			{ text: '400 g', correct: false },
			{ text: '130 g', correct: false }
			],
		bahas: 'b19'
	},

// 20
	{
		question: '<p style="text-align: center">8 dm + 5 cm = &hellip;</p>',
		answers:
			[
			{ text: '85 cm', correct: true },
			{ text: '85 m', correct: false },
			{ text: '85 mm', correct: false },
			{ text: '13 cm', correct: false }
			],
		bahas: 'b20'
	},

// 21
	{
		question: '<p>Warga Bangu dapat mendirikan gedung dalam 3 bulan 3 pekan 5 hari, atau selama &hellip;</p>',
		answers:
			[
			{ text: '116 hari', correct: true },
			{ text: '106 hari', correct: false },
			{ text: '96 hari', correct: false },
			{ text: '126 hari', correct: false }
			],
		bahas: 'b21'
	},

// 22
	{
		question: '<p style="text-align: center">6 kg + 7 hg = &hellip;</p>',
		answers:
			[
			{ text: '670 dag', correct: true },
			{ text: '130 dag', correct: false },
			{ text: '1300 dag', correct: false },
			{ text: '6700 dag', correct: false }
			],
		bahas: 'b22'
	},

// 23
	{
		question: '<p style="text-align: center">2 tahun + 4 pekan = &hellip;</p>',
		answers:
			[
			{ text: '108 pekan', correct: true },
			{ text: '24 pekan', correct: false },
			{ text: '28 pekan', correct: false },
			{ text: '64 pekan', correct: false }
			],
		bahas: 'b23'
	},

// 24
	{
		question: '<p style="text-align: center">1 m + 50 cm = &hellip;</p>',
		answers:
			[
			{ text: '15 dm', correct: true },
			{ text: '51 dm', correct: false },
			{ text: '60 dm', correct: false },
			{ text: '6 dm', correct: false }
			],
		bahas: 'b24'
	},

// 25
	{
		question: '<p style="text-align: center">1 kg &minus; 5 ons = &hellip;</p>',
		answers:
			[
			{ text: '500 g', correct: true },
			{ text: '950 g', correct: false },
			{ text: '50 g', correct: false },
			{ text: '95 g', correct: false }
			],
		bahas: 'b25'
	},

// 26
	{
		question: '<p>Diana berada di Yogyakarta dari 30 Maret sampai 5 April, atau selama &hellip;</p>',
		answers:
			[
			{ text: '6 hari', correct: true },
			{ text: '5 hari', correct: false },
			{ text: '36 hari', correct: false },
			{ text: '35 hari', correct: false }
			],
		bahas: 'b26'
	},

// 27
	{
		question: '<p>Herman membeli 3 kg mangga, atau seberat &hellip;</p>',
		answers:
			[
			{ text: '30 ons', correct: true },
			{ text: '300 ons', correct: false },
			{ text: '150 ons', correct: false },
			{ text: '15 ons', correct: false }
			],
		bahas: 'b27'
	},

// 28
	{
		question: '<p>Tini mempunyai kain sepanjang 4 m, atau sepanjang &hellip;</p>',
		answers:
			[
			{ text: ' 400 cm', correct: true },
			{ text: '40 cm', correct: false },
			{ text: '200 cm', correct: false },
			{ text: '20 cm', correct: false }
			],
		bahas: 'b28'
	},

// 29
	{
		question: '<p>Gedung sekolah selesai dibangun dalam 9 bulan 21 hari, atau selama &hellip;</p>',
		answers:
			[
			{ text: '291 hari', correct: true },
			{ text: '261 hari', correct: false },
			{ text: '321 hari', correct: false },
			{ text: '231 hari', correct: false }
			],
		bahas: 'b29'
	},

// 30
	{
		question: '<p>Umur Siska 48 bulan.</p><p>Umur Dita 1 tahun lebih tua dari Siska.</p><p>Umur Dita adalah &hellip;</p>',
		answers:
			[
			{ text: '5 tahun', correct: true },
			{ text: '49 tahun', correct: false },
			{ text: '17 tahun', correct: false },
			{ text: '3 tahun', correct: false }
			],
		bahas: 'b30'
	}
];
