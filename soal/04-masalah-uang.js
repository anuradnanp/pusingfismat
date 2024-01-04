/* Copyright (C) 2022 Alma Nuradnan Pramudita (email: gocodealpha@gmail.com)

This file is part of MathSD.

MathSD is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

MathSD is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with MathSD. If not, see <https://www.gnu.org/licenses/>. */

const questions = [

// 1
	{
		question: '<p>Nilai sekelompok mata uang berikut adalah &hellip;</p><p style="text-align: center; word-break: break-all"><img src="aset/04-masalah-uang/uang-500-koin.png" style="max-width: 70%; width: 63px"><img src="aset/04-masalah-uang/uang-500-koin.png" style="max-width: 70%; width: 63px"></p>',
		answers:
			[
			{ text: 'Rp1000', correct: true },
			{ text: 'Rp100', correct: false },
			{ text: 'Rp200', correct: false },
			{ text: 'Rp2000', correct: false }
			],
		bahas: 'b1'
	},

// 2
	{
		question: '<p>Nilai sekelompok mata uang berikut adalah &hellip;</p><p style="text-align: center; word-break: break-all"><img src="aset/04-masalah-uang/uang-5000.png" style="max-width: 70%; width: 135px"><img src="aset/04-masalah-uang/uang-500-koin.png" style="max-width: 70%; width: 63px"><br><img src="aset/04-masalah-uang/uang-1000.png" style="max-width: 70%; width: 135px"><img src="aset/04-masalah-uang/uang-1000.png" style="max-width: 70%; width: 135px"></p>',
		answers:
			[
			{ text: 'Rp7500', correct: true },
			{ text: 'Rp2500', correct: false },
			{ text: 'Rp3000', correct: false },
			{ text: 'Rp6500', correct: false }
			],
		bahas: 'b2'
	},

// 3
	{
		question: '<p>Nilai sekelompok mata uang yang terdiri atas 1 lembar lima ribuan, 3 koin lima ratusan, dan 2 lembar seribuan adalah &hellip;</p>',
		answers:
			[
			{ text: 'Rp8500', correct: true },
			{ text: 'Rp7500', correct: false },
			{ text: 'Rp9500', correct: false },
			{ text: 'Rp6500', correct: false }
			],
		bahas: 'b3'
	},

// 4
	{
		question: '<p>Nilai sekelompok mata uang yang terdiri atas 2 lembar sepuluh ribuan, 3 lembar lima ribuan, dan 2 lembar seribuan adalah &hellip;</p>',
		answers:
			[
			{ text: 'Rp37000', correct: true },
			{ text: 'Rp34000', correct: false },
			{ text: 'Rp24000', correct: false },
			{ text: 'Rp27000', correct: false }
			],
		bahas: 'b4'
	},

// 5
	{
		question: '<p>Nilai 6 lembar lima ribuan sama dengan mata uang sepuluh ribuan sebanyak &hellip;</p>',
		answers:
			[
			{ text: '3 lembar', correct: true },
			{ text: '6 lembar', correct: false },
			{ text: '4 lembar', correct: false },
			{ text: '5 lembar', correct: false }
			],
		bahas: 'b5'
	},

// 6
	{
		question: '<p>Nilai 2 lembar dua puluh ribuan sama dengan mata uang lima ribuan sebanyak &hellip;</p>',
		answers:
			[
			{ text: '8', correct: true },
			{ text: '4', correct: false },
			{ text: '6', correct: false },
			{ text: '10', correct: false }
			],
		bahas: 'b6'
	},

// 7
	{
		question: '<p>Harga sebungkus roti adalah Rp2300.</p><p>Jika roti tersebut dibeli dengan 1 lembar lima ribuan, kembaliannya adalah &hellip;</p>',
		answers:
			[
			{ text: 'Rp2700', correct: true },
			{ text: 'Rp3700', correct: false },
			{ text: 'Rp7300', correct: false },
			{ text: 'Rp7700', correct: false }
			],
		bahas: 'b7'
	},

// 8
	{
		question: '<p>Harga sebuah tas adalah Rp35000.</p><p>Jika tas tersebut dibeli dengan 2 lembar dua puluh ribuan, kembaliannya adalah &hellip;</p>',
		answers:
			[
			{ text: 'Rp5000', correct: true },
			{ text: 'Rp75000', correct: false },
			{ text: 'Rp15000', correct: false },
			{ text: 'Rp55000', correct: false }
			],
		bahas: 'b8'
	},

// 9
	{
		question: '<p>Harga 1 buah buku adalah Rp1800, 1 buah tempat pensil Rp3500, dan sebuah penggaris Rp1500.</p><p>Uang yang harus dibayarkan untuk membeli seluruh barang tadi adalah &hellip;</p>',
		answers:
			[
			{ text: 'Rp6800', correct: true },
			{ text: 'Rp5800', correct: false },
			{ text: 'Rp4800', correct: false },
			{ text: 'Rp7800', correct: false }
			],
		bahas: 'b9'
	},

// 10
	{
		question: '<p>Dengan uang dua puluh ribu dapat dibeli 10 buku tulis.</p><p>Harga 1 buku tulis adalah &hellip;</p>',
		answers:
			[
			{ text: 'Rp2000', correct: true },
			{ text: 'Rp4000', correct: false },
			{ text: 'Rp3000', correct: false },
			{ text: 'Rp10000', correct: false }
			],
		bahas: 'b10'
	},

// 11
	{
		question: '<p>Harga sebuah kue adalah Rp1300.</p><p>Harga 6 buah kue adalah &hellip;</p>',
		answers:
			[
			{ text: 'Rp7800', correct: true },
			{ text: 'Rp6800', correct: false },
			{ text: 'Rp8800', correct: false },
			{ text: 'Rp7200', correct: false }
			],
		bahas: 'b11'
	},

// 12
	{
		question: '<p>Uang Andi adalah 1 lembar dua puluh ribuan.</p><p>Ia kemudian diberi Nenek 2 lembar lima ribuan dan 5 lembar seribuan.</p><p>Total uang Andi adalah &hellip;</p>',
		answers:
			[
			{ text: 'Rp35000', correct: true },
			{ text: 'Rp30000', correct: false },
			{ text: 'Rp40000', correct: false },
			{ text: 'Rp25000', correct: false }
			],
		bahas: 'b12'
	},

// 13
	{
		question: '<p>Nilai sekelompok mata uang berikut adalah &hellip;</p><p style="text-align: center; word-break: break-all"><img src="aset/04-masalah-uang/uang-20000.png" style="max-width: 70%; width: 135px"><img src="aset/04-masalah-uang/uang-5000.png" style="max-width: 70%; width: 135px"><img src="aset/04-masalah-uang/uang-1000.png" style="max-width: 70%; width: 135px"><img src="aset/04-masalah-uang/uang-1000.png" style="max-width: 70%; width: 135px"></p>',
		answers:
			[
			{ text: 'Rp27000', correct: true },
			{ text: 'Rp23000', correct: false },
			{ text: 'Rp32000', correct: false },
			{ text: 'Rp35000', correct: false }
			],
		bahas: 'b13'
	},

// 14
	{
		question: '<p>Dua lembar lima puluh ribuan senilai dengan uang lima ribuan sebanyak &hellip;</p>',
		answers:
			[
			{ text: '20 lembar', correct: true },
			{ text: '10 lembar', correct: false },
			{ text: '50 lembar', correct: false },
			{ text: '100 lembar', correct: false }
			],
		bahas: 'b14'
	},

// 15
	{
		question: '<p>Selembar uang lima puluh ribuan jika dibelanjakan senilai Rp27500, kembaliannya adalah &hellip;</p>',
		answers:
			[
			{ text: 'Rp22500', correct: true },
			{ text: 'Rp77500', correct: false },
			{ text: 'Rp72500', correct: false },
			{ text: 'Rp23500', correct: false }
			],
		bahas: 'b15'
	},

// 16
	{
		question: '<p>Nilai sekelompok mata uang berikut adalah &hellip;</p><p style="text-align: center; word-break: break-all"><img src="aset/04-masalah-uang/uang-10000.png" style="max-width: 70%; width: 135px"><img src="aset/04-masalah-uang/uang-1000.png" style="max-width: 70%; width: 135px"><img src="aset/04-masalah-uang/uang-5000.png" style="max-width: 70%; width: 135px"><img src="aset/04-masalah-uang/uang-5000.png" style="max-width: 70%; width: 135px"></p>',
		answers:
			[
			{ text: 'Rp21000', correct: true },
			{ text: 'Rp15000', correct: false },
			{ text: 'Rp17000', correct: false },
			{ text: 'Rp12000', correct: false }
			],
		bahas: 'b16'
	},

// 17
	{
		question: '<p>Uang Sinta berupa 4 lembar lima ribuan, 5 koin lima ratusan, dan 10 koin seratusan.</p><p>Total uang Sinta adalah &hellip;</p>',
		answers:
			[
			{ text: 'Rp23500', correct: true },
			{ text: 'Rp22500', correct: false },
			{ text: 'Rp24500', correct: false },
			{ text: 'Rp21500', correct: false }
			],
		bahas: 'b17'
	},

// 18
	{
		question: '<p>Uang Rudi berupa 1 lembar sepuluh ribuan, jika ditukar dengan koin lima ratusan Rudi akan mendapat	&hellip;</p>',
		answers:
			[
			{ text: '20 koin', correct: true },
			{ text: '25 koin', correct: false },
			{ text: '40 koin', correct: false },
			{ text: '100 koin', correct: false }
			],
		bahas: 'b18'
	},

// 19
	{
		question: '<p>Uang Lita berupa 2 lembar lima ribuan, dibelikan buku seharga Rp6500 sehingga kembalian yang diterima senilai &hellip;</p>',
		answers:
			[
			{ text: 'Rp3500', correct: true },
			{ text: 'Rp4500', correct: false },
			{ text: 'Rp1500', correct: false },
			{ text: 'Rp16500', correct: false }
			],
		bahas: 'b19'
	},

// 20
	{
		question: '<p>Harga sebuah jeruk adalah Rp1800.</p><p>Ibu akan membelinya sebanyak 5 buah sehingga uang yang harus dibayarkan adalah &hellip;</p>',
		answers:
			[
			{ text: 'Rp9000', correct: true },
			{ text: 'Rp8000', correct: false },
			{ text: 'Rp9500', correct: false },
			{ text: 'Rp8500', correct: false }
			],
		bahas: 'b20'
	},

// 21
	{
		question: '<p>Uang Bibi berupa 1 lembar dua puluh ribuan dan 1 lembar sepuluh ribuan.</p><p>Dengan uang tersebut, bisa dibeli gula pasir tepat 5 kg.</p><p>Harga 1 kg gula pasir adalah &hellip;</p>',
		answers:
			[
			{ text: 'Rp6000', correct: true },
			{ text: 'Rp5000', correct: false },
			{ text: 'Rp4000', correct: false },
			{ text: 'Rp8000', correct: false }
			],
		bahas: 'b21'
	},

// 22
	{
		question: '<p>Nilai sekelompok mata uang berikut adalah &hellip;</p><p style="text-align: center; word-break: break-all"><img src="aset/04-masalah-uang/uang-10000.png" style="max-width: 70%; width: 135px"><img src="aset/04-masalah-uang/uang-5000.png" style="max-width: 70%; width: 135px"><br><img src="aset/04-masalah-uang/uang-500-koin.png" style="max-width: 70%; width: 63px"><img src="aset/04-masalah-uang/uang-500-koin.png" style="max-width: 70%; width: 63px"><img src="aset/04-masalah-uang/uang-500-koin.png" style="max-width: 70%; width: 63px"></p>',
		answers:
			[
			{ text: 'Rp16500', correct: true },
			{ text: 'Rp18000', correct: false },
			{ text: 'Rp15500', correct: false },
			{ text: 'Rp14000', correct: false }
			],
		bahas: 'b22'
	},

// 23
	{
		question: '<p>Uang Doni berupa 3 lembar lima ribuan.</p><p>Jika Doni membeli buku seharga Rp12500, kembaliannya adalah &hellip;</p>',
		answers:
			[
			{ text: 'Rp2500', correct: true },
			{ text: 'Rp3500', correct: false },
			{ text: 'Rp27500', correct: false },
			{ text: 'Rp7500', correct: false }
			],
		bahas: 'b23'
	},

// 24
	{
		question: '<p>Uang Hasan Rp30000, dibelanjakan sebesar Rp18000.</p><p>Sisa uang Hasan adalah &hellip;</p>',
		answers:
			[
			{ text: 'Rp12000', correct: true },
			{ text: 'Rp2000', correct: false },
			{ text: 'Rp17000', correct: false },
			{ text: 'Rp7000', correct: false }
			],
		bahas: 'b24'
	},

// 25
	{
		question: '<p>Bu Gina mempunyai 2 lembar uang lima ribuan, dibagikan merata kepada 10 anak.</p><p>Tiap anak menerima uang sebesar &hellip;</p>',
		answers:
			[
			{ text: 'Rp1000', correct: true },
			{ text: 'Rp2000', correct: false },
			{ text: 'Rp500', correct: false },
			{ text: 'Rp2500', correct: false }
			],
		bahas: 'b25'
	},

// 26
	{
		question: '<p>Paman pergi ke pasar membeli beras seharga Rp21000 dan gula pasir seharga Rp6000.</p><p>Paman harus membayar total senilai &hellip;</p>',
		answers:
			[
			{ text: 'Rp27000', correct: true },
			{ text: 'Rp25000', correct: false },
			{ text: 'Rp29000', correct: false },
			{ text: 'Rp15000', correct: false }
			],
		bahas: 'b26'
	},

// 27
	{
		question: '<p>Harga sepasang sepatu adalah Rp62500 dan sepasang kaos kaki Rp8500.</p><p>Jika Yanti membelinya dengan 2 lembar uang lima puluh ribuan, kembaliannya adalah &hellip;</p>',
		answers:
			[
			{ text: 'Rp29000', correct: true },
			{ text: 'Rp30000', correct: false },
			{ text: 'Rp28000', correct: false },
			{ text: 'Rp27000', correct: false }
			],
		bahas: 'b27'
	},

// 28
	{
		question: '<p>Setiap hari Iwan menabung sebesar Rp2000.</p><p>Iwan menabung selama sebulan.</p><p>Tabungan Iwan setelah sebulan nilainya &hellip;</p>',
		answers:
			[
			{ text: 'Rp60000', correct: true },
			{ text: 'Rp30000', correct: false },
			{ text: 'Rp600000', correct: false },
			{ text: 'Rp300000', correct: false }
			],
		bahas: 'b28'
	},

// 29
	{
		question: '<p>Nenek Umi mempunyai uang Rp80000.</p><p>Nenek Umi memberikan Rp12000 pada cucunya.</p><p>Sisa uang Nenek Umi adalah &hellip;</p>',
		answers:
			[
			{ text: 'Rp68000', correct: true },
			{ text: 'Rp78000', correct: false },
			{ text: 'Rp58000', correct: false },
			{ text: 'Rp92000', correct: false }
			],
		bahas: 'b29'
	},

// 30
	{
		question: '<p>Harga sebuah baju adalah Rp17500.</p><p>Ayah membeli 2 buah baju dan membayar dengan 2 lembar uang dua puluh ribuan.</p><p>Kembalian yang diterima Ayah besarnya &hellip;</p>',
		answers:
			[
			{ text: 'Rp5000', correct: true },
			{ text: 'Rp15000', correct: false },
			{ text: 'Rp16000', correct: false },
			{ text: 'Rp6000', correct: false }
			],
		bahas: 'b30'
	}
];
