var posts = [
  { title: 'State manipulation vs value calculation in programming',
    date: '2016-07-17',
    tags: [ 'Functional programming' ]
  }
];

var getURL = function(post) {
  return post.title.toLowerCase().replace(/\s+/g, '-') + '.html';
};

exports.posts = posts;
exports.getURL = getURL;
