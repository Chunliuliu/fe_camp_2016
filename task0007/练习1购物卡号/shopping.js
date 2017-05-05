var sub = document.getElementById('sub');
sub.onclick = shopping;

function shopping() {
	let card = document.getElementById('shopping-card').value;
	let card2 = card.replace(/-/g,"");
	if (card2.length == 20) {
		let card3 = card2.toUpperCase();
		alert(card3);
	}
	else {
		alert('异常：无效的密码格式');
	}
};