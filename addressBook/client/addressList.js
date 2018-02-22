Template.addressList.onCreated(function(){
	Session.set("cnt", 30);
	var self = this;

	self.autorun(function(){
		self.subscribe("AddressBookData", Session.get("cnt"));
	});

	$(window).scroll(function(){
		var scrollHeight = $(window).scrollTop() + $(window).height();
		var documentHeight = $(document).height();
		if(scrollHeight + 200 >= documentHeight){
			Session.set("cnt", Session.get("cnt") + 30);
		}
	});

});

Template.addressList.helpers({
	list(){
		return AddressBook.find({}, {/* limit:10, */ sort:{name:1}});
	}
});

Template.addressList.events({
	"click button[name=more]" (evt, tmpl){
		Session.set("cnt", Session.get("cnt") + 5);
	}
});
