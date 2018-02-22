Template.addressInput.events({
	'click button[name=saveAddress]' (evt, tmpl){
		var address = {
			name : tmpl.find("input[name=name]").value,
			phone : tmpl.find("input[name=phone]").value,
			email : tmpl.find("input[name=email]").value,
			company : tmpl.find("input[name=company]").value,
			birthday : tmpl.find("input[name=birthday]").value
		};

		AddressBook.insert(address);

		tmpl.find("input[name=name]").value = "";
		tmpl.find("input[name=phone]").value = "";
		tmpl.find("input[name=email]").value = "";
		tmpl.find("input[name=company]").value = "";
		tmpl.find("input[name=birthday]").value = "";
	}
});