const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


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

app.post("/", function (req, res) {
    const itemName = req.body.newItem;

    const item = new Item({
        name: itemName
    });
    item.save();

    res.redirect("/");

});

app.post("/delete", function(req, res) {
    const checkedItemID = req.body.checkbox;

    Item.findByIdAndRemove(checkedItemID, function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("Successfully deleted");
            res.redirect("/");
        }
    });
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