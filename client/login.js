Router.route('/login.html', 'login');

Template.login.events({
    "click [name=loginButton]": function(evt, tmpl) {
        var ID = $('#ID').val();
        var PW = $('#PW').val();
        if (!ID) {
            return alert('ID를 입력해주세요.');
        }
        if (!PW) {
            return alert('PW를 입력해주세요.');
        }

        var obj = {};
        obj.작성자 = "admin";
        obj.내용 = "[" + ID + "] 님이 로그인 하셨습니다." + $.now();
        Logs.insert(obj);
        Meteor.loginWithPassword(ID, PW);
    }
})