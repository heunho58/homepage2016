Template.nav.events({
    "click [name=logout]": function(evt, tmpl) {
        Meteor.logout();

        var obj = {};
        obj.작성자 = "admin";
        obj.내용 = "[" + Meteor.user().username + "] 님이 로그아웃 하셨습니다." + $.now();
        Logs.insert(obj);
    }
})