Router.route('/join.html', 'join');

Template.join.events({
    'click #btnJoin': function (evt, tmpl) {
        var name = $("#inputName").val();
        var id = $('#inputID').val();
        var password = $('#inputPW').val();
        var gender = $('[name="gender"]:checked').val();
        var birth = ($('#YYYY').val() + '년' + $('#MM').val() + '월' + $('#DD').val() + '일');
        var email = $('#email').val();

        options = {};
        options.name = name;
        options.username = id;
        options.password = password;
        options.gender = gender;
        options.birth = birth;
        options.email = email;

        var obj = {};
        obj.작성자 = "admin";
        obj.내용 = "[" + options.username + "] 님이 회원가입하셨습니다." + $.now();
        Logs.insert(obj);

        Accounts.createUser(options, function (err) {
            if (err)
                return alert(err);
        });

        Meteor.loginWithPassword(id, password);
        alert('회원가입하셨습니다. 로그인시켜 드리겠습니다. 환영합니다');




    }

});