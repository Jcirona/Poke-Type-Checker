## PokeTypeChecker

# Try the app out here https://poketypechecker.surge.sh/

## Unsolved Issues and Major Hurdles
- Had an issue with the app not working on mobile devices. The issue ended up being the API only taking requests in all lower case, and mobiles generally having the first letter typed always in upper case. This was fixed with a simple to lower case function on the user input, but took a hot second to step back and realise the error, due to not having developer tools to see the 404 error that would have been thrown from the API request.git 
