var Parser = require('../index')
var test = require('tap').test

var file = __dirname + "/data/Packages.dummy"

test('make sure we have 4 packages', function(t){
	
	var p = new Parser()
	p.parse(file)

	p.on('data', function(data){
		t.equal(Object.keys(data)[0], 'Package', 'the first key should be "Package"')
	})

	p.on('end', function(data){
		t.equal(data.length, 4, 'the number of packages is 4')
		t.end()
	})
})