Router.route('/chatLayout.html', 'chat');

Template.chat.events({
    'keyup [name=send]': function(evt, tmpl) {
        if(evt.which === 13){
            var message = $("[name=send]").val();
            var obj = {
                //message : message;
            };
            var now = new Date();
            var tmpTime = now.getHours()+':'+now.getMinutes()+':'+now.getSeconds();

            obj.time = tmpTime;
            obj.sender = Meteor.user();
            obj.message = message;

            Chatting.insert(obj);

            $("[name=send]").val('');
        }
    },
    'click [name=submitButton]' : function(evt, tmpl){
        var message = $("[name=send]").val();
        var obj = {};
        var now = new Date();
        var tmpTime = now.getHours()+':'+now.getMinutes()+':'+now.getSeconds();

        obj.time = tmpTime;
        obj.sender = Meteor.user();
        obj.message = message;
        obj.message = obj.message + $.now();
        Chatting.insert(obj);

        $("[name=send]").val('');
    }
})


Template.chat.helpers({
    messages: function () {
        return Chatting.find().fetch();
    },
    sender: function () {
        return Chatting.find({_id:this._id}).fetch()[0].sender.username;
    },
    time : function(){
        return Chatting.find({_id:this._id}).fetch()[0].time;;
    },
    writer : function(){
        return Meteor.user().username;
    }
})