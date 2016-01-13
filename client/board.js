Router.route('/board.html', 'board');

Template.board.helpers({
    boards: function() {
        return Boards.find();
    }
});
Template.board.events({
    "click #remove": function(event, template) {
        if(Meteor.user()) {
            if (confirm('정말 지우시겠습니까?')) {
                var 제목 = this.제목;
                Boards.remove({
                    _id: this._id
                });
                var obj = {};
                var time = new Date();
                var tmpTime = time.getFullYear() + '/' + (time.getMonth()+1) + '/' + time.getDate() + '/'
                    + time.getHours()+':'+ time.getMinutes()+':'+time.getSeconds();
                obj.시간 = tmpTime;
                obj.작성자 = "admin";
                obj.내용 = "[" + Meteor.user().username + "]님이 '" + 제목 + "' 게시글을 삭제 하셨습니다.";
                Logs.insert(obj);
            }
        }
        else
            return alert('Login이 필요한 기능입니다.');

    },
    "click #plusButton": function(event, template){
        if(Meteor.user()){
            var key= this._id;
            obj={};
            obj.추천 = this.추천+1;
            obj.작성일 = this.작성일;
            obj.작성자 = this.작성자;
            obj.제목 = this.제목;
            obj.내용 = this.내용;
            obj.글번호 = this.글번호;

            Boards.update({_id:key}, obj, function(err, doc){
                //throw(err);
            });

            var obj2 = {};
            var time = new Date();
            var tmpTime = time.getFullYear() + '/' + (time.getMonth()+1) + '/' + time.getDate() + '/'
                + time.getHours()+':'+ time.getMinutes()+':'+time.getSeconds();
            obj2.시간 = tmpTime;
            obj2.작성자 = "admin";
            obj2.내용 = "[" + Meteor.user().username + "]님이 '" + obj.제목 + "' 게시글을 추천 하셨습니다.";
            Logs.insert(obj2);
        }
        else
            return alert('Login이 필요한 기능입니다.');
    },
    "click #minusButton": function(event, template){
        if(Meteor.user()) {
            var key = this._id;
            obj = {};
            if (this.추천 === 0)
                return alert('양심없는 친구야 그만좀 눌러 작성자가 얼마나 슬퍼하겠니');

            obj.추천 = this.추천 - 1;
            obj.작성일 = this.작성일;
            obj.작성자 = this.작성자;
            obj.제목 = this.제목;
            obj.내용 = this.내용;
            obj.글번호 = this.글번호;

            Boards.update({_id: key}, obj, function (err, doc) {
                //throw(err);
            });

            var obj2 = {};
            var time = new Date();
            var tmpTime = time.getFullYear() + '/' + (time.getMonth()+1) + '/' + time.getDate() + '/'
                + time.getHours()+':'+ time.getMinutes()+':'+time.getSeconds();
            obj2.시간 = tmpTime;
            obj2.작성자 = "admin";
            obj2.내용 = "[" + Meteor.user().username + "]님이 '" + obj.제목 + "' 게시글을 비추천 하셨습니다.";
            Logs.insert(obj2);
        }
        else
            return alert('Login이 필요한 기능입니다.');

    }

});