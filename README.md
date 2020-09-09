# Sight Words #

This project (paired with the VueJS frontend -> https://github.com/hamptonjt/word_cards_vue ) was created to 
help my son who is in Kindergarten, learn his 'sight words'.  This is the backend used to create a random
'Roladex of Index Cards' of 'sight words'.

I wanted to learn about the fastify nodejs web framework so that's why I chose that for this backend part 
of the project.

---
### Setting up the Application ###
You will need a Mongo database with a simple 'words' collection.  I've broken up the word list into sets - 
as assigned by the teacher - so you can focus on a given set, or use all the words in the collection.

Each 'word' has the structure:

```
word = {
  id: <generated by Mongo>
  word: '',
  set: 0
}
```
Once the database and collection are created - you will need to add the connection string to a `.env` file. My
only entry in `.env` file looks like this:
```
MONGODB=mongodb+srv://<user>:<password>@<server>/sight_words
```
Just replace the values between the `< >` with your values.

---

### Running the Application ###

Now that everything is set up, you should only have to enter this at the command line in the base directory of
the project:
```
node index.js
```

That's it.  Very simple and basic, but works for the needs of this project.