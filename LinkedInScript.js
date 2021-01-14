var output = [];
var cardClass = ".discover-entity-card--default-width";
var cardName = "discover-person-card__name";
var cardOccupation = "discover-person-card__occupation";
var cardLink = "discover-entity-type-card__link";
var cardImage = "discover-entity-type-card__image-circle";

var cards = $$(cardClass);

for (var i=0;i<=cards.length;i++)
{
	var person = {};
	try {
		person["name"] = cards[i].getElementsByClassName(cardName)[0].innerText.trim();
		//english version
		if (cards[i].getElementsByClassName(cardOccupation)[0].innerText.indexOf(" at ")>0)
		{
			person["job"] = cards[i].getElementsByClassName(cardOccupation)[0].innerText.trim().split(" at ")[0];
			person["company"] = cards[i].getElementsByClassName(cardOccupation)[0].innerText.trim().split(" at ")[1];
		}
		//romanian version
		if (cards[i].getElementsByClassName(cardOccupation)[0].innerText.indexOf(" la ")>0)
		{
			person["job"] = cards[i].getElementsByClassName(cardOccupation)[0].innerText.trim().split(" la ")[0];
			person["company"] = cards[i].getElementsByClassName(cardOccupation)[0].innerText.trim().split(" la ")[1];
		}
		person["url"] = cards[i].getElementsByClassName(cardLink)[0].href;
		person["img"] = cards[i].getElementsByClassName(cardImage)[0].src;
	} catch (e) {}
	if (person.name) output.push(person);
}
console.log(JSON.stringify(output));
