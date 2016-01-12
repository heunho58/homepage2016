Router.configure({
    layoutTemplate: 'layout'
});

//Router.onBeforeAction(function(req, res, next){
//    req.createdAt = new Date();
//    req.type = 'onbefroeAction';
//    Logs.input(req);
//    return this.next();
//})