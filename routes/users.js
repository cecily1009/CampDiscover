var express = require("express");
var router = express.Router();
var User = require("../models/user");
var Campground = require("../models/campground");
var Review = require("../models/review");
var middleware = require("../middleware");

//PROFILE show ROUTE
router.get("/:id", function(req, res){
  User.findById(req.params.id, function(err, foundUser){
    if(err) {
      req.flash("error", "Something went wrong.");
      return res.redirect("back");
    }
    Campground.find().where('author.id').equals(foundUser._id).exec(function(err, campgrounds){
      if(err) {
        req.flash("error", "Something went wrong.");
        return res.redirect("back");
      }
      res.render("users/show", {user:foundUser, campgrounds:campgrounds});
    });
  });
});

router.get("/:id/edit", middleware.isLoggedIn, function(req,res){
  User.findById(req.params.id, function(err, foundUser){
    res.render("users/edit", {user:foundUser});
  });
});

router.put("/:id", middleware.isLoggedIn, function(req, res){
  User.findByIdAndUpdate(req.params.id, req.body.user, function(err, user){
    if(err){
        req.flash("error", err.message);
        res.redirect("back");
    } else {
        req.flash("success","Successfully Updated!");
        res.redirect("/users/"+ user._id);
    }
  });
});

module.exports = router;
