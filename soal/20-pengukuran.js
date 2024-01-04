/* Copyright (C) 2022 Alma Nuradnan Pramudita (email: gocodealpha@gmail.com)

This file is part of MathSD.

MathSD is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

MathSD is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with MathSD. If not, see <https://www.gnu.org/licenses/>. */

const questions = [

// 1
	{
		question: '<p>$$\\begin{equation*}\\begin{tightarray}[0.2em]{ c r l c } & \\tfrac{3}{4} & \\text{jam} & \\\\ & \\tfrac{1}{2} & \\text{menit} & \\\\ & 20 & \\text{detik} & +\\\\\\hline & \\dotsc & \\text{detik} & \\end{tightarray}\\end{equation*}$$</p>',
		answers:
			[
			{ text: '2750', correct: true },
			{ text: '2700', correct: false },
			{ text: '2600', correct: false },
			{ text: '2650', correct: false }
			],
		bahas: 'b1'
	},

// 2
	{
		question: '<p>Bilangan yang tepat untuk mengisi titik-titik berikut berturut-turut adalah &hellip;</p><p>$$\\begin{equation*}\\underset{\\text{detik}}{3750} =\\underset{\\text{jam}}{\\dotsc } \\ \\underset{\\text{menit}}{\\dotsc } \\ \\underset{\\text{detik}}{\\dotsc }\\end{equation*}$$</p>',
		answers:
			[
			{ text: '1, 2, 30', correct: true },
			{ text: '1, 2, 20', correct: false },
			{ text: '2, 2, 30', correct: false },
			{ text: '2, 2, 20', correct: false }
			],
		bahas: 'b2'
	},

// 3
	{
		question: '<p>Bilangan yang tepat untuk mengisi titik-titik berikut berturut-turut adalah &hellip;</p><p>$$\\begin{equation*}\\begin{tightarray}[0.2em]{ c c c c c } & \\underset{\\text{jam}}{2} & \\underset{\\text{menit}}{45} & \\underset{\\text{detik}}{36} & \\\\ & \\underset{\\text{jam}}{1} & \\underset{\\text{menit}}{50} & \\underset{\\text{detik}}{54} & +\\\\\\hline & \\underset{\\text{jam}}{\\dotsc } & \\underset{\\text{menit}}{\\dotsc } & \\underset{\\text{detik}}{\\dotsc } & \\end{tightarray}\\end{equation*}$$</p>',
		answers:
			[
			{ text: '4, 36, 30', correct: true },
			{ text: '3, 96, 90', correct: false },
			{ text: '3, 46, 20', correct: false },
			{ text: '4, 46, 40', correct: false }
			],
		bahas: 'b3'
	},

// 4
	{
		question: '<p>\\(1\\tfrac{1}{2}\\) jam yang lalu pukul 07.15.</p><p>\\(1\\tfrac{1}{4}\\) jam yang akan datang pukul &hellip;</p>',
		answers:
			[
			{ text: '10.00', correct: true },
			{ text: '08.45', correct: false },
			{ text: '09.00', correct: false },
			{ text: '10.15', correct: false }
			],
		bahas: 'b4'
	},

// 5
	{
		question: '<p>Besar sudut PQR pada pengukuran berikut adalah &hellip;</p><p style="text-align: center"><img src="aset/20-pengukuran/05-01.svg" style="max-width: 90%"></p>',
		answers:
			[
			{ text: '50&deg;', correct: true },
			{ text: '30&deg;', correct: false },
			{ text: '40&deg;', correct: false },
			{ text: '130&deg;', correct: false }
			],
		bahas: 'b5'
	},

// 6
	{
		question: '<p>Jarum jam dan jarum menit membentuk sudut 60&deg; pada waktu yang ditunjukkan oleh gambar &hellip;</p>',
		answers:
			[
			{ text: '<p style="margin: 5px; text-align: center"><img style="width: 40%" src="aset/20-pengukuran/06-01.svg"></p>', correct: true },
			{ text: '<p style="margin: 5px; text-align: center"><img style="width: 40%" src="aset/20-pengukuran/06-02.svg"></p>', correct: false },
			{ text: '<p style="margin: 5px; text-align: center"><img style="width: 40%" src="aset/20-pengukuran/06-03.svg"></p>', correct: false },
			{ text: '<p style="margin: 5px; text-align: center"><img style="width: 40%" src="aset/20-pengukuran/06-04.svg"></p>', correct: false }
			],
		bahas: 'b6'
	},

// 7
	{
		question: '<p>Pada waktu yang ditunjukkan gambar berikut, sudut antara jarum jam dan jarum menit adalah &hellip;</p><p style="text-align: center"><img src="aset/20-pengukuran/07-01.svg" style="width: 40%"></p>',
		answers:
			[
			{ text: '120&deg;', correct: true },
			{ text: '90&deg;', correct: false },
			{ text: '150&deg;', correct: false },
			{ text: '180&deg;', correct: false }
			],
		bahas: 'b7'
	},

// 8
	{
		question: '<p>Pada waktu yang ditunjukkan gambar berikut, sudut antara jarum jam dan jarum menit adalah &hellip;</p><p style="text-align: center"><img src="aset/20-pengukuran/08-01.svg" style="width: 40%"></p>',
		answers:
			[
			{ text: '75&deg;', correct: true },
			{ text: '60&deg;', correct: false },
			{ text: '50&deg;', correct: false },
			{ text: '45&deg;', correct: false }
			],
		bahas: 'b8'
	},

// 9
	{
		question: '<p>Pada pukul 06.00, besar sudut antara jarum jam dan jarum menit adalah &hellip;</p>',
		answers:
			[
			{ text: '180&deg;', correct: true },
			{ text: '90&deg;', correct: false },
			{ text: '120&deg;', correct: false },
			{ text: '360&deg;', correct: false }
			],
		bahas: 'b9'
	},

// 10
	{
		question: '<p>Jarak rumah Badawi ke sekolah adalah 450 m.</p><p>Jarak rumah Candra 625 m dari sekolah.</p><p>Posisi sekolah berada di antara rumah Badawi dan Candra.</p><p>Sepulang sekolah, Badawi pergi ke rumah Candra.</p><p>Jarak yang ditempuh Badawi sejak berangkat sekolah hingga pulang ke rumah adalah &hellip;</p>',
		answers:
			[
			{ text: '2150 m', correct: true },
			{ text: '1075 m', correct: false },
			{ text: '2500 m', correct: false },
			{ text: '2750 m', correct: false }
			],
		bahas: 'b10'
	},

// 11
	{
		question: '<p>Jarak 150 km ditempuh selama \\(2\\tfrac{1}{2}\\) jam.</p><p>Kecepatan perjalanannya adalah &hellip;</p>',
		answers:
			[
			{ text: '60 km/jam', correct: true },
			{ text: '80 km/jam', correct: false },
			{ text: '70 km/jam', correct: false },
			{ text: '50 km/jam', correct: false }
			],
		bahas: 'b11'
	},

// 12
	{
		question: '<p>Kota A dan B jaraknya 120 km.</p><p>Kecepatan mobil 45 km/jam.</p><p>Lama perjalanannya adalah &hellip;</p>',
		answers:
			[
			{ text: '2 jam 40 menit', correct: true },
			{ text: '2 jam 15 menit', correct: false },
			{ text: '2 jam 30 menit', correct: false },
			{ text: '2 jam 45 menit', correct: false }
			],
		bahas: 'b12'
	},

// 13
	{
		question: '<p>Dalam suatu perlombaan, peserta harus bersepeda menempuh Bandung-Sumedang pulang-pergi.</p><p>Jarak Bandung-Sumedang 45 km.</p><p>Lomba dimulai pukul 08.15.</p><p>Juara pertama mencapai garis akhir pukul 10.30.</p><p>Kecepatan sang juara pertama adalah &hellip;</p>',
		answers:
			[
			{ text: '40 km/jam', correct: true },
			{ text: '35 km/jam', correct: false },
			{ text: '30 km/jam', correct: false },
			{ text: '45 km/jam', correct: false }
			],
		bahas: 'b13'
	},

// 14
	{
		question: '<p>Radinal berangkat pukul 06.15 ke rumah kakaknya.</p><p>Dia melaju dengan kecepatan 40 km/jam.</p><p>Radinal tiba di rumah kakaknya pukul 08.00.</p><p>Jarak yang ditempuh Radinal adalah &hellip;</p>',
		answers:
			[
			{ text: '70 km', correct: true },
			{ text: '60 km', correct: false },
			{ text: '75 km', correct: false },
			{ text: '80 km', correct: false }
			],
		bahas: 'b14'
	},

// 15
	{
		question: '<p>Warman pergi ke rumah temannya dengan naik sepeda.</p><p>Dia berangkat pukul 06.15.</p><p>Rumah teman Warman jauhnya 12 km.</p><p>Warman melaju dengan kecepatan 5 km/jam.</p><p>Dia sempat berhenti selama 25 menit untuk istirahat dan memompa ban sepeda.</p><p>Warman akan tiba di rumah temannya pukul &hellip;</p>',
		answers:
			[
			{ text: '09.04', correct: true },
			{ text: '08.04', correct: false },
			{ text: '08.00', correct: false },
			{ text: '09.00', correct: false }
			],
		bahas: 'b15'
	},

// 16
	{
		question: '<p>$$\\begin{equation*}\\begin{tightarray}[0.2em]{ c r l c } & 1\\tfrac{1}{4} & \\text{jam} & \\\\ & 45 & \\text{menit} & \\\\ & 50 & \\text{detik} & +\\\\\\hline & \\dotsc & \\text{detik} & \\end{tightarray}\\end{equation*}$$</p>',
		answers:
			[
			{ text: '7250', correct: true },
			{ text: '10200', correct: false },
			{ text: '2825', correct: false },
			{ text: '5775', correct: false }
			],
		bahas: 'b16'
	},

// 17
	{
		question: '<p>Bilangan yang tepat untuk mengisi titik-titik berikut berturut-turut adalah &hellip;</p><p>$$\\begin{equation*}\\underset{\\text{detik}}{9325} =\\underset{\\text{jam}}{\\dotsc } \\ \\underset{\\text{menit}}{\\dotsc } \\ \\underset{\\text{detik}}{\\dotsc }\\end{equation*}$$</p>',
		answers:
			[
			{ text: '2, 35, 25', correct: true },
			{ text: '2, 25, 35', correct: false },
			{ text: '3, 25, 35', correct: false },
			{ text: '3, 35, 25', correct: false }
			],
		bahas: 'b17'
	},

// 18
	{
		question: '<p>Bilangan yang tepat untuk mengisi titik-titik berikut berturut-turut adalah &hellip;</p><p>$$\\begin{equation*}\\begin{tightarray}[0.2em]{ c l } & \\left(\\underset{\\text{jam}}{2} \\ \\underset{\\text{menit}}{32} \\ \\underset{\\text{detik}}{45}\\right) \\times 4\\\\= & \\underset{\\text{jam}}{\\dotsc } \\ \\underset{\\text{menit}}{\\dotsc } \\ \\underset{\\text{detik}}{\\dotsc }\\end{tightarray}\\end{equation*}$$</p>',
		answers:
			[
			{ text: '10, 11, 0', correct: true },
			{ text: '8, 2, 11', correct: false },
			{ text: '11, 2, 3', correct: false },
			{ text: '13, 8, 0', correct: false }
			],
		bahas: 'b18'
	},

// 19
	{
		question: '<p>Bilangan yang tepat untuk mengisi titik-titik berikut berturut-turut adalah &hellip;</p><p>$$\\begin{equation*}\\begin{tightarray}[0.2em]{ c c c c c } & \\underset{\\text{km}}{4} & \\underset{\\text{hm}}{7} & \\underset{\\text{dam}}{5} & \\\\ & \\underset{\\text{km}}{3} & \\underset{\\text{hm}}{9} & \\underset{\\text{dam}}{8} & +\\\\\\hline & \\underset{\\text{km}}{\\dotsc } & \\underset{\\text{hm}}{\\dotsc } & \\underset{\\text{dam}}{\\dotsc } & \\end{tightarray}\\end{equation*}$$</p>',
		answers:
			[
			{ text: '8, 7, 3', correct: true },
			{ text: '7, 6, 3', correct: false },
			{ text: '7, 7, 3', correct: false },
			{ text: '8, 6, 3', correct: false }
			],
		bahas: 'b19'
	},

// 20
	{
		question: '<p>Bilangan yang tepat untuk mengisi titik-titik berikut berturut-turut adalah &hellip;</p><p>$$\\begin{equation*}\\begin{tightarray}[0.2em]{ c c c c c } & \\underset{\\text{m}}{8} & \\underset{\\text{dm}}{24} & \\underset{\\text{cm}}{35} & \\\\ & \\underset{\\text{m}}{3} & \\underset{\\text{dm}}{29} & \\underset{\\text{cm}}{38} & -\\\\\\hline & \\underset{\\text{m}}{\\dotsc } & \\underset{\\text{dm}}{\\dotsc } & \\underset{\\text{cm}}{\\dotsc } & \\end{tightarray}\\end{equation*}$$</p>',
		answers:
			[
			{ text: '4, 4, 7', correct: true },
			{ text: '5, 4, 7', correct: false },
			{ text: '4, 5, 7', correct: false },
			{ text: '5, 5, 7', correct: false }
			],
		bahas: 'b20'
	},

// 21
	{
		question: '<p>Bilangan yang tepat untuk mengisi titik-titik berikut berturut-turut adalah &hellip;</p><p>$$\\begin{equation*}\\underset{\\text{km/jam}}{45} =\\underset{\\text{m/menit}}{\\dotsc } =\\underset{\\text{m/detik}}{\\dotsc }\\end{equation*}$$</p>',
		answers:
			[
			{ text: '750 dan \\(12\\tfrac{1}{2}\\)', correct: true },
			{ text: '75 dan \\(12\\tfrac{1}{2}\\)', correct: false },
			{ text: '2700 dan \\(12\\tfrac{1}{2}\\)', correct: false },
			{ text: '4500 dan 60', correct: false }
			],
		bahas: 'b21'
	},

// 22
	{
		question: '<p>Bilangan yang tepat untuk mengisi titik-titik berikut berturut-turut adalah &hellip;</p><p>$$\\begin{equation*}\\underset{\\text{km}}{72} /\\underset{\\text{jam}}{\\dotsc } =\\underset{\\text{km/jam}}{24} =\\underset{\\text{m/detik}}{\\dotsc }\\end{equation*}$$</p>',
		answers:
			[
			{ text: '3 dan \\(6\\tfrac{2}{3}\\)', correct: true },
			{ text: '3 dan 72000', correct: false },
			{ text: '\\(\\tfrac{1}{3}\\) dan \\(6\\tfrac{2}{3}\\)', correct: false },
			{ text: '\\(\\tfrac{1}{3}\\) dan 72000', correct: false }
			],
		bahas: 'b22'
	},

// 23
	{
		question: '<p>Bilangan yang tepat untuk mengisi titik-titik berikut berturut-turut adalah &hellip;</p><p>$$\\begin{equation*}\\underset{\\text{km}}{120} /\\underset{\\text{jam}}{2\\tfrac{1}{2}} =\\underset{\\text{km/jam}}{\\dotsc } =\\underset{\\text{km/menit}}{\\dotsc }\\end{equation*}$$</p>',
		answers:
			[
			{ text: '48 dan \\(\\tfrac{4}{5}\\)', correct: true },
			{ text: '120 dan 2', correct: false },
			{ text: '120 dan \\(\\tfrac{4}{5}\\)', correct: false },
			{ text: '48 dan 2', correct: false },
			],
		bahas: 'b23'
	},

// 24
	{
		question: '<p>Kota P dan Q jaraknya 80 km.</p><p>Sebuah mobil berangkat dari Kota P pukul 07.45 menuju Kota Q.</p><p>Kecepatan rata-rata mobil tersebut 80 km/jam.</p><p>Mobil tersebut akan tiba di Kota Q pukul &hellip;</p>',
		answers:
			[
			{ text: '08.45', correct: true },
			{ text: '09.45', correct: false },
			{ text: '08.15', correct: false },
			{ text: '09.15', correct: false }
			],
		bahas: 'b24'
	},

// 25
	{
		question: '<p>Seorang pengendara motor berangkat dari kotanya pukul 08.15.</p><p>Dia tiba di tujuan pukul 10.30.</p><p>Kecepatan rata-rata pengendara tersebut 40 km/jam.</p><p>Jarak yang ditempuh adalah &hellip;</p>',
		answers:
			[
			{ text: '90 km', correct: true },
			{ text: '80 km', correct: false },
			{ text: '120 km', correct: false },
			{ text: '100km km', correct: false }
			],
		bahas: 'b25'
	},

// 26
	{
		question: '<p>Sebuah kendaraan menempuh jarak 275 km.</p><p>Tiap 11 km, kendaraan tersebut menghabiskan bensin 1 liter.</p><p>Harga bensin Rp13000 per liter.</p><p>Perjalanan kendaraan tersebut menghabiskan biaya bensin sebesar &hellip;</p>',
		answers:
			[
			{ text: 'Rp325000', correct: true },
			{ text: 'Rp351000', correct: false },
			{ text: 'Rp143000', correct: false },
			{ text: 'Rp357000', correct: false },
			],
		bahas: 'b26'
	},

// 27
	{
		question: '<p>Sebuah bus berangkat pukul 16.30 dari Yogyakarta ke Jakarta.</p><p>Jarak Yogyakarta-Jakarta 560 km.</p><p>Sepanjang perjalanan, bus berhenti di 4 kota.</p><p>Lama masing-masing pemberhentiannya 30 menit.</p><p>Kecepatan rata-rata bus tersebut 60 km/jam.</p><p>Bus akan tiba di Jakarta pukul &hellip;</p>',
		answers:
			[
			{ text: '03.50', correct: true },
			{ text: '02.50', correct: false },
			{ text: '01.50', correct: false },
			{ text: '04.50', correct: false }
			],
		bahas: 'b27'
	},

// 28
	{
		question: '<p>Sebuah mobil menempuh jarak 150 km.</p><p>Kecepatan rata-rata mobil tersebut 60 km/jam.</p><p>Mobil tiba di tujuan pukul 08.50.</p><p>Dengan demikian, mobil berangkat pukul &hellip;</p>',
		answers:
			[
			{ text: '06.20', correct: true },
			{ text: '06.50', correct: false },
			{ text: '05.50', correct: false },
			{ text: '05.20', correct: false }
			],
		bahas: 'b28'
	},

// 29
	{
		question: '<p>Jarak Kota A dan B 180 km.</p><p>Sebuah mobil berangkat pukul 09.45 dari Kota A ke Kota B.</p><p>Mobil sempat istirahat 2 kali, masing-masing selama 15 dan 30 menit.</p><p>Mobil tiba di Kota B pukul 14.30.</p><p>Kecepatan rata-rata mobil tersebut &hellip;</p>',
		answers:
			[
			{ text: '45 km/jam', correct: true },
			{ text: '30 km/jam', correct: false },
			{ text: '35 km/jam', correct: false },
			{ text: '40 km/jam', correct: false }
			],
		bahas: 'b29'
	},

// 30
	{
		question: '<p>Desa K dan M berjarak 12 km.</p><p>Pukul 08.30, Slamet berangkat jalan kaki dari Desa K ke Desa M.</p><p>Laju jalan Slamet 5 km/jam.</p><p>Sementara itu, Raharja juga berangkat pukul 08.30 dari Kota M ke Kota K.</p><p>Laju jalan Raharja 4 km/jam.</p><p>Slamet dan Raharja akan berpapasan pukul &hellip;</p>',
		answers:
			[
			{ text: '09.50', correct: true },
			{ text: '09.30', correct: false },
			{ text: '10.50', correct: false },
			{ text: '10.30', correct: false }
			],
		bahas: 'b30'
	}
];
