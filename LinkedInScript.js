var output = [];
for (var i=0;i<=999;i++)
{
	var person = {};
	person["name"] = $($(".mn-discovery-person-card")[i]).find(".mn-discovery-person-card__name").text().trim();
	try {
		if ($($(".mn-discovery-person-card")[i]).find(".mn-discovery-person-card__occupation").text().indexOf(" at ")>0)
		{
			person["job"] = $($(".mn-discovery-person-card")[i]).find(".mn-discovery-person-card__occupation").text().trim().split(" at ")[0];
			person["company"] = $($(".mn-discovery-person-card")[i]).find(".mn-discovery-person-card__occupation").text().trim().split(" at ")[1];
		}
		if ($($(".mn-discovery-person-card")[i]).find(".mn-discovery-person-card__occupation").text().indexOf(" la ")>0)
		{
			person["job"] = $($(".mn-discovery-person-card")[i]).find(".mn-discovery-person-card__occupation").text().trim().split(" la ")[0];
			person["company"] = $($(".mn-discovery-person-card")[i]).find(".mn-discovery-person-card__occupation").text().trim().split(" la ")[1];
		}
		person["url"] = $($(".mn-discovery-person-card")[i]).find(".mn-discovery-person-card__link")[0].href;
		person["img"] =  $($(".mn-discovery-person-card")[i]).find(".lazy-image")[0].src;
	} catch (e) {}
    output.push(person);
}
console.log(JSON.stringify(output));
