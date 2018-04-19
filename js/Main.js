<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A37fbf1c790e3edecc8d014eba80ec836b65156a651fc5272ac25857888d4f811&amp;width=100%25&amp;height=553&amp;lang=ru_RU&amp;scroll=true">

var table1 = document.querySelector("#tarif1_1");
var table2 = document.querySelector("#tarif1_2");
var table3 = document.querySelector("#tarif1_3");
var table_itself = document.querySelector("table");

table2.addEventListener("click", function(event){
	table_itself.classList.add("transform2");
	
});