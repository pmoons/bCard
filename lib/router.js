Router.configure({
	'layoutTemplate': "layout"
});

Router.route('/bCard/:first_name', {
	'name': "bCard",
	'data': function() {
		return ProgrammerCollection.find({'first_name': this.params.first_name}).fetch()[0];
	}
});

Router.route('/new', {'name': "addForm"});