
Template.body.helpers({
  polls: function() {
    return Polls.find({});
  },
  month: function() {
    var date = new Date();
    var m = [];
    m[0] = "January";
    m[1] = "February";
    m[2] = "March";
    m[3] = "April";
    m[4] = "May";
    m[5] = "June";
    m[6] = "July";
    m[7] = "August";
    m[8] = "September";
    m[9] = "October";
    m[10] = "November";
    m[11] = "December";
    return m[(date.getMonth() + 1) % 12];
  }
});

UI.registerHelper('indexedArray', function(context, options) {
    if (context) {
        return context.map(function(item, index) {
            item._index = index + 1;
            return item;
        });
    }
});
