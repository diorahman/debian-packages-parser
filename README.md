Brute force approach for comparing two Packages file : https://gist.github.com/diorahman/5651844

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
