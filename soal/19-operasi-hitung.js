/* Copyright (C) 2022 Alma Nuradnan Pramudita (email: gocodealpha@gmail.com)

This file is part of MathSD.

MathSD is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

MathSD is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with MathSD. If not, see <https://www.gnu.org/licenses/>. */

const questions = [

// 1
	{
		question: '<p>Harga sebuah piring Rp3250.</p><p>Harga 3 lusin piring adalah &hellip;</p>',
		answers:
			[
			{ text: 'Rp117000', correct: true },
			{ text: 'Rp100700', correct: false },
			{ text: 'Rp110250', correct: false },
			{ text: 'Rp111700', correct: false }
			],
		bahas: 'b1'
	},

// 2
	{
		question: '<p style="text-align: center">200 + 125 : 25 = &hellip;</p>',
		answers:
			[
			{ text: '205', correct: true },
			{ text: '13', correct: false },
			{ text: '25', correct: false },
			{ text: '215', correct: false }
			],
		bahas: 'b2'
	},

// 3
	{
		question: '<p>KPK dari 12 dan 18 adalah &hellip;</p>',
		answers:
			[
			{ text: '36', correct: true },
			{ text: '24', correct: false },
			{ text: '48', correct: false },
			{ text: '72', correct: false }
			],
		bahas: 'b3'
	},

// 4
	{
		question: '<p>$$\\left(15^2+10^2\\right)-\\left(8^2+7^2\\right)=\\dots$$</p>',
		answers:
			[
			{ text: '212', correct: true },
			{ text: '312', correct: false },
			{ text: '20', correct: false },
			{ text: '25', correct: false }
			],
		bahas: 'b4'
	},

// 5
	{
		question: '<p>$$\\frac{8^2+7^2-6^2}{8+6-7}=\\dots$$</p>',
		answers:
			[
			{ text: '11', correct: true },
			{ text: '10', correct: false },
			{ text: '\\(2\\tfrac{4}{7}\\)', correct: false },
			{ text: '\\(2\\tfrac{2}{5}\\)', correct: false }
			],
		bahas: 'b5'
	},

// 6
	{
		question: '<p>$$\\left(\\sqrt{81}+\\sqrt{36}\\right):\\sqrt{9}=\\dots$$</p>',
		answers:
			[
			{ text: '5', correct: true },
			{ text: '2', correct: false },
			{ text: '3', correct: false },
			{ text: '4', correct: false }
			],
		bahas: 'b6'
	},

// 7
	{
		question: '<p>Luas sebuah persegi 196 cm<sup>2</sup>.</p><p>Panjang sisi persegi	tersebut adalah &hellip;</p>',
		answers:
			[
			{ text: '14 cm', correct: true },
			{ text: '1,4 cm', correct: false },
			{ text: '14 dm', correct: false },
			{ text: '16 cm', correct: false }
			],
		bahas: 'b7'
	},

// 8
	{
		question: '<p>$$(-12+15)+(-9)=\\dots$$</p>',
		answers:
			[
			{ text: '&minus;6', correct: true },
			{ text: '6', correct: false },
			{ text: '12', correct: false },
			{ text: '&minus;12', correct: false }
			],
		bahas: 'b8'
	},

// 9
	{
		question: '<p>Suhu udara di Bunaken kemarin 4&deg;C.</p><p>Hari ini suhunya turun 9&deg;C.</p><p>Suhu udara di Bunaken hari ini adalah &hellip;</p>',
		answers:
			[
			{ text: '&minus;5&deg;C', correct: true },
			{ text: '&minus;13&deg;C', correct: false },
			{ text: '13&deg;C', correct: false },
			{ text: '5&deg;C', correct: false }
			],
		bahas: 'b9'
	},

// 10
	{
		question: '<p>$$-16-(-30)+6=\\dots$$</p>',
		answers:
			[
			{ text: '20', correct: true },
			{ text: '&minus;20', correct: false },
			{ text: '52', correct: false },
			{ text: '&minus;52', correct: false }
			],
		bahas: 'b10'
	},

// 11
	{
		question: '<p>Taksiran terdekat 138 + 292 adalah &hellip;</p>',
		answers:
			[
			{ text: '400', correct: true },
			{ text: '300', correct: false },
			{ text: '500', correct: false },
			{ text: '600', correct: false }
			],
		bahas: 'b11'
	},

// 12
	{
		question: '<p>Jumlah penduduk kampung A 6713 orang.</p><p>Jumlah penduduk kampung B 8475 orang.</p><p>Dengan pembulatan ke ribuan terdekat, jumlah penduduk kedua kampung adalah &hellip;</p>',
		answers:
			[
			{ text: '15000', correct: true },
			{ text: '13000', correct: false },
			{ text: '14000', correct: false },
			{ text: '16000', correct: false }
			],
		bahas: 'b12'
	},

// 13
	{
		question: '<p>KPK dan FPB dari 15, 18, dan 20 adalah &hellip;</p>',
		answers:
			[
			{ text: '180 dan 1', correct: true },
			{ text: '90 dan 2', correct: false },
			{ text: '90 dan 1', correct: false },
			{ text: '180 dan 3', correct: false }
			],
		bahas: 'b13'
	},

// 14
	{
		question: '<p style="text-align: center">(&minus;64 + (&minus;9) &times; 4) : (&minus;25) = &hellip;</p>',
		answers:
			[
			{ text: '4', correct: true },
			{ text: '&minus;4', correct: false },
			{ text: '5', correct: false },
			{ text: '&minus;5', correct: false }
			],
		bahas: 'b14'
	},

// 15
	{
		question: '<p>Luas sebuah persegi panjang sama dengan luas sebuah persegi.</p><p>Persegi panjang tersebut panjangnya 27 cm dan lebarnya 12 cm.</p><p>Panjang sisi persegi adalah &hellip;</p>',
		answers:
			[
			{ text: '18 cm', correct: true },
			{ text: '16 cm', correct: false },
			{ text: '8 cm', correct: false },
			{ text: '12 cm', correct: false }
			],
		bahas: 'b15'
	},

// 16
	{
		question: '<p>$$-8\\times (-15+20)=\\dots$$</p>',
		answers:
			[
			{ text: '&minus;40', correct: true },
			{ text: '40', correct: false },
			{ text: '280', correct: false },
			{ text: '&minus;280', correct: false }
			],
		bahas: 'b16'
	},

// 17
	{
		question: '<p>$$(-65+85)+(-20)=\\dots$$</p>',
		answers:
			[
			{ text: '0', correct: true },
			{ text: '40', correct: false },
			{ text: '&minus;40', correct: false },
			{ text: '130', correct: false }
			],
		bahas: 'b17'
	},

// 18
	{
		question: '<p>$$-5+(-7)=\\dots$$</p>',
		answers:
			[
			{ text: '&minus;12', correct: true },
			{ text: '12', correct: false },
			{ text: '&minus;2', correct: false },
			{ text: '2', correct: false }
			],
		bahas: 'b18'
	},

// 19
	{
		question: '<p>$$-7+(-13)+25=\\dots$$</p>',
		answers:
			[
			{ text: '5', correct: true },
			{ text: '&minus;5', correct: false },
			{ text: '45', correct: false },
			{ text: '&minus;45', correct: false }
			],
		bahas: 'b19'
	},

// 20
	{
		question: '<p>Taksiran bulat terbaik untuk \\(12\\tfrac{3}{4}-7\\tfrac{2}{5}+3\\tfrac{5}{8}\\) adalah &hellip;</p>',
		answers:
			[
			{ text: '10', correct: true },
			{ text: '11', correct: false },
			{ text: '12', correct: false },
			{ text: '9', correct: false }
			],
		bahas: 'b20'
	},

// 21
	{
		question: '<p>Taksiran bulat terbaik untuk \\(35\\tfrac{3}{10}:4\\tfrac{4}{7}\\times 2\\tfrac{5}{6}\\) adalah &hellip;</p>',
		answers:
			[
			{ text: '21', correct: true },
			{ text: '25', correct: false },
			{ text: '20', correct: false },
			{ text: '24', correct: false }
			],
		bahas: 'b21'
	},

// 22
	{
		question: '<p>$$-12-(-7)=\\dots$$</p>',
		answers:
			[
			{ text: '&minus;5', correct: true },
			{ text: '5', correct: false },
			{ text: '19', correct: false },
			{ text: '&minus;19', correct: false }
			],
		bahas: 'b22'
	},

// 23
	{
		question: '<p>$$11+(-15)-(-11)=\\dots$$</p>',
		answers:
			[
			{ text: '7', correct: true },
			{ text: '&minus;7', correct: false },
			{ text: '15', correct: false },
			{ text: '&minus;15', correct: false }
			],
		bahas: 'b23'
	},

// 24
	{
		question: '<p>Taksiran bulat terbaik ke ratusan terdekat untuk 2465 + 1248 &minus; 658 adalah &hellip;</p>',
		answers:
			[
			{ text: '3000', correct: true },
			{ text: '2900', correct: false },
			{ text: '3100', correct: false },
			{ text: '3200', correct: false }
			],
		bahas: 'b24'
	},

// 25
	{
		question: '<p>FPB dan KPK dari 24 dan 36 adalah &hellip;</p>',
		answers:
			[
			{ text: '12 dan 72', correct: true },
			{ text: '6 dan 72', correct: false },
			{ text: '12 dan 96', correct: false },
			{ text: '6 dan 96', correct: false }
			],
		bahas: 'b25'
	},

// 26
	{
		question: '<p>Hasil kali \\(6\\tfrac{2}{3}\\times 4\\tfrac{2}{5}\\) pasti di antara &hellip;</p>',
		answers:
			[
			{ text: '24 dan 35', correct: true },
			{ text: '18 dan 29', correct: false },
			{ text: '30 dan 41', correct: false },
			{ text: '17 dan 28', correct: false },
			],
		bahas: 'b26'
	},

// 27
	{
		question: '<p>Hasil kali \\(7\\tfrac{1}{2}\\times 4\\tfrac{1}{3}\\) pasti di antara &hellip;</p>',
		answers:
			[
			{ text: '28 dan 40', correct: true },
			{ text: '20 dan 32', correct: false },
			{ text: '33 dan 45', correct: false },
			{ text: '35 dan 47', correct: false }
			],
		bahas: 'b27'
	},

// 28
	{
		question: '<p>Anto, Beni, dan Condro mula-mula berenang bersama-sama.</p><p>Anto berenang tiap 6 hari.</p><p>Beni berenang tiap 9 hari.</p><p>Condro berenang tiap 12 hari.</p><p>Mereka bertiga akan berenang bersama-sama lagi tiap &hellip;</p>',
		answers:
			[
			{ text: '36 hari', correct: true },
			{ text: '18 hari', correct: false },
			{ text: '12 hari', correct: false },
			{ text: '72 hari', correct: false }
			],
		bahas: 'b28'
	},

// 29
	{
		question: '<p>Seorang peternak punya ayam petelur 2760 ekor.</p><p>Seekor ayam tiap bulan bertelur rata-rata 20 butir.</p><p>Sebanyak 16 butir telur bobotnya 1 kg.</p><p>Satu bulan terdiri atas 30 hari.</p><p>Bobot telur yang didapat dalam sehari adalah &hellip;</p>',
		answers:
			[
			{ text: '115 kg', correct: true },
			{ text: '128 kg', correct: false },
			{ text: '184 kg', correct: false },
			{ text: '23 kg', correct: false }
			],
		bahas: 'b29'
	},

// 30
	{
		question: '<p>Dibeli 45 ikat manggis.</p><p>Setiap ikat berisi 32 buah manggis.</p><p>Setiap 36 manggis diletakkan pada satu piring.</p><p>Jumlah piring yang dibutuhkan untuk menyajikan seluruh manggis adalah &hellip;</p>',
		answers:
			[
			{ text: '40 piring', correct: true },
			{ text: '113 piring', correct: false },
			{ text: '41 piring', correct: false },
			{ text: '49 piring', correct: false }
			],
		bahas: 'b30'
	},

// 31
	{
		question: '<p>KPK dan FPB dari 48 dan 60 adalah &hellip;</p>',
		answers:
			[
			{ text: '240 dan 12', correct: true },
			{ text: '120 dan 12', correct: false },
			{ text: '120 dan 24', correct: false },
			{ text: '240 dan 24', correct: false }
			],
		bahas: 'b31'
	},

// 32
	{
		question: '<p>KPK dan FPB dari 24, 30, dan 36 adalah &hellip;</p>',
		answers:
			[
			{ text: '360 dan 6', correct: true },
			{ text: '180 dan 6', correct: false },
			{ text: '360 dan 12', correct: false },
			{ text: '180 dan 12', correct: false }
			],
		bahas: 'b32'
	},

// 33
	{
		question: '<p>$$20^2 + 5^2\\times 4^2=\\dots$$</p>',
		answers:
			[
			{ text: '800', correct: true },
			{ text: '441', correct: false },
			{ text: '6800', correct: false },
			{ text: '1600', correct: false }
			],
		bahas: 'b33'
	},

// 34
	{
		question: '<p>$$20^2 -12^2 :3^2=\\dots$$</p>',
		answers:
			[
			{ text: '384', correct: true },
			{ text: '256', correct: false },
			{ text: '416', correct: false },
			{ text: '535', correct: false }
			],
		bahas: 'b34'
	},

// 35
	{
		question: '<p>$$\\sqrt{144}\\times\\sqrt{225}:\\sqrt{81}=\\dots$$</p>',
		answers:
			[
			{ text: '20', correct: true },
			{ text: '1620', correct: false },
			{ text: '36', correct: false },
			{ text: '18', correct: false }
			],
		bahas: 'b35'
	},

// 36
	{
		question: '<p>$$12^2-11^2=\\dots$$</p>',
		answers:
			[
			{ text: '23', correct: true },
			{ text: '1', correct: false },
			{ text: '265', correct: false },
			{ text: '169', correct: false }
			],
		bahas: 'b36'
	},

// 37
	{
		question: '<p>$$15^2-12^2=\\dots$$</p>',
		answers:
			[
			{ text: '81', correct: true },
			{ text: '3', correct: false },
			{ text: '9', correct: false },
			{ text: '27', correct: false }
			],
		bahas: 'b37'
	},

// 38
	{
		question: '<p>Nisa membeli alat-alat tulis berikut.</p><ul><li>3 pensil</li><li>5 buku tulis</li><li>9 kertas bergaris</li></ul><p>Berikut harga tiap jenis alatnya.</p><ul><li>Rp250 per pensil</li><li>Rp500 per buku tulis</li><li>Rp125 per kertas bergaris</li></ul><p>Taksiran terbaik ke ratusan terdekat harga total yang harus dibayarkan Nisa adalah &hellip;</p>',
		answers:
			[
			{ text: 'Rp4300', correct: true },
			{ text: 'Rp4800', correct: false },
			{ text: 'Rp5300', correct: false },
			{ text: 'Rp3800', correct: false }
			],
		bahas: 'b38'
	},

// 39
	{
		question: '<p>Seorang pedagang membeli 5 peti duku.</p><p>Tiap peti bobot isinya 20 kg.</p><p>Harga beli tiap peti Rp65000.</p><p>Setelah dibuka dan dikumpulkan isinya, ternyata 10 kg duku rusak dan busuk.</p><p>Duku yang baik dijual seharga Rp4500 tiap kg.</p><p>Kondisi yang dialami pedagang tersebut adalah &hellip;</p>',
		answers:
			[
			{ text: 'untung Rp80000', correct: true },
			{ text: 'rugi Rp80000', correct: false },
			{ text: 'rugi Rp130000', correct: false },
			{ text: 'untung Rp130000', correct: false }
			],
		bahas: 'b39'
	},

// 40
	{
		question: '<p>Sebuah sekolah menerima kiriman 3 kotak paket buku.</p><p>Tiap kotak berisi 72 buku pelajaran, 108 buku cerita, dan 120 ensiklopedia.</p><p>Semua buku dikumpulkan dan ditumpuk sehingga di tiap tumpukan tiap jenis buku jumlahnya sama.</p><p>Jumlah paling banyak tumpukan yang dapat disusun adalah &hellip;</p>',
		answers:
			[
			{ text: '12 buah', correct: false },
			{ text: '24 buah', correct: false },
			{ text: '36 buah', correct: true },
			{ text: '18 buah', correct: false }
			],
		bahas: 'b40'
	}
];
