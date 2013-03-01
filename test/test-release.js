var Parser = require('../index')
var test = require('tap').test

var file = __dirname + "/data/Release.dummy"

test('make sure we have debian release', function(t){
	
	var p = new Parser()
	p.parse(file)

	p.on('data', function(data){
		if(data['Origin']){
			t.equal(data['Origin'], 'Debian', 'this is debian sir!')
		}
	})

	p.on('end', function(data){
		t.equal(data.length, 1, 'only one member')
		t.end()
	})
})