//https://www.ibm.com/watson/developercloud/tone-analyzer/api/v3/?node#post-tone

var watson = require('watson-developer-cloud');

var tone_analyzer = watson.tone_analyzer({
  username: 'e45cdf8f-51ab-47c8-2222-e49e4e9bd346',
  password: 'INulvXPa8JBe',
  version: 'v3',
  version_date: '2016-05-19 '
});

tone_analyzer.tone({ text: 'This is the best pizza I have ever had' },
  function(err, tone) {
    var toneArray = tone.document_tone.tone_categories[0].tones

    toneArray.sort(function(a,b){
    	return parseFloat(b.score) - parseFloat(a.score)
    })

    var tone = toneArray[0]

    console.log(tone)

});