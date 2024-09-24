const userModel = require('../models/UserSchema');
const jwt = require('jsonwebtoken');

const userOperation = {
  async AddUser(userObject, response) {
    try {
      const doc = await userModel.create(userObject);
      response.json({ Status: "S", record: doc });
    } catch (err) {
      console.log("Error is", err);
      response.json({ Status: "F" });
    }
  },

  async login(userObject, response) {
    try {
      const doc = await userModel.findOne(userObject);
      if (doc) {
        jwt.sign({ doc }, 'secretkey', { expiresIn: '1h' }, (err, token) => {
          if (err) throw err;
          response.json({ Status: "S", msg: "Welcome bro " + doc.username, token: token });
        });
      } else {
        response.json({ Status: "F", msg: "Invalid username or password" });
      }
    } catch (err) {
      console.log(err);
      response.json({ Status: "F", msg: "An error occurred during login" });
    }
  },

  async AddFriend(userObject, response) {
    const check = await this.Find(userObject.username);
    if (check) {
      try {
        const doc = await userModel.findOneAndUpdate(
          { username: userObject.defaultUser },
          { "$push": { "friends": userObject.username, "expensis": { "name": userObject.username, "data": {} } } },
          { "new": true }
        );
        response.json({ Status: "S", msg: "Added successfully", doc: doc });
      } catch (err) {
        console.log(err);
        response.json({ Status: "F", msg: "Error adding friend" });
      }
    } else {
      response.json({ Status: "F", msg: "Your friend is not registered yet" });
    }
  },

  async Find(username) {
    try {
      const doc = await userModel.findOne({ username });
      if (doc) {
        return doc;
      } else {
        console.log("Not found");
        return null;
      }
    } catch (err) {
      console.log(err);
      return null;
    }
  },

  async AddExp(userObject, response) {
    try {
      const doc = await userModel.findOneAndUpdate(
        { username: userObject.username, "expensis.name": userObject.user },
        {
          '$set': { "expensis.$.data.desc": userObject.inp.description, "expensis.$.data.date": userObject.inp.date },
          "$inc": { "expensis.$.data.ammount": userObject.inp.amount }
        },
        { "new": true }
      );
      response.json({ Status: "S", msg: "Added successfully", doc: doc });
    } catch (err) {
      console.log(err);
      response.json({ Status: "F", msg: "Error adding expense" });
    }
  },

  async settle(userObject, response) {
    try {
      const doc = await userModel.findOneAndUpdate(
        { username: userObject.username, "expensis.name": userObject.user },
        { "$inc": { "expensis.$.data.ammount": userObject.val } },
        { "new": true }
      );
      response.json({ Status: "S", msg: "Settlement added successfully", doc: doc });
    } catch (err) {
      console.log(err);
      response.json({ Status: "F", msg: "Error settling amount" });
    }
  }
};

module.exports = userOperation;
