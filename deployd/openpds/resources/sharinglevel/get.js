console.log(query.bearer_token);
if(query.bearer_token != "sharinglevel")
{
    console.log("you can't do that");
}
var request = new XMLHttpRequest();
request.open("GET", "/sharinglevel", false);
request.send(null);
console.log(request.responseText + " http request");