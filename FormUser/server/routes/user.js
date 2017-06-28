const express = require('express'),
	  path = require('path'),
	  userList = require('../coffee.js');
	  router = express.Router();

router.get('/list', (req, res) => {
	res.send(userList);
});

//изменение юзера
router.patch('/patch', (req, res) => {
	let changeUser = req.body;
	let findUser = userList.findIndex(userList => userList.id == changeUser.id);
	userList[findUser] = changeUser
	res.send('success');
})

//инфо о юзере
router.put('/put/:id', (req, res) => {
	let id = req.params.id;
	let findUser = userList.findIndex(userList => userList.id == id);
	res.send(userList[findUser]);
})

//добавление юзера
router.post('/add_user', (req, res) => {
	let newUser = req.body;
	newUser.id = new Date();
	userList.push(newUser);
	res.send('success');
})

//удаление юзера
router.delete('/delete/:id', (req, res) => {
	let id = req.params.id;
	let findUser = userList.findIndex(userList => userList.id == id);
	userList.splice(findUser, 1);
	res.send('success');
})


module.exports = router;