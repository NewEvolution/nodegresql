'use strict';

const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://localhost:5432/nodegresql');

const Frienemy = sequelize.define('frienemy', {
  name: Sequelize.STRING,
  birthday: Sequelize.DATE
});

const Project = sequelize.define('project', {
  name: Sequelize.STRING
});

Project.hasMany(Frienemy, {as: 'workers'});

sequelize.sync().then(() => {
  return Frienemy.create({
    name: 'Jane Doe',
    birthday: new Date('1980-3-4')
  });
}).then(frienemy => {
  console.log(frienemy.get({ // eslint-disable-line no-console
    plain: true
  }));
}).then(() => {
  return Project.create({
    name: 'Angular 101'
  });
});
