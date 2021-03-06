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

        Meteor.loginWithPassword(ID, PW);

        if(!Meteor.user()){
            return alert('로그인 실패');
        }

        var obj = {};
        var time = new Date();
        var tmpTime = time.getFullYear() + '/' + (time.getMonth()+1) + '/' + time.getDate() + '/'
            + time.getHours()+':'+ time.getMinutes()+':'+time.getSeconds();

        obj.작성자 = "admin";
        obj.내용 = "[" + ID + "] 님이 로그인 하셨습니다.";
        obj.시간 = tmpTime;
        Logs.insert(obj);
    }
})