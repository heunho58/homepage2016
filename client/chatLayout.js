Router.route('/chatLayout.html', 'chat');

Template.chat.events({
    'keyup [name=send]': function(evt, tmpl) {
        if(evt.which === 13){
            var message = $("[name=send]").val();
            var obj = {
                //message : message;
            };
            obj.message = message;
            obj.message = obj.message + $.now();
            Chatting.insert(obj);

            $("[name=send]").val('');
        }
    },
    'click [#submitButton]' : function(evt, tmpl){
        var message = $("[name=send]").val();
        var obj = {};
        obj.message = message;
        obj.message = obj.message + $.now();
        Chatting.insert(obj);

        $("[name=send]").val('');
    }
})


Template.chat.helpers({
    messages: function () {
        var obj = Chatting.find().fetch();
        return obj;
    },
    닉네임: function () {
        return Meteor.user().username;
    }
})