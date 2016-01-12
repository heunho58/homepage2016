Router.route('/board.html', 'board');

Template.board.helpers({
    boards: function() {
        return Boards.find();
    }

});
Template.board.events({
    "click #remove": function(event, template) {
        if (confirm('정말 지우시겠습니까?')) {
            제목 : this.
            Boards.remove({
                _id: this._id
            });
            var obj = {};
            obj.작성자 = "admin";
            obj.내용 = "[" + ID + "] 님이 로그인 하셨습니다." + $.now();
            Logs.insert(obj);
        }

    }
});