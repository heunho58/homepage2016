Template.userInfo.helpers({
    ID : function(){
        return Meteor.user().username;
    },
    Name : function(){
        return Meteor.user().profile.name;
    },
    Gender : function(){
        if(Meteor.user().profile.gender == 0)
            return "남";
        else
            return "여";
    },
    Email : function(){
        return Meteor.user().emails[0].address;
    }
});
