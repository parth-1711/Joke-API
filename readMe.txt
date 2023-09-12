This is a API of Jokes.
It has get,post,put,patch,delete methods.

get:-
     get joke with a certain id JID- '/random/JID' (test joke ids- 5tz52q, 5tyqag, 5tyii8, 5tyess etc.) 
     get random joke- '/random',
     get all jokes with a certain score Jscore-'/filter?score=Jscore'

post:- 
     post a joke- '/jokes'

put:-
     replace an existing joke with a certain id JID-'/jokes/JID'

patch:-
     update an existing joke with a certain id JID-'/jokes/JID'

delete:-
     delete an an existing joke with a certain id JID-'/jokes/JID'