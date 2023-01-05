const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const _ = require('lodash');


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ encoded: true }));

app.use(express.static("public"));

mongoose.connect('mongodb://127.0.0.1:27017/todolistDB', { useNewUrlParser: true });

const itemSchema = {
    name: String
};

const Item = mongoose.model("Item", itemSchema);

const item1 = new Item({
    name: "Welcome to your ToDoList "
});

const item2 = new Item({
    name: "Hit the + button to off a new Item "
});

const item3 = new Item({
    name: "<-- hit this to delete an item"
});

const defaultItems = [item1, item2, item3];

const listSchema = {
    name: String,
    items: [itemSchema]
};

const List = mongoose.model("List", listSchema);


app.get("/", function (req, res) {



    Item.find({}, function (err, foundItems) {

        if (foundItems.length === 0) {
            Item.insertMany(defaultItems, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Successfully saved default items to database.")
                }
            });
            res.redirect("/");
        } else {
            res.render("list", { listTitle: "Today", newListItems: foundItems });
        }

    });

});

app.get("/:customeListName", function(req,res){
    const customeListName = _.capitalize(req.params.customeListName);

    
    List.findOne({name : customeListName}, function(err, foundList) {
        if(!err) {
            if (!foundList) {
                // Craete New List
                const list = new List({
                    name: customeListName,
                    items: defaultItems
                });
            
                list.save();
                res.redirect("/");
            } else {
                // Show an existing List
                res.render("list", { listTitle: foundList.name, newListItems: foundList.items })
            }
        }
    });
});

app.post("/", function (req, res) {
    const itemName = req.body.newItem;
    const listName = req.body.list;
    const item = new Item({
        name: itemName
    });

    if (listName === "Today") {
        item.save();
        res.redirect("/");
    } else {
        List.findOne({name : listName}, function(err, foundList) {
            foundList.items.push(item);
            foundList.save();
            res.redirect("/" + listName);
        });
    }
});


app.post("/delete", function(req, res) {
    const checkedItemID = req.body.checkbox;
    const listName = req.body.listName;

    if (listName === "Today") {
        Item.findByIdAndRemove(checkedItemID, function(err) {
            if(err) {
                console.log(err);
            } else {
                console.log("Successfully deleted");
                res.redirect("/");
            }
        });
    } else {
        List.findOneAndUpdate({name : listName}, {$pull: {items: {_id: checkedItemID}}}, function(err, foundList) {
            if (!err) {
                res.redirect("/" +  listName);
            }
        })
    }

    
});

app.get("/work", function (req, res) {
    res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.get("/about", function (req, res) {
    res.render("about");
});

app.listen(8080, function () {
    console.log('listening on port 8080');
});