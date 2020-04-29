Vue.component("description",{
    template: `
        <div>
            <h1>Strona do zarządzania pracownikami</h1>
            <h2>Posiada wiele funkcji które szczegółowo zostały opisane w zakładce <a href="#">Funkcje</a> między innymi:</h2>
            <ul>
                <li>Wypłaty</li>
                <li>Czas pracy</li>
                <li>Urlopy</li>
            </ul>
        </div>
    `
});

Vue.component("function",{
    template: `
        <div>
            <h1>Poszczególne funkcje aplikacji oraz ich szczegółowy opis</h1>
            <h2>Czas pracy</h2>
            <ul>
                <span>
                <p>Możliwość sprawdzenia przeprowadzonych godzin przez danego pracownika w danym miesiącu / kwartale / roku</p>
                <p>Możliwość sprawdzenia ile dni roboczych 
                (ustawionych przez administratora ponieważ w różnych firmach są różne dni wolne np w poczcie jest dzień kurwiera który może być dniem wolnym ale w zawodznie piekarza nie ma takiego dnia)
                zostało przez pracownika zgłoszonych jako wolne / urlop / chorobowe</p>
                </span>
            </ul>
        </div>
    `
});


Vue.component("price-list",{
    template: `
        <div>
            <h1>Cennik poszczególnych wariantów</h1>
            <h2>Miesięczny</h2>
            <p>70zł</p>
            <h2>Roczny</h2>
            <p>50zł za każdy miesiąc</p>
        </div>
    `
});

Vue.component("news",{
    template: `
        <div>
            <h1>Co nowego</h1>
            <h2>Dodano możliwośc edycji imienia pracownika w zakłądce pracownicy</h2>
            <keep-alive>
            <input type="text" placeholder="TEST">
            </keep-alive>
        </div>
    `,
    deactivated: function(){
        alert("Czy wyjsc");
    }
});

let main = new Vue({
    el: "#main",
    data: {
        views: "description",
    }
});


$(document).ready(function () {
    $('.nav li').click(function () {
        $(this).toggleClass('active').siblings().removeClass('active');
    });
});