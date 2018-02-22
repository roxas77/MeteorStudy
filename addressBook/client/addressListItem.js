Template.addressListItem.helpers({
	editing(){
		return this._id == Session.get("editItem");
	}
});

Template.addressListItem.events({
	'click button[name=remove]' (evt, tmpl){
		AddressBook.remove( {_id : this._id } );
	},

	'click button[name=modify]' (evt, tmpl){
		Session.set("editItem", this._id);
	},

	'click button[name=save]' (evt, tmpl){
		var address = {
			name : tmpl.find("input[name=name]").value,
			phone : tmpl.find("input[name=phone]").value,
			email : tmpl.find("input[name=email]").value,
			company : tmpl.find("input[name=company]").value,
			birthday : tmpl.find("input[name=birthday]").value
		};

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

		AddressBook.update({_id:this._id}, {$set:address});
		Session.set("editItem", null);
	},

	'click button[name=cancel]' (evt, tmpl){
		Session.set("editItem", null);
	},

	'click .edit-thing' (evt, tmpl){
		Session.set("editItem", this._id);
	}

});
