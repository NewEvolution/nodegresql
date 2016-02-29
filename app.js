'use strict';

const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://localhost:5432/nodegresql');

const Frienemy = sequelize.define('frienemy', {
  name: Sequelize.STRING,
  birthday: Sequelize.DATE,
  friend: Sequelize.BOOLEAN
});

const Project = sequelize.define('project', {
  name: Sequelize.STRING
});

Project.hasMany(Frienemy, {as: 'workers'});

let jane;

sequelize.sync().then(() => {
  jane = Frienemy.create({
    name: 'Jane Doe',
    birthday: new Date('1980-3-4')
  });
}).then(() => {
  console.log(jane); // eslint-disable-line no-console
}).then(() => {
  return Project.create({
    name: 'Angular 101'
  });
}).then(() => {
  // jane.addProject(project);
});
