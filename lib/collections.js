Boards = new Meteor.Collection('boards');
Chatting = new Meteor.Collection('Chatting');
Logs = new Meteor.Collection('logs');

//Boards.insert({
//    글번호 : 1,
//    제목 : "첫번째 게시글",
//    작성자 : "노현호",
//    작성일 : 2016/01/12,
//    추천 : 0
//})

//Logs.insert({
//    작성자 : "노현호",
//    내용 : "'노현호'님이 회원가입하셨습니다."
//})
//필요한 액션(게시판 글 작성)이 실시 될 때 해당 액션을 insert하고
//필요할 때 꺼내 쓴다.