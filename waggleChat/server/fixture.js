Meteor.startup(()=>{
  if(!Rooms.findOne({_id:"MeteorSchool"})){
    /*사용자 등록*/
    var usr1 = Accounts.createUser({
      username: "와글이",
      email: "waggle@fake.com",
      password: "12345678"
    });

    var usr2 = Accounts.createUser({
      username: "수다쟁이",
      email: "sudajangi@fake.com",
      password: "12345678"
    });
    /*채팅방 등록*/
    Rooms.insert({
      _id: "MeteorSchool",
      name: "MeteorSchool",
      owner: usr1,
      userList: [usr1, usr2],
      createdAt: (new Date()).getTime()
    });
  }
});
