import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  if(Polls.find().count() === 0) {
    var initPoll =  [
      {
          question: 'August-2016',
          choices: [
            {text: 'Modules as objects in newspeak. By Gilad Bracha, Peter von der Ahé, Vassili Bykov, Yaron Kashai, William Maddox, Eliot Miranda',
             votes: 0},
             {text: '', votes: 0}
          ]
      }
    ];
    Polls.insert(initPoll);
  }
});
