$(function() {

	//Объявление и инициализация переменных

	var $guarantee = $('.table__cost .li-info span:last-child').not(':first()');
	var $liWork = $('.table__work li').not(':first()');
	var $liCost = $('.table__cost li').not(':first()');
	var $liOrder = $('.table__order li').not(':first()');
	var $buttons = $('.table__order li a');
	var $checkedObj = $('.table__work svg')
	
 	//Отключение отображения различных элементов

	$guarantee.hide();

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
		$guarantee[$(this).index() - 1].style.display = 'inline';
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
		$guarantee[$(this).index() - 1].style.display = 'none';
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
		$guarantee[$(this).index() - 1].style.display = 'inline';
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
		$guarantee[$(this).index() - 1].style.display = 'none';
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
		$guarantee[$(this).index() - 1].style.display = 'inline';
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
		$guarantee[$(this).index() - 1].style.display = 'none';
		$checkedObj[$(this).index() - 1].style.stroke = "black";
	});

//=============================================================
// Конец блока привязки событий при наведении к строкам таблицы 
//=============================================================

//=====================================================
// Привязка событий к строкам таблицы при щелчке мышью
//=====================================================

	$liWork.on('click', function() {
		$buttons[$(this).index() - 1].dataset.clicked = true;
	});

	//Второй столбец

	$liCost.on('click', function() {
		$buttons[$(this).index() - 1].dataset.clicked = true;
	});

	//Третий столбец

	$liOrder.on('click', function() {
		$buttons[$(this).index() - 1].dataset.clicked = true;
	});

//================================================================
// Конец блока привязки событий при щелчке мышью к строкам таблицы 
//================================================================

});
