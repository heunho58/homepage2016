Router.route('/boardWrite.html', 'boardWrite');

Template.boardWrite.events({
    "click #write": function(err, tmpl){

        console.log('버튼클릭!');

        var obj = {};
        obj.추천 = 0;
        obj.작성일 = $.now();
        obj.작성자 = Meteor.user().username;
        obj.제목 = $('#제목').val();
        obj.내용 = $('#내용').val();

        console.log('추천 작성일 제목 내용 입력!');

        //잘 이해가 안되는 부분
        var board = Boards.findOne({}, {sort : {'글번호': -1}});
        if(board !== undefined && board !== null){
            if(board.hasOwnProperty('글번호')){
                obj.글번호 = parseInt(board.글번호) +1;
            }
        }
        else
            obj.글번호 =0;

        console.log('글번호 입력');


        if(obj.제목.length <=0)
            return alert('제목을 입력해주세요!!');
        if(obj.내용.length <=0)
            return alert('내용을 입력해주세요!!');

        Boards.insert(obj);

        console.log('보드 데이터 전송');

        var obj2 = {};
        obj2.작성자 = "admin";
        obj2.내용 = "[" + Meteor.user().username + "]님이 '" + $('#제목').val() + "' 게시글을 작성하셨습니다." + $.now();
        Logs.insert(obj2);

        console.log('로그 데이터 전송');

        return alert('게시물 작성을 완료합니다.');
    }
});