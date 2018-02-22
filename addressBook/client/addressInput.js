Template.addressInput.events({
	'click button[name=saveAddress]' (evt, tmpl){
		var address = {
			name : tmpl.find("input[name=name]").value,
			phone : tmpl.find("input[name=phone]").value,
			email : tmpl.find("input[name=email]").value,
			company : tmpl.find("input[name=company]").value,
			birthday : tmpl.find("input[name=birthday]").value,
			owner : Meteor.userId()/* 로그인된 사용자 아이디 추가 */
		};

		/*1. 데이터 검증 코드*/
		try{

		check(address.name, NotEmptyString);
		check(address.company, NotEmptyString);
		check(address.email, EmailString);
		check(address.phone, PhoneString);
		check(address.birthday, BirthDayString);

	}catch(err){
		alert("입력 값을 확인하세요 : [" + err.message + "]");
		return;
	}
		/*2. 데이터 검증 후 등록*/
		AddressBook.insert(address);

		tmpl.find("input[name=name]").value = "";
		tmpl.find("input[name=phone]").value = "";
		tmpl.find("input[name=email]").value = "";
		tmpl.find("input[name=company]").value = "";
		tmpl.find("input[name=birthday]").value = "";
	}
});
