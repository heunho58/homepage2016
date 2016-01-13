Router.route('/boardWrite.html', 'boardWrite');

Template.boardWrite.events({
    "click #write": function(err, tmpl){
        var obj = {};
        obj.추천 = 0;
        obj.작성일 = $.now();
        obj.작성자 = Meteor.user().username;
        obj.제목 = $('#제목').val();
        obj.내용 = $('#내용').val();

        //잘 이해가 안되는 부분
        var board = Boards.findOne({}, {sort : {'글번호': -1}});
        if(board !== undefined && board !== null){
            if(board.hasOwnProperty('글번호')){
                obj.글번호 = parseInt(board.글번호) + 1;
            }
        }
        else
            obj.글번호 = 1;

        if(obj.제목.length <=0)
            return alert('제목을 입력해주세요!!');
        if(obj.내용.length <=0)
            return alert('내용을 입력해주세요!!');

        Boards.insert(obj);

        var obj2 = {};
        var time = new Date();
        var tmpTime = time.getFullYear() + '/' + (time.getMonth()+1) + '/' + time.getDate() + '/'
            + time.getHours()+':'+ time.getMinutes()+':'+time.getSeconds();
        obj2.시간 = tmpTime;

        obj2.작성자 = "admin";
        obj2.내용 = "[" + Meteor.user().username + "]님이 '" + $('#제목').val() + "' 게시글을 작성하셨습니다.";
        Logs.insert(obj2);

        return alert('게시물 작성을 완료합니다.');
    }
});