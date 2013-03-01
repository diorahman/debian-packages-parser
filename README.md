```js
var p = new Parser()
	p.parse(file)

	p.on('data', function(data){
		// each package
		...
	})

	p.on('end', function(data){
		// full packages array
		...
	})
```