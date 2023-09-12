This is a API of Jokes.
It has get,post,put,patch,delete methods.

get:-
     get random joke- '/random',
     get joke with a certain id JID- '/random/JID'
     get all jokes with a certain score Jscore-'/filter?score=Jscore'
     get all jokes-'/'

post:- 
     post a joke- '/jokes'

put:-
     replace an existing joke with a certain id JID-'/jokes/JID'

patch:-
     update an existing joke with a certain id JID-'/jokes/JID'

delete:-
     delete an an existing joke with a certain id JID-'/jokes/JID'