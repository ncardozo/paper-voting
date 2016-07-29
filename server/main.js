import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  if(Polls.find().count() === 0) {
    var initPoll =  [
      {
          poll: 'August2016',
          choices: [
            {title: 'Modules as objects in newspeak',
             authors: 'Gilad Bracha, Peter von der Ahé, Vassili Bykov, Yaron Kashai, William Maddox, Eliot Miranda',
             votes: 0}
          ]
      }
    ];
    Polls.insert(initPoll);
  }
  var users = [
    { userId: 'n.cardozo' },
    { userId: 'mar-san1'  }
  ];
  Users.insert(users);
});
