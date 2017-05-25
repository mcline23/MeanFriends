var mongoose = require('mongoose');
var Friend = mongoose.model('friends');

module.exports = {
    index: function(req, res){
        Friend.find({}, function(err, friends){
            if(err){
                return res.json(err)
            }
            else{
                res.json(friends)
            }
        })
    },

    create: function(req, res){
        var friend = new Friend({firstname: req.body.firstname, lastname: req.body.lastname, birthday: req.body.birthday});
        friend.save(function(err){
            if(err){
                return res.json(err)
            }
            else{
                return res.json(friend);
            }
        })
    },

    update: function(req, res){
        console.log(req.body)
        Friend.findOne({_id: req.params.id}, function(err, thisfriend){
            thisfriend.firstname = req.body.firstname
            thisfriend.lastname = req.body.lastname
            thisfriend.birthday = req.body.birthday
            thisfriend.save(function(err){
            if(err){
                return res.json(err)
            }
            else{
                return res.json(Friend)
            }
            })
        })
    },

    delete: function(req, res){
        Friend.remove({_id: req.params.id}, function(err){
           
        });

    },

    show: function(req,res){
        Friend.findOne({_id: req.params.id}, function(err, friend) {
        res.json(friend);
        });
    }
}
