/**
 * Created by sasha on 19.09.15.
 */
'use strict';

var Person = require('./person.js');

Person.find({}).remove(function() {
    Person.create(
        {
            _id:0,
            name: {
                firstName : "firstName",
                lastName : "lastName",
                middleName: "middleName"
            },
            birthDay : {
                day: 1,
                month : 1,
                year : 1
            }
        },
        {
            _id:1,
            name: {
                firstName : "firstName",
                lastName : "lastName",
                middleName: "middleName"
            },
            birthDay : {
                day: 1,
                month : 1,
                year : 1
            }
        },
        {
            _id:2,
            name: {
                firstName : "sdf",
                lastName : "lastName",
                middleName: "middleName"
            },
            birthDay : {
                day: 1,
                month : 1,
                year : 1
            }
        },
        {
            _id:3,
            name: {
                firstName : "sdfsdf",
                lastName : "lastName",
                middleName: "middleName"
            },
            birthDay : {
                day: 1,
                month : 1,
                year : 1
            }
        },
        {
            _id:4,
            name: {
                firstName : "sdfsf",
                lastName : "lastName",
                middleName: "middleName"
            },
            birthDay : {
                day: 1,
                month : 1,
                year : 1
            }
        },
        {
            _id:5,
            name: {
                firstName : "sdfsf",
                lastName : "lastName",
                middleName: "middleName"
            },
            birthDay : {
                day: 1,
                month : 1,
                year : 1
            }
        },
        {
            _id:6,
            name: {
                firstName : "sdfsdfsf",
                lastName : "lastName",
                middleName: "middleName"
            },
            birthDay : {
                day: 1,
                month : 1,
                year : 1
            }
        },
        {
            _id:7,
            name: {
                firstName : "sdfvgdf",
                lastName : "lastName",
                middleName: "middleName"
            },
            birthDay : {
                day: 1,
                month : 1,
                year : 1
            }
        },
        {
            _id:8,
            name: {
                firstName : "dfgsxc",
                lastName : "lastName",
                middleName: "middleName"
            },
            birthDay : {
                day: 1,
                month : 1,
                year : 1
            }
        },
        {
            _id:9,
            name: {
                firstName : "thgfdh",
                lastName : "lastName",
                middleName: "middleName"
            },
            birthDay : {
                day: 1,
                month : 1,
                year : 1
            }
        },
        {
            _id:10,
            name: {
                firstName : "sfgsrgdf",
                lastName : "lastName",
                middleName: "middleName"
            },
            birthDay : {
                day: 1,
                month : 1,
                year : 1
            }
        }
    );
});
