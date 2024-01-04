/* Copyright (C) 2022 Alma Nuradnan Pramudita (email: gocodealpha@gmail.com)

This file is part of MathSD.

MathSD is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

MathSD is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with MathSD. If not, see <https://www.gnu.org/licenses/>. */

function showBorder() {
	document.getElementById('banner-ad-border').style.display = 'block';
	document.getElementById('wideNav').style.marginTop = '20px';
}

function hideBorder() {
	document.getElementById('banner-ad-border').style.display = 'none';
	document.getElementById('wideNav').style.marginTop = '0';
}

function checkStart() {if (navigator.onLine) {showBorder();} else {hideBorder();}}
