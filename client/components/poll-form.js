Template.pollForm.events({

  // handle the form submission
  'submit form': function(event) {

    // stop the form from submitting
    event.preventDefault();

    // get the data we need from the form
    var newPoll = {
      poll: event.target.poll.value,
      choices: [
        {  title: event.target.title.value, authors: event.target.authors.value, votes: 0 }
      ]
    };

    // create the new poll
    Polls.insert(newPoll);
  }

});
