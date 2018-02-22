Template.addressList.helpers({
	list(){
		return AddressBook.find({}, {sort:{name:1}});
	}
});

Template.addressList.events({

});