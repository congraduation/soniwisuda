document.addEventListener('contextmenu', event => event.preventDefault());let page0 = document.getElementById('page0'), start = document.getElementById('start'), audio = document.getElementById('audio'), page1 = document.getElementById('page1'), buka = document.getElementById('buka'), page2 = document.getElementById('page2'), pesan1 = document.getElementById('pesan1'), pesan2 = document.getElementById('pesan2'), pesan3 = document.getElementById('pesan3'), pesan4 = document.getElementById('pesan4'), pesan5 = document.getElementById('pesan5'), pesan6 = document.getElementById('pesan6'), surprise = document.getElementById('surprise'), page3 = document.getElementById('page3'), page3m = document.getElementById('page3m'), page4 = document.getElementById('page4'), song = document.getElementById('song'), songm = document.getElementById('songm'), vid = document.getElementById('vid'), i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, txt1 = 'Teruntuk kamu, bagian dari satu Maharema, selamat wisuda!', txt2 = 'Berawal dari Dinamika, dan kini berakhir di Wisuda.', txt3 = 'Berangkat bersama dari kota Malang, berjarak dengan handai tolan, bersama menghimpun mimpi-mimpi. Rasanya baru kemarin menginjakkan kaki di Bintaro, sekarang wisuda tinggal di depan mata. Rasanya baru kemarin pertama kali bertemu Maharema, keluarga kecil yang selalu membawa perasaan hangat kota Malang.', txt4 = 'Kita semua sadar tahun-tahun terakhir adalah tahun-tahun yang penuh perjuangan. Tentunya tidak mudah, tapi berhasil kamu lalui dengan hebat. Terima kasih telah berjuang sekian lama dan memilih untuk tidak menyerah. Percayalah, kamu sangat membanggakan.', txt5 = 'Layaknya bunga, merekahlah dimanapun kalian berada. Jangan pernah ragu, walaupun terkadang kenyataan tak selalu membawa kedamaian. Sampai berjumpa di lain kesempatan, kami mendoakan setiap tapak kesuksesan indahmu.', txt6 = '-Kominskuy- Ajeng, Ai, Alpha, Dias, Fatin, Ferdhi, Ibe, Pujo, Walid.', speed = 60; function typeWriter1() { if (i1 < txt1.length) { pesan1.innerHTML += txt1.charAt(i1); i1++; setTimeout(typeWriter1, speed); } } function typeWriter2() { if (i2 < txt2.length) { pesan2.innerHTML += txt2.charAt(i2); i2++; setTimeout(typeWriter2, speed); } } function typeWriter3() { if (i3 < txt3.length) { pesan3.innerHTML += txt3.charAt(i3); i3++; setTimeout(typeWriter3, speed); } } function typeWriter4() { if (i4 < txt4.length) { pesan4.innerHTML += txt4.charAt(i4); i4++; setTimeout(typeWriter4, speed); } } function typeWriter5() { if (i5 < txt5.length) { pesan5.innerHTML += txt5.charAt(i5); i5++; setTimeout(typeWriter5, speed); } } function typeWriter6() { if (i6 < txt6.length) { pesan6.innerHTML += txt6.charAt(i6); i6++; setTimeout(typeWriter6, speed); } } start.addEventListener('click', function () { audio.play(); document.body.removeAttribute('style'); page0.remove(); setTimeout(function () { anime({ targets: '.footer', translateY: [400, 0], easing: 'easeInOutQuad', duration: 2000 }); }, 700); setTimeout(function () { anime({ targets: '.mesin, .footer2', translateY: [1000, 0], easing: 'easeInOutQuad', duration: 4000 }); }, 700); setTimeout(function () { page1.removeAttribute('style'); }, 700); }, false); buka.addEventListener('click', function () { anime({ targets: '.page1', translateY: [0, -1000], duration: 4000 }); setTimeout(function () { page1.remove(); }, 1000); setTimeout(function () { page2.removeAttribute('style'); }, 700); setTimeout(function () { anime({ targets: '.kertasm', translateY: [100, 0], duration: 1000, easing: 'easeInOutSine', opacity: 1 }); }, 1000); setTimeout(function () { anime({ targets: '.kertas', translateY: [100, 0], duration: 1000, easing: 'easeInOutSine', opacity: 1 }); }, 1000); setTimeout(function () { typeWriter1(); }, 3000); setTimeout(function () { typeWriter2(); }, 7420); setTimeout(function () { typeWriter3(); }, 11480); setTimeout(function () { typeWriter4(); }, 34200); setTimeout(function () { typeWriter5(); }, 53200); setTimeout(function () { typeWriter6(); }, 69500); }, false); surprise.addEventListener('click', function () { anime({ targets: '.page2', translateY: [0, -1000], duration: 4000 }); setTimeout(function () { page2.remove(); }, 1000); setTimeout(function () { page2a.remove(); }, 1000); setTimeout(function () { page3.removeAttribute('style'); }, 700); setTimeout(function () { page3m.removeAttribute('style'); }, 700); }, false); song.addEventListener('click', function () { anime({ targets: '.page3', translateY: [0, -5000], duration: 4000 }); setTimeout(function () { page3.remove(); }, 1000); setTimeout(function () { page4.removeAttribute('style'); }, 700); }, false); songm.addEventListener('click', function () { anime({ targets: '.page3-m', translateY: [0, -5000], duration: 4000 }); setTimeout(function () { page3m.remove(); }, 1000); setTimeout(function () { page4.removeAttribute('style'); }, 700); }, false); vid.addEventListener('click', function () { audio.pause(); vid.remove(); }, false); 