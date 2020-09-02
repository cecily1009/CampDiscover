var express = require("express");
var router = express.Router({mergeParams: true});
var Campground = require("../models/campground");
var Comment = require("../models/comment");
var middleware = require("../middleware");

//Comments create
router.post("/",middleware.isLoggedIn,function(req, res){
  //lookup campground using ID
  Campground.findById(req.params.id, function(err, campground){
    if(err){
      console.log(err);
      res.redirect("/campgrounds");
    }else {
      //CREATE NEW Comment
      Comment.create(req.body.comment, function(err, comment){
        if(err){
          req.flash("error", "Something went wrong. "+ err.message);
          console.log(err);}
          else {
            //add username and id to comment
            comment.author.id = req.user._id;
            comment.author.username = req.user.username;
            //save commnet
            comment.save();
            campground.comments.push(comment);
            campground.save();
            req.flash("success", "New comment added!");
            res.redirect('/campgrounds/'+campground._id);
          }
      });
    }
  });
});

//Edit comments
router.get("/:comment_id/edit", middleware.isCommentAuthorized, function(req, res){

  Comment.findById(req.params.comment_id, function(err, foundComment){

      res.render("comments/edit", {campground_id: req.params.id, comment: foundComment});

  });

});

//UPDATE Comment
router.put("/:comment_id", middleware.isCommentAuthorized, function(req, res){
  Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment){
    if(err) {
      res.redirect("back");
    }else {
      res.redirect("/campgrounds/"+req.params.id);
    }
  });
});

//DESTYOY COMMENT
router.delete("/:comment_id", middleware.isCommentAuthorized, function(req, res){
  Comment.findByIdAndRemove(req.params.comment_id, function(err, foundComment){
    if(err) {
      res.redirect("back");
    }else {
      req.flash("success", "Comment deleted!");
      res.redirect("/campgrounds/"+req.params.id)
    }
  })
});



module.exports = router;
