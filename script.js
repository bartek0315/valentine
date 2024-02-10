// po kliknięciu tak nakłada się na stronę serca
// po kliknięciu nie dajemny duż switch case i zmieniamy przycisk nie rozmiar miejsce
// https://i0.wp.com/www.reallycutecats.com/wp-content/uploads/2012/07/Atdt7.gif?resize=350%2C200

function showFireworks() {
	// Utwórz element img z animowanym GIF-em
	const fireworksImg = document.createElement("img");
	fireworksImg.src =
		"https://i.pinimg.com/originals/6e/22/b0/6e22b01f6567b1b789a2e3928a171815.gif";
	fireworksImg.alt = "Fajerwerki GIF";
	fireworksImg.style.width = "100%";
	fireworksImg.style.height = "100%";
	fireworksImg.style.position = "fixed";
	fireworksImg.style.top = "0";
	fireworksImg.style.left = "0";
	fireworksImg.style.zIndex = "9999";

	// Dodaj element img do body
	document.body.appendChild(fireworksImg);

	// Usuń element img po zakończeniu animacji (czas trwania animacji)
	setTimeout(() => {
		fireworksImg.remove();
	}, 10000); // Dostosuj czas trwania animacji w milisekundach (np. 5000 ms = 5 sekund)

	// Zmiana zawartości elementu o klasie "opis"
	const opisElement = document.querySelector(".opis");
	if (opisElement) {
		opisElement.innerHTML = "JUPI TERAZ JESTEŚ MOJĄ WALENTYNKĄ";
	}

	// Pobierz referencję do elementu obrazu
	const myImage = document.getElementById("welcome_cat"); // Zamiast 'myImage' wpisz rzeczywiste id swojego obrazu

	// Zmiana źródła obrazu
	myImage.src =
		"https://68.media.tumblr.com/6d5436810a2ae45e695bf7b6fabb525f/tumblr_o975pm3lgq1vwvrrio1_400.gif";
        document.getElementById("winlower").innerHTML =
	"Zapisz sobie 14 lutego 2024 godzina 16:15 jestem po ciebie";
}



// Dodaj obsługę zdarzenia dla przycisku
document
	.getElementById("fireworkButton")
	.addEventListener("click", showFireworks);

const tresciDoWyswietlenia = [
	"Co ty robisz?",
	"Jesteś pewna",
	"Na pewno?",
	"Co to ma znaczyć",
	// Dodaj kolejne treści według potrzeb
];

const gifyDoWyswietlenia = [
	"https://media1.tenor.com/m/aZ1PR9DpnOYAAAAC/annoyed-disappointed.gif",
	"https://i0.wp.com/www.reallycutecats.com/wp-content/uploads/2012/07/Atdt7.gif?resize=350%2C200",
	"https://i.pinimg.com/originals/7a/20/96/7a20965b6aee20b5d79906a29cca2c48.gif",
	"https://gifsec.com/wp-content/uploads/2022/11/cat-gif-41.gif",
	// Dodaj kolejne źródła URL dla GIF-ów według potrzeb
];

// Początkowy indeks w tablicy
let aktualnyIndex = 0;

// Funkcja obsługująca kliknięcie przycisku
function wyswietlNastepnyTekst() {
	// Pobierz referencję do elementu, w którym chcesz wyświetlić tekst
	const wyswietlaczTekstu = document.querySelector(".opis"); // Zamiast 'wyswietlaczTekstu' wpisz rzeczywiste id swojego elementu

	// Sprawdź, czy nie przekroczono liczby elementów w tablicy
	if (aktualnyIndex < tresciDoWyswietlenia.length) {
		// Wyświetl tekst z aktualnego indeksu
		wyswietlaczTekstu.innerHTML = tresciDoWyswietlenia[aktualnyIndex];

		// Zwiększ indeks dla następnego kliknięcia
		aktualnyIndex++;
	} else {
		// Zresetuj indeks, jeśli przekroczono liczbę elementów w tablicy
		aktualnyIndex = 0;
	}

	const wyswietlaczGifu = document.getElementById("welcome_cat"); // Zamiast 'wyswietlaczGifu' wpisz rzeczywiste id swojego elementu

	if (aktualnyIndex < gifyDoWyswietlenia.length) {
		wyswietlaczGifu.src = gifyDoWyswietlenia[aktualnyIndex];
		aktualnyIndex++;
	} else {
		aktualnyIndex = 0;
	}

	if (aktualnyIndex == 3) {
		document
			.getElementById("negativButton")
			.parentNode.removeChild(document.getElementById("negativButton"));
		// document.getElementById("winlower").innerHTML =
		// 	"Zapisz sobie 14 lutego 2023 godzina 16 jestem po ciebie";
	}
}

document
	.getElementById("negativButton")
	.addEventListener("click", wyswietlNastepnyTekst);
