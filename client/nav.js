Template.nav.events({
    "click [name=logout]": function(evt, tmpl) {
        Meteor.logout();

        var obj = {};
        var time = new Date();
        var tmpTime = time.getFullYear() + '/' + (time.getMonth()+1) + '/' + time.getDate() + '/'
            + time.getHours()+':'+ time.getMinutes()+':'+time.getSeconds();
        obj.시간 = tmpTime;
        obj.작성자 = "admin";
        obj.내용 = "[" + Meteor.user().username + "] 님이 로그아웃 하셨습니다.";
        Logs.insert(obj);
    }
});