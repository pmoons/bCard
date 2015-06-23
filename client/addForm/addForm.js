Template.addForm.events({
	'submit form': function(event, template) {
		// Prevent Page Refresh
		event.preventDefault();

		// Get values from inputs
		var first_name = template.find("#first_name").value;
		var last_name = template.find("#last_name").value;
		var gender = template.find("#gender").value;
		var quote = template.find("#quote").value;
		var github_link = template.find("#github_link").value;
		
		ProgrammerCollection.insert(createNewProgrammer(first_name, last_name, gender, quote, github_link));
		console.log(ProgrammerCollection.findOne());

		Router.go('/bCard/' + first_name);
	}
});