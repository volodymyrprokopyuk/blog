let posts = [
  { title: 'State manipulation vs value calculation in programming',
    date: '2016-07-28',
    tags: [ 'Functional programming' ]},
  { title: 'State manipulation vs value calculation in programming',
    date: '2016-07-29',
    tags: [ 'Distributed systems' ] },
  { title: 'State manipulation vs value calculation in programming',
    date: '2016-07-30',
    tags: [ 'Functional programming' ] }
];

let moment = require('moment');
let R = require('ramda');

let formatDate = function(post) {
  post.date = moment(post.date).format('D MMM, YYYY');
  return post;
};

let buildURL = function(post) {
  post.url = post.title.toLowerCase().replace(/[^a-zA-Z0-9 ]+/g, '').
    replace(/ +/g, '-') + '.html';
  return post;
};

let byTag = function(tag) {
  return function(post) { return R.contains(tag, post.tags); };
};

let processPosts = R.pipe(R.sortBy(R.prop('date')), R.reverse,
                          R.map(R.pipe(formatDate, buildURL)));

exports.posts = posts = processPosts(posts);
exports.fpPosts = R.filter(byTag('Functional programming'))(posts);
