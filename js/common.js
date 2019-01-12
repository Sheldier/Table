$(function() {

	//Объявление и инициализация переменных

	var $guarantee = $('.table__cost .li-info span:last-child').not(':first()');
	var $liWork = $('.table__work li').not(':first()');
	var $liCost = $('.table__cost li').not(':first()');
	var $liOrder = $('.table__order li').not(':first()');
	var $buttons = $('.table__order li a');
	var $checkedObj = $('.table__work svg');
	var $modal = $('.modal');
	var $showAll = $('.wrapup a');

 	//Изменение отображения различных элементов

	function hidePartofStrings(){
		$($liWork).hide();
		$($liCost).hide();
		$($liOrder).hide();
		for(let i = 0; i < 7; i++){
			$($liWork[i]).show();
			$($liCost[i]).show();
			$($liOrder[i]).show();
		}
	}
	$guarantee.hide();
	hidePartofStrings();

//=================================================
// Привязка событий к строкам таблицы при наведении
//=================================================

	//Первый столбец

	$liWork.on('mouseenter', function() {
		$(this).css({
			backgroundColor: '#FFD8BB'
		});
		$liCost[$(this).index() - 1].style.backgroundColor = "#FFD8BB";
		$liOrder[$(this).index() - 1].style.backgroundColor = "#FFD8BB";
		$($buttons[$(this).index() - 1]).css({
			background: "linear-gradient(to right, #FFB000, #FF7B21)",
			border: "none",
			color: "black",
			boxShadow: "0 0 15px rgba(229,240,28,0.6)"
		});
		$($guarantee[$(this).index() - 1]).show(600);
		$checkedObj[$(this).index() - 1].style.stroke = "#FF7B21";
	});
	$liWork.on('mouseleave', function() {
		$(this).css({
			backgroundColor: 'white'
		});
		$liCost[$(this).index() - 1].style.backgroundColor = "white";
		$liOrder[$(this).index() - 1].style.backgroundColor = "white";
		if($buttons[$(this).index() - 1].dataset.clicked == "false"){
			$($buttons[$(this).index() - 1]).css({
				background: "transparent",
				border: "1px solid #BCC8CE",
				color: "#BCC8CE",
				boxShadow: "none"
			});
		}
		else{
			$($buttons[$(this).index() - 1]).css({
				boxShadow: "none"
			});
		}
		$($guarantee[$(this).index() - 1]).hide(600);
		$checkedObj[$(this).index() - 1].style.stroke = "black";
	});

	//Второй столбец

	$liCost.on('mouseenter', function() {
		$(this).css({
			backgroundColor: '#FFD8BB'
		});
		$liWork[$(this).index() - 1].style.backgroundColor = "#FFD8BB";
		$liOrder[$(this).index() - 1].style.backgroundColor = "#FFD8BB";
		$($buttons[$(this).index() - 1]).css({
			background: "linear-gradient(to right, #FFB000, #FF7B21)",
			border: "none",
			color: "black",
			boxShadow: "0 0 15px rgba(229,240,28,0.6)"
		});
		$($guarantee[$(this).index() - 1]).show(600);
		$checkedObj[$(this).index() - 1].style.stroke = "#FF7B21";
	});
	$liCost.on('mouseleave', function() {
		$(this).css({
			backgroundColor: 'white'
		});
		$liWork[$(this).index() - 1].style.backgroundColor = "white";
		$liOrder[$(this).index() - 1].style.backgroundColor = "white";
		if($buttons[$(this).index() - 1].dataset.clicked == "false"){
			$($buttons[$(this).index() - 1]).css({
				background: "transparent",
				border: "1px solid #BCC8CE",
				color: "#BCC8CE",
				boxShadow: "none"
			});
		}
		else{
			$($buttons[$(this).index() - 1]).css({
				boxShadow: "none"
			});
		}
		$($guarantee[$(this).index() - 1]).hide(600);
		$checkedObj[$(this).index() - 1].style.stroke = "black";
	});

	//Третий столбец

	$liOrder.on('mouseenter', function() {
		$(this).css({
			backgroundColor: '#FFD8BB'
		});
		$liWork[$(this).index() - 1].style.backgroundColor = "#FFD8BB";
		$liCost[$(this).index() - 1].style.backgroundColor = "#FFD8BB";
		$($buttons[$(this).index() - 1]).css({
			background: "linear-gradient(to right, #FFB000, #FF7B21)",
			border: "none",
			color: "black",
			boxShadow: "0 0 15px rgba(229,240,28,0.6)"
		});
		$($guarantee[$(this).index() - 1]).show(600);
		$checkedObj[$(this).index() - 1].style.stroke = "#FF7B21";
	});
	$liOrder.on('mouseleave', function() {
		$(this).css({
			backgroundColor: 'white'
		});
		$liWork[$(this).index() - 1].style.backgroundColor = "white";
		$liCost[$(this).index() - 1].style.backgroundColor = "white";
		if($buttons[$(this).index() - 1].dataset.clicked == "false"){
			$($buttons[$(this).index() - 1]).css({
				background: "transparent",
				border: "1px solid #BCC8CE",
				color: "#BCC8CE",
				boxShadow: "none"
			});
		}
		else{
			$($buttons[$(this).index() - 1]).css({
				boxShadow: "none"
			});
		}
		$($guarantee[$(this).index() - 1]).hide(600);
		$checkedObj[$(this).index() - 1].style.stroke = "black";
	});

//=============================================================
// Конец блока привязки событий при наведении к строкам таблицы 
//=============================================================

//=====================================================
// Привязка событий к строкам таблицы при щелчке мышью
//=====================================================

	//Первый столбец

	$liWork.on('click', function() {
		$buttons[$(this).index() - 1].dataset.clicked = true;
		$($checkedObj[$(this).index() - 1]).animate({'fill-opacity': '1'}, 1000);
	});

	//Второй столбец

	$liCost.on('click', function() {
		$buttons[$(this).index() - 1].dataset.clicked = true;
		$($checkedObj[$(this).index() - 1]).animate({'fill-opacity': '1'}, 1000);
	});

	//Третий столбец

	$liOrder.on('click', function() {
		$buttons[$(this).index() - 1].dataset.clicked = true;
		$($checkedObj[$(this).index() - 1]).animate({'fill-opacity': '1'}, 1000);
	});

//================================================================
// Конец блока привязки событий при щелчке мышью к строкам таблицы 
//================================================================

// Появление модального окна при нажатии на кнопку

	$($buttons).on('click', function(){
		$($modal).css('display', 'flex');
	});

// Раскрытие таблицы при нажатии на кнопку
	
	$($showAll).on('click', function(event) {
		if(document.querySelector(".table__work ul").lastElementChild.style.display == 'none'){
			$($liWork).show();
			$($liCost).show();
			$($liOrder).show();
			$('.wrapup svg polyline').attr('points', '0,10 8,3 15,10');
			$('.wrapup a span').text('Скрыть');
		}
		else{
			hidePartofStrings();
			$('.wrapup svg polyline').attr('points', '0,0 7,8 15,0');
			$('.wrapup a span').text('Показать всё');
		}
	});
});
