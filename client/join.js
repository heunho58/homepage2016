Router.route('/join.html', 'join');

Template.join.events({
    'click #btnJoin': function (evt, tmpl) {
        var tname = $("#inputName").val();
        var id = $('#inputID').val();
        var password = $('#inputPW').val();
        var tgender = $('[name="gender"]:checked').val();
        var tbirth = ($('#YYYY').val() + '년' + $('#MM').val() + '월' + $('#DD').val() + '일');
        var email = $('#email').val();

        options = {};
        options.username = id;
        options.password = password;
        options.email = email;
        options.profile ={
            name : tname,
            gender : tgender,
            birth : tbirth
        }

        Accounts.createUser(options, function (err) {
            if (err)
                return alert(err);
        });

        Meteor.loginWithPassword(id, password);
        alert('회원가입하셨습니다. 로그인시켜 드리겠습니다. 환영합니다');

        var time = new Date();
        var tmpTime = time.getFullYear() + '/' + (time.getMonth()+1) + '/' + time.getDate() + '/'
            + time.getHours()+':'+ time.getMinutes()+':'+time.getSeconds();
        var obj = {};
        obj.작성자 = "admin";
        obj.내용 = "[" + options.username + "] 님이 회원가입하셨습니다.";
        obj.시간 = tmpTime;

        Logs.insert(obj);
    }

});