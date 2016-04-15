function AddressBook() {
	this.contacts = [];
	this.initialComplete = false;
};


//Asynchronous request - fake API call.
AddressBook.prototype.getInitialContacts = function(callback) {
	var self = this;

	setTimeout(function() {
		self.initialComplete = true;
		if (callback) {
			return callback();
		}
	}, 3);
};

AddressBook.prototype.addContact = function(contact) {
	this.contacts.push(contact);
};

AddressBook.prototype.getContact = function(index) {
	return this.contacts[index];
};

AddressBook.prototype.deleteContact = function(index) {
	this.contacts.splice(index, 1);
};