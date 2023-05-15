/* 
* -----------------------
*   Mongodb Connection
*------------------------
* 1. create Account
* 2. create an uiser with password
* 3. white list ip address
* 4. database > connect > driver > node >view full code
* 5. change the password the uri
 ---------------------------------
* 1. CREATE -- POST
* 2. app.get('/users' ,async (req, res) => {})
* 3. make the fuvction async to use await insidfe it
* 4. make sure use the exopress.json() middleware
* 5. access the data form the body: const user = req.body
* 6. const result = await userCollection.inssertOne(user);
* 7. re.send(result);
*
*
*      CLIENT
*
* 1. create fetch
* 2. add second parameter as an object
* 3. provide method : 'POST'
* 4. add headers: {'content-type' : 'application/json'}
* 5. add body: JSON.stringify(user)
*
*
*
*  -------------------------
*   Read MANY
*  -------------------------
*
* 1. creare a cursor = userCollection.find()
* 2. const result = await cursor.toArray()
*
*
*
*
* --------------------------
*   DELETE
* --------------------------
* 1. crrate app.delete ('/users/:id', async(req, res) =>{} )
* 2. specify unique objectId top delete the right user 
* 3. const query = {_id: new objectId(id)}
* 4.const result = await userCollection.deleteOne(query);
* 5.res.send(result);

     CLIENT
* 1. 
*
*
*
*
*
*/