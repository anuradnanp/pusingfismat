/* Copyright (C) 2022 Alma Nuradnan Pramudita (email: gocodealpha@gmail.com)

This file is part of MathSD.

MathSD is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

MathSD is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with MathSD. If not, see <https://www.gnu.org/licenses/>. */

const questions = [

// 1
	{
		question: '<p>Penjumlahan 256 + 512 hasilnya sama dengan &hellip;</p>',
		answers:
			[
			{ text: '512 + 256', correct: true },
			{ text: '256 &minus; 512', correct: false },
			{ text: '256 &times; 512', correct: false },
			{ text: '512 : 256', correct: false }
			],
		bahas: 'b1'
	},

// 2
	{
		question: '<p>Sifat penjumlahan berikut disebut sifat &hellip;</p><p style="text-align: center"><span style="color: green; font-size: 150%">&#x25A0;</span> + <span style="color: red; font-size: 150%">&#x25A0;</span> = <span style="color: red; font-size: 150%">&#x25A0;</span> + <span style="color: green; font-size: 150%">&#x25A0;</span></p>',
		answers:
			[
			{ text: 'komutatif', correct: true },
			{ text: 'asosiatif', correct: false },
			{ text: 'distributif', correct: false },
			{ text: 'korelatif', correct: false }
			],
		bahas: 'b2'
	},

// 3
	{
		question: '<p>100 &times; 45 &times; 4 = &hellip;</p>',
		answers:
			[
			{ text: '18000', correct: true },
			{ text: '180000', correct: false },
			{ text: '1800', correct: false },
			{ text: '900', correct: false }
			],
		bahas: 'b3'
	},

// 4
	{
		question: '<p>Operasi 56 &times; 250 &times; 4 akan mudah diselesaikan menggunakan sifat &hellip;</p>',
		answers:
			[
			{ text: 'asosiatif', correct: true },
			{ text: 'komutatif', correct: false },
			{ text: 'distributif', correct: false },
			{ text: 'korelatif', correct: false }
			],
		bahas: 'b4'
	},

// 5
	{
		question: '<p>Operasi berikut benar jika titik-titiknya bernilai &hellip;</p><p style="text-align: center">36 &times; 99 = (36 &times; &hellip; ) &minus; (36 &times; 1)</p>',
		answers:
			[
			{ text: '100', correct: true },
			{ text: '1000', correct: false },
			{ text: '10', correct: false },
			{ text: '5', correct: false }
			],
		bahas: 'b5'
	},

// 6
	{
		question: '<p style="text-align: center">(23 &times; 89) + (23 &times; 11) = 23 &times; &hellip;</p>',
		answers:
			[
			{ text: '100', correct: true },
			{ text: '90', correct: false },
			{ text: '80', correct: false },
			{ text: '70', correct: false }
			],
		bahas: 'b6'
	},

// 7
	{
		question: '<p>Lambang bilangan tiga ribu dua puluh dua yaitu &hellip;</p>',
		answers:
			[
			{ text: '3022', correct: true },
			{ text: '3000', correct: false },
			{ text: '3202', correct: false },
			{ text: '3002', correct: false }
			],
		bahas: 'b7'
	},

// 8
	{
		question: '<p>Nilai tempat angka 2 pada bilangan 2658 adalah &hellip;</p>',
		answers:
			[
			{ text: 'ribuan', correct: true },
			{ text: 'ratusan', correct: false },
			{ text: 'puluhan', correct: false },
			{ text: 'satuan', correct: false }
			],
		bahas: 'b8'
	},

// 9
	{
		question: '<p>Nilai angka 6 pada bilangan 2658 adalah &hellip;</p>',
		answers:
			[
			{ text: '600', correct: true },
			{ text: '6000', correct: false },
			{ text: '60', correct: false },
			{ text: '6', correct: false }
			],
		bahas: 'b9'
	},

// 10
	{
		question: '<p>Pembagian berikut adalah pembagian bersisa kecuali &hellip;</p>',
		answers:
			[
			{ text: '90 : 18', correct: true },
			{ text: '60 : 9', correct: false },
			{ text: '125 : 3', correct: false },
			{ text: '500 : 40', correct: false }
			],
		bahas: 'b10'
	},

// 11
	{
		question: '<p>Yang merupakan pembagian bersisa adalah &hellip;</p>',
		answers:
			[
			{ text: '256 : 15', correct: true },
			{ text: '360 : 9', correct: false },
			{ text: '512 : 32', correct: false },
			{ text: '616 : 56', correct: false }
			],
		bahas: 'b11'
	},

// 12
	{
		question: '<p>Taksiran bawah untuk 51 &times; 15 adalah &hellip;</p>',
		answers:
			[
			{ text: '500', correct: true },
			{ text: '600', correct: false },
			{ text: '1000', correct: false },
			{ text: '1200', correct: false }
			],
		bahas: 'b12'
	},

// 13
	{
		question: '<p>Taksiran atas untuk 54 &times; 18 adalah &hellip;</p>',
		answers:
			[
			{ text: '1200', correct: true },
			{ text: '1000', correct: false },
			{ text: '500', correct: false },
			{ text: '600', correct: false }
			],
		bahas: 'b13'
	},

// 14
	{
		question: '<p>Taksiran terbaik untuk 54 &times; 18 adalah &hellip;</p>',
		answers:
			[
			{ text: '1000', correct: true },
			{ text: '1200', correct: false },
			{ text: '500', correct: false },
			{ text: '600', correct: false }
			],
		bahas: 'b14'
	},

// 15
	{
		question: '<p>Taksiran terdekat untuk 1510 + 756 &minus; 299 &hellip;</p>',
		answers:
			[
			{ text: '2000', correct: true },
			{ text: '3000', correct: false },
			{ text: '5000', correct: false },
			{ text: '4100', correct: false }
			],
		bahas: 'b15'
	},

// 16
	{
		question: '<p style="text-align: center">(25 &times; 100) &minus; (25 &times; 1) = 25 &times; &hellip;</p>',
		answers:
			[
			{ text: '99', correct: true },
			{ text: '101', correct: false },
			{ text: '100', correct: false },
			{ text: '24', correct: false }
			],
		bahas: 'b16'
	},

// 17
	{
		question: '<p>297 + 895 = &hellip; + 297</p>',
		answers:
			[
			{ text: '895', correct: true },
			{ text: '297', correct: false },
			{ text: '594', correct: false },
			{ text: '1790', correct: false }
			],
		bahas: 'b17'
	},

// 18
	{
		question: '<p>465 + 709 + 291 = &hellip; + 1000</p>',
		answers:
			[
			{ text: '465', correct: true },
			{ text: '709', correct: false },
			{ text: '291', correct: false },
			{ text: '756', correct: false }
			],
		bahas: 'b18'
	},

// 19
	{
		question: '<p>Bilangan 4501 dibaca &hellip;</p>',
		answers:
			[
			{ text: 'empat ribu lima ratus satu', correct: true },
			{ text: 'empat ribu lima puluh satu', correct: false },
			{ text: 'empat ratus lima puluh satu', correct: false },
			{ text: 'empat puluh lima ribu satu', correct: false }
			],
		bahas: 'b19'
	},

// 20
	{
		question: '<p>9 ribuan + 1 puluhan + 5 satuan &hellip;</p>',
		answers:
			[
			{ text: '9015', correct: true },
			{ text: '9105', correct: false },
			{ text: '915', correct: false },
			{ text: '90105', correct: false }
			],
		bahas: 'b20'
	},

// 21
	{
		question: '<p>Nilai tempat angka 3 pada bilangan 1304 adalah &hellip;</p>',
		answers:
			[
			{ text: 'ratusan', correct: true },
			{ text: 'ribuan', correct: false },
			{ text: 'puluhan', correct: false },
			{ text: 'satuan', correct: false }
			],
		bahas: 'b21'
	},

// 22
	{
		question: '<p>Yang bernilai 100 pada bilangan 5127 yaitu angka &hellip; </p>',
		answers:
			[
			{ text: '1', correct: true },
			{ text: '5', correct: false },
			{ text: '2', correct: false },
			{ text: '7', correct: false }
			],
		bahas: 'b22'
	},

// 23
	{
		question: '<p>Bilangan 1451 jika dibulatkan ke ratusan terdekat nilainya &hellip;</p>',
		answers:
			[
			{ text: '1500', correct: true },
			{ text: '1400', correct: false },
			{ text: '1300', correct: false },
			{ text: '1600', correct: false }
			],
		bahas: 'b23'
	},

// 24
	{
		question: '<p>900 : 27 = &hellip; </p>',
		answers:
			[
			{ text: '33 sisa 9', correct: true },
			{ text: '99 sisa 3', correct: false },
			{ text: '3 sisa 99', correct: false },
			{ text: '9 sisa 33', correct: false }
			],
		bahas: 'b24'
	},

// 25
	{
		question: '<p>Taksiran terdekat untuk 3525 + 1475 adalah &hellip;</p>',
		answers:
			[
			{ text: '5000', correct: true },
			{ text: '4500', correct: false },
			{ text: '5500', correct: false },
			{ text: '4000', correct: false }
			],
		bahas: 'b25'
	},

// 26
	{
		question: '<p>tiga sifat operasi hitung bilangan yaitu &hellip;</p>',
		answers:
			[
			{ text: 'komutatif, asosiatif, distributif', correct: true },
			{ text: 'korelatif, asosiatif, distributif', correct: false },
			{ text: 'komutatif, korelatif, distributif', correct: false },
			{ text: 'komutatif, asosiatif, korelatif', correct: false }
			],
		bahas: 'b26'
	},

// 27
	{
		question: '<p>Nilai tempat tiap angka pada bilangan 3504 yaitu &hellip;</p>',
		answers:
			[
			{ text: '3 ribuan, 5 ratusan, dan 4 satuan', correct: true },
			{ text: '3 ribuan, 5 puluhan, dan 4 satuan', correct: false },
			{ text: '3 ratusan, 5 puluhan, dan 4 satuan', correct: false },
			{ text: '3 ribuan, 5 ratusan, dan 4 puluhan', correct: false }
			],
		bahas: 'b27'
	},

// 28
	{
		question: '<p>Taksiran terdekat untuk 1950 + 1925 + 2075 adalah &hellip;</p>',
		answers:
			[
			{ text: '6000', correct: true },
			{ text: '5000', correct: false },
			{ text: '5500', correct: false },
			{ text: '6500', correct: false }
			],
		bahas: 'b28'
	},

// 29
	{
		question: '<p>Ibu Abid membeli 1 kg mangga, 1 kg jeruk, dan 1 kg apel.</p><p>Harga 1 kg mangga dan 1 kg jeruk sama, yaitu Rp5750.</p><p>Harga 1 kg apel Rp8125.</p><p>Taksiran harga yang harus dibayarkan Ibu Abid adalah &hellip;</p>',
		answers:
			[
			{ text: 'Rp20000', correct: true },
			{ text: 'Rp19000', correct: false },
			{ text: 'Rp21000', correct: false },
			{ text: 'Rp18000', correct: false }
			],
		bahas: 'b29'
	},

// 30
	{
		question: '<p>Nilai sekelompok mata uang berikut adalah &hellip;</p><p style="text-align: center"><img src="aset/04-masalah-uang/uang-100000.png" style="max-width: 70%; width: 150px"><img src="aset/04-masalah-uang/uang-100000.png" style="max-width: 70%; width: 150px"><img src="aset/04-masalah-uang/uang-50000.png" style="max-width: 70%; width: 150px"><img src="aset/04-masalah-uang/uang-20000.png" style="max-width: 70%; width: 150px"><img src="aset/04-masalah-uang/uang-5000.png" style="max-width: 70%; width: 150px"><img src="aset/04-masalah-uang/uang-5000.png" style="max-width: 70%; width: 150px"><img src="aset/04-masalah-uang/uang-5000.png" style="max-width: 70%; width: 150px"><br><img src="aset/04-masalah-uang/uang-500-koin.png" style="max-width: 70%; width: 70px"><img src="aset/04-masalah-uang/uang-100-koin.png" style="max-width: 70%; width: 70px"><img src="aset/04-masalah-uang/uang-100-koin.png" style="max-width: 70%; width: 70px"><img src="aset/04-masalah-uang/uang-100-koin.png" style="max-width: 70%; width: 70px"><img src="aset/04-masalah-uang/uang-100-koin.png" style="max-width: 70%; width: 70px"><img src="aset/04-masalah-uang/uang-100-koin.png" style="max-width: 70%; width: 70px"><img src="aset/04-masalah-uang/uang-100-koin.png" style="max-width: 70%; width: 70px"></p>',
		answers:
			[
			{ text: 'Rp286100', correct: true },
			{ text: 'Rp281100', correct: false },
			{ text: 'Rp101100', correct: false },
			{ text: 'Rp280700', correct: false }
			],
		bahas: 'b30'
	}
];
