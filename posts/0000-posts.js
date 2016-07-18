const posts = [
  { title: 'State manipulation vs value calculation in programming',
    date: '2016-07-28',
    tags: [ 'Functional programming' ]
  }
];

let moment = require('moment');
let R = require('ramda');

let buildURL = function(post) {
  post.url = post.title.toLowerCase().replace(/[^a-zA-Z0-9 ]+/g, '').
    replace(/\s+/g, '-') + '.html';
  return post;
};

let formatDate = function(post) {
  post.date = moment(post.date).format('D MMM, YYYY');
  return post;
};

exports.posts = R.map(R.pipe(formatDate, buildURL))(posts);
