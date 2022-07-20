let Twit = require('twit')

let T = new Twit({
    // keys y tokens desde la app de twitter developer.twitter.com
  consumer_key:         'BksDyNbFxRs5ftldBPphsIYt4',
  consumer_secret:      'oeKjo8TtYjKKN0SvbkIo9OlaqZz7d0bzbQen9NQd8bnWZ11A8C',
  access_token:         '1496301397444288518-z3xyMi1pz2XdSTgSx9ol7HkbkQHUYy',
  access_token_secret:  'yX8RjdnNvQs5pBXxYzAspvufJq5PXFivGFcaMqCsHSZDZ',
})
let id_twitter;
function buscar(){
    T.get('search/tweets', { q: 'edisonjsapps', count: 1 }, function(err, data, response) {
      try {
         id_twitter = data.statuses[0].id_str; 
         tuitear(id_twitter);
      } catch (error) {
          
      }
    })
}

function tuitear(tweet){
    T.post('statuses/retweet/:id', { id: tweet }, function (err, data, response) {
        console.log(data)
      })
}

setInterval(buscar, 10*60*1000);
