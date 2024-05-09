
const User = require("../Models/userModel")
const Customer = require("../Models/customerModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const scret="avi2024"

exports.getAllUsers = (req, res) => {
    User.find(req.body)
        .then(uObj => {
            res.json({
                status: 200,
                success: true,
                msg: uObj
            })
        })
        .catch(err => {
            res.json({
                status: 400,
                success: false,
                msg: err
            })
        })
}

exports.register = (req, res) => {
    User.findOne({ email: req.body.email })
        .then(uData => {
            if (uData === null) {
                let userObj = new User();
                userObj.name = req.body.name;
                userObj.email = req.body.email;
                userObj.password = bcrypt.hashSync(req.body.password, 10);
                userObj.save()
                    .then(cData => {
                        let custObj = new Customer();
                        custObj.name = req.body.name;
                        custObj.email = req.body.email;
                        custObj.number = req.body.number;
                        custObj.city = req.body.city;
                        custObj.password = bcrypt.hashSync(req.body.password, 10);
                        custObj.userId = cData._id;
                        custObj.save()
                            .then(() => {
                                res.json({
                                    status: 200,
                                    success: true,
                                    msg: "User registered"
                                });
                            })
                            .catch(err => {
                                res.json({
                                    status: 500,
                                    success: false,
                                    msg: String(err)
                                });
                            });
                    })
                    .catch(err => {
                        res.json({
                            status: 500,
                            success: false,
                            msg: String(err)
                        });
                    });
            } else {
                res.json({
                    status: 400,
                    success: false,
                    msg: "User already exists"
                });
            }
        })
        .catch(err => {
            res.json({
                status: 500,
                success: false,
                msg: String(err)
            });
        });
};


exports.login = (req, res) => {
    User.findOne({ email: req.body.email })
        .then(uData => {
            if (uData === null) {
                res.json({
                    status: 400,
                    success: false,
                    msg: "User does not exist. Please register yourself."
                });
            } else {
                const passwordMatch = bcrypt.compareSync(req.body.password, uData.password);
                if (!passwordMatch) {
                    res.json({
                        status: 400,
                        success: false,
                        msg: "Invalid email or password."
                    });
                } else {
                    const payload = {
                        _id: uData._id,
                        name: uData.name,
                        email: uData.email,
                        userType: uData.userType
                    };
                    const token = jwt.sign(payload, scret, {});
                    res.json({
                        status: 200,
                        success: true,
                        msg: "Successful login",
                        data: uData,
                        token: token
                    });
                }
            }
        })
        .catch(err => {
            res.json({
                status: 500,
                success: false,
                msg: String(err)
            });
        });
};
