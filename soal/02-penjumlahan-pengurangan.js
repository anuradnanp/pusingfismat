/* Copyright (C) 2022 Alma Nuradnan Pramudita (email: gocodealpha@gmail.com)

This file is part of MathSD.

MathSD is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

MathSD is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with MathSD. If not, see <https://www.gnu.org/licenses/>. */

const questions = [

// 1
	{
		question: '<p>Nilai tempat angka 4 pada bilangan 5465 adalah &hellip;</p>',
		answers:
			[
			{ text: 'ratusan', correct: true },
			{ text: 'ribuan', correct: false },
			{ text: 'puluhan', correct: false },
			{ text: 'satuan', correct: false }
			],
		bahas: 'b1'
	},

// 2
	{
		question: '<p style="text-align: center">6 ribuan + 7 ratusan + 3 satuan = &hellip;</p>',
		answers:
			[
			{ text: '6703', correct: true },
			{ text: '6073', correct: false },
			{ text: '6730', correct: false },
			{ text: '673', correct: false }
			],
		bahas: 'b2'
	},

// 3
	{
		question: '<p style="text-align: center">5000 + 80 + 6 = &hellip;</p>',
		answers:
			[
			{ text: '5086', correct: true },
			{ text: '586', correct: false },
			{ text: '5806', correct: false },
			{ text: '5860', correct: false }
			],
		bahas: 'b3'
	},

// 4
	{
		question: '<p>$$\\begin{equation*} \\begin{tightarray}[0.2em]{ c r c } & 871 & \\\\ & 89 & +\\\\ \\hline & \\dotsc & \\end{tightarray} \\end{equation*}$$</p>',
		answers:
			[
			{ text: '960', correct: true },
			{ text: '860', correct: false },
			{ text: '950', correct: false },
			{ text: '850', correct: false }
			],
		bahas: 'b4'
	},

// 5
	{
		question: '<p>Selisih nilai angka 3 pada bilangan 3473 adalah &hellip;</p>',
		answers:
			[
			{ text: '2997', correct: true },
			{ text: '0', correct: false },
			{ text: '297', correct: false },
			{ text: '27', correct: false }
			],
		bahas: 'b5'
	},

// 6
	{
		question: '<p style="text-align: center">843 + 952 = &hellip;</p>',
		answers:
			[
			{ text: '1795', correct: true },
			{ text: '1695', correct: false },
			{ text: '1595', correct: false },
			{ text: '1895', correct: false }
			],
		bahas: 'b6'
	},

// 7
	{
		question: '<p style="text-align: center">564 + 628 = &hellip;</p>',
		answers:
			[
			{ text: '1192', correct: true },
			{ text: '1182', correct: false },
			{ text: '1292', correct: false },
			{ text: '1282', correct: false }
			],
		bahas: 'b7'
	},

// 8
	{
		question: '<p>$$\\begin{equation*} \\begin{tightarray}[0.2em]{ c r c } & 987 & \\\\ & 362 & +\\\\ \\hline & \\dotsc & \\end{tightarray} \\end{equation*}$$</p>',
		answers:
			[
			{ text: '1349', correct: true },
			{ text: '1249', correct: false },
			{ text: '1359', correct: false },
			{ text: '1259', correct: false }
			],
		bahas: 'b8'
	},

// 9
	{
		question: '<p style="text-align: center">973 + 845 = &hellip;</p>',
		answers:
			[
			{ text: '1818', correct: true },
			{ text: '1718', correct: false },
			{ text: '1828', correct: false },
			{ text: '1728', correct: false }
			],
		bahas: 'b9'
	},

// 10
	{
		question: '<p style="text-align: center">874 + 436 = &hellip;</p>',
		answers:
			[
			{ text: '1310', correct: true },
			{ text: '1300', correct: false },
			{ text: '1200', correct: false },
			{ text: '1210', correct: false }
			],
		bahas: 'b10'
	},

// 11
	{
		question: '<p style="text-align: center">538 + 646 + 965 = &hellip;</p>',
		answers:
			[
			{ text: '2149', correct: true },
			{ text: '2139', correct: false },
			{ text: '2049', correct: false },
			{ text: '2039', correct: false }
			],
		bahas: 'b11'
	},

// 12
	{
		question: '<p style="text-align: center">762 + 845 + 928 = &hellip;</p>',
		answers:
			[
			{ text: '2535', correct: true },
			{ text: '2525', correct: false },
			{ text: '2435', correct: false },
			{ text: '2425', correct: false }
			],
		bahas: 'b12'
	},

// 13
	{
		question: '<p style="text-align: center">377 + 293 + 749 = &hellip;</p>',
		answers:
			[
			{ text: '1419', correct: true },
			{ text: '1182', correct: false },
			{ text: '1292', correct: false },
			{ text: '1282', correct: false }
			],
		bahas: 'b13'
	},

// 14
	{
		question: '<p style="text-align: center">684 &minus; 324 = &hellip;</p>',
		answers:
			[
			{ text: '360', correct: true },
			{ text: '350', correct: false },
			{ text: '460', correct: false },
			{ text: '450', correct: false }
			],
		bahas: 'b14'
	},

// 15
	{
		question: '<p style="text-align: center">925 &minus; 876 = &hellip;</p>',
		answers:
			[
			{ text: '49', correct: true },
			{ text: '39', correct: false },
			{ text: '59', correct: false },
			{ text: '29', correct: false }
			],
		bahas: 'b15'
	},

// 16
	{
		question: '<p>$$\\begin{equation*} \\begin{tightarray}[0.2em]{ c r c } & 456 & \\\\ & 239 & -\\\\ \\hline & \\dotsc & \\end{tightarray} \\end{equation*}$$</p>',
		answers:
			[
			{ text: '217', correct: true },
			{ text: '227', correct: false },
			{ text: '207', correct: false },
			{ text: '237', correct: false }
			],
		bahas: 'b16'
	},

// 17
	{
		question: '<p>$$\\begin{equation*} \\begin{tightarray}[0.2em]{ c r c } & 947 & \\\\ & 783 & -\\\\ \\hline & \\dotsc & \\end{tightarray} \\end{equation*}$$</p>',
		answers:
			[
			{ text: '164', correct: true },
			{ text: '154', correct: false },
			{ text: '174', correct: false },
			{ text: '144', correct: false }
			],
		bahas: 'b17'
	},

// 18
	{
		question: '<p style="text-align: center">830 &minus; 673 = &hellip;</p>',
		answers:
			[
			{ text: '157', correct: true },
			{ text: '147', correct: false },
			{ text: '167', correct: false },
			{ text: '137', correct: false }
			],
		bahas: 'b18'
	},

// 19
	{
		question: '<p style="text-align: center">839 &minus; 693 &minus; 23 = &hellip;</p>',
		answers:
			[
			{ text: '123', correct: true },
			{ text: '133', correct: false },
			{ text: '113', correct: false },
			{ text: '103', correct: false }
			],
		bahas: 'b19'
	},

// 20
	{
		question: '<p style="text-align: center">754 &minus; 677 &minus; 11 = &hellip;</p>',
		answers:
			[
			{ text: '66', correct: true },
			{ text: '56', correct: false },
			{ text: '76', correct: false },
			{ text: '46', correct: false }
			],
		bahas: 'b20'
	},

// 21
	{
		question: '<p>Uraian nilai tempat dari 1276 adalah &hellip;</p>',
		answers:
			[
			{ text: '1 ribuan, 2 ratusan, 7 puluhan, 6 satuan', correct: true },
			{ text: '1 ratusan, 2 puluhan, 7 satuan, 6 ribuan', correct: false },
			{ text: '1 puluhan, 2 satuan, 7 ribuan, 6 ratusan', correct: false },
			{ text: '1 satuan, 2 ribuan, 7 ratusan, 6 puluhan', correct: false }
			],
		bahas: 'b21'
	},

// 22
	{
		question: '<p>Uraian nilai tempat dari 3294 adalah &hellip;</p>',
		answers:
			[
			{ text: '3 ribuan, 2 ratusan, 9 puluhan, 4 satuan', correct: true },
			{ text: '3 ratusan, 2 puluhan, 9 satuan, 4 ribuan', correct: false },
			{ text: '3 puluhan, 2 satuan, 9 ribuan, 4 ratusan', correct: false },
			{ text: '3 satuan, 2 ribuan, 9 ratusan, 4 puluhan', correct: false }
			],
		bahas: 'b22'
	},

// 23
	{
		question: '<p>Hasil penjumlahan 678 dan 246 adalah &hellip;</p>',
		answers:
			[
			{ text: '924', correct: true },
			{ text: '914', correct: false },
			{ text: '824', correct: false },
			{ text: '814', correct: false }
			],
		bahas: 'b23'
	},

// 24
	{
		question: '<p>Hasil penjumlahan 596 dan 822 adalah &hellip;</p>',
		answers:
			[
			{ text: '1418', correct: true },
			{ text: '1318', correct: false },
			{ text: '1428', correct: false },
			{ text: '1328', correct: false }
			],
		bahas: 'b24'
	},

// 25
	{
		question: '<p>Hasil penjumlahan 285, 943, dan 763 adalah &hellip;</p>',
		answers:
			[
			{ text: '1991', correct: true },
			{ text: '1981', correct: false },
			{ text: '1891', correct: false },
			{ text: '1881', correct: false }
			],
		bahas: 'b25'
	},

// 26
	{
		question: '<p>Hasil pengurangan 658 dengan 374 adalah &hellip;</p>',
		answers:
			[
			{ text: '284', correct: true },
			{ text: '274', correct: false },
			{ text: '384', correct: false },
			{ text: '374', correct: false }
			],
		bahas: 'b26'
	},

// 27
	{
		question: '<p>Hasil pengurangan 625 dengan 376 adalah &hellip;</p>',
		answers:
			[
			{ text: '249', correct: true },
			{ text: '259', correct: false },
			{ text: '349', correct: false },
			{ text: '359', correct: false }
			],
		bahas: 'b27'
	},

// 28
	{
		question: '<p>Hasil pengurangan 982 dengan 672 adalah &hellip;</p>',
		answers:
			[
			{ text: '310', correct: true },
			{ text: '210', correct: false },
			{ text: '320', correct: false },
			{ text: '220', correct: false }
			],
		bahas: 'b28'
	},

// 29
	{
		question: '<p>Hasil pengurangan 999 dengan 213 adalah &hellip;</p>',
		answers:
			[
			{ text: '786', correct: true },
			{ text: '776', correct: false },
			{ text: '686', correct: false },
			{ text: '676', correct: false }
			],
		bahas: 'b29'
	},

// 30
	{
		question: '<p>Hasil pengurangan 881 dengan 256 dan 101 adalah &hellip;</p>',
		answers:
			[
			{ text: '524', correct: true },
			{ text: '514', correct: false },
			{ text: '424', correct: false },
			{ text: '414', correct: false }
			],
		bahas: 'b30'
	},

// 31
	{
		question: '<p>Pak Marsono memanen pepaya dari kebun.</p><p>Pepaya-pepaya itu ditempatkan pada 2 buah keranjang besar.</p><p>Masing-masing keranjang dapat memuat 578 buah dan 439 buah pepaya.</p><p>Total panen pepaya Pak Marsono adalah &hellip;</p>',
		answers:
			[
			{ text: '1017 buah', correct: true },
			{ text: '917 buah', correct: false },
			{ text: '1007 buah', correct: false },
			{ text: '907 buah', correct: false }
			],
		bahas: 'b31'
	},

// 32
	{
		question: '<p>Petani memanen padi sebanyak 997 kg.</p><p>Padi tersebut kemudian dijual kepada pedagang sebanyak 845 kg.</p><p>Berat padi yang tidak dijual adalah &hellip;</p>',
		answers:
			[
			{ text: '152 kg', correct: true },
			{ text: '142 kg', correct: false },
			{ text: '162 kg', correct: false },
			{ text: '132 kg', correct: false }
			],
		bahas: 'b32'
	},

// 33
	{
		question: '<p>Di dalam gudang terdapat 625 sak semen.</p><p>Kemudian, dimasukkan lagi 255 sak semen.</p><p>Jumlah semen yang ada di gudang adalah &hellip;</p>',
		answers:
			[
			{ text: '880 sak', correct: true },
			{ text: '870 sak', correct: false },
			{ text: '980 sak', correct: false },
			{ text: '970 sak', correct: false }
			],
		bahas: 'b33'
	},

// 34
	{
		question: '<p>Di sebuah tambak terdapat udang windu sebanyak 675 ekor.</p><p>Kemudian, dipanen sebanyak 519 ekor.</p><p>Jumlah udang yang masih ada di tambak adalah &hellip;</p>',
		answers:
			[
			{ text: '156 ekor', correct: true },
			{ text: '166 ekor', correct: false },
			{ text: '56 ekor', correct: false },
			{ text: '66 ekor', correct: false }
			],
		bahas: 'b34'
	},

// 35
	{
		question: '<p>Seorang peternak mempunyai 3 rak telur.</p><p>Rak pertama berisi 376 butir.</p><p>Rak kedua berisi 265 butir.</p><p>Rak ketiga berisi 985 butir.</p><p>Total telur yang disimpan peternak di dalam rak sebanyak &hellip;</p>',
		answers:
			[
			{ text: '1626 butir', correct: true },
			{ text: '1616 butir', correct: false },
			{ text: '1526 butir', correct: false },
			{ text: '1516 butir', correct: false }
			],
		bahas: 'b35'
	},

// 36
	{
		question: '<p>Kantor Tata Usaha Sekolah mempunyai 856 lembar kertas.</p><p>Sebanyak 573 di antaranya digunakan untuk mencetak pengumuman.</p><p>Sisa kertasnya adalah &hellip;</p>',
		answers:
			[
			{ text: '283 lembar', correct: true },
			{ text: '383 lembar', correct: false },
			{ text: '293 lembar', correct: false },
			{ text: '393 lembar', correct: false }
			],
		bahas: 'b36'
	},

// 37
	{
		question: '<p>Bu Heni membuat kue kering sebanyak 587 buah.</p><p>Ia membuat lagi kue kering sebanyak 269 buah.</p><p>Total yang dibuat Bu Heni adalah &hellip;</p>',
		answers:
			[
			{ text: '856 kue', correct: true },
			{ text: '318 kue', correct: false },
			{ text: '846 kue', correct: false },
			{ text: '328 kue', correct: false }
			],
		bahas: 'b37'
	},

// 38
	{
		question: '<p>Suatu rangkaian gerbong kereta api mengangkut 563 penumpang.</p><p>Di Stasiun A, diturunkan 418 penumpang.</p><p>Jumlah penumpang yang masih ada di dalam kereta adalah &hellip;</p>',
		answers:
			[
			{ text: '145 orang', correct: true },
			{ text: '155 orang', correct: false },
			{ text: '981 orang', correct: false },
			{ text: '971 orang', correct: false }
			],
		bahas: 'b38'
	},

// 39
	{
		question: '<p>Pak Nanu membuat genting sebanyak 825 buah.</p><p>Beberapa hari kemudian dibuat lagi genting sebanyak 196 buah.</p><p>Total yang dibuat Pak Nanu adalah &hellip;</p>',
		answers:
			[
			{ text: '1021 genting', correct: true },
			{ text: '1011 genting', correct: false },
			{ text: '629 genting', correct: false },
			{ text: '639 genting', correct: false }
			],
		bahas: 'b39'
	},

// 40
	{
		question: '<p>Sebuah percetakan mendapat pesanan dari 3 orang.</p><p>Orang pertama memesan 795 undangan.</p><p>Orang kedua memesan 863 undangan.</p><p>Orang ketiga memesan 150 undangan.</p><p>Percetakan tersebut harus membuat total sebanyak &hellip;</p>',
		answers:
			[
			{ text: '1808 undangan', correct: true },
			{ text: '1798 undangan', correct: false },
			{ text: '1608 undangan', correct: false },
			{ text: '1698 undangan', correct: false }
			],
		bahas: 'b40'
	}
];
