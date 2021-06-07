
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAzSwmygk2h2bctstlVa6NTBfj7kDeJKpU",
      authDomain: "kwitter-cbee7.firebaseapp.com",
      databaseURL: "https://kwitter-cbee7-default-rtdb.firebaseio.com",
      projectId: "kwitter-cbee7",
      storageBucket: "kwitter-cbee7.appspot.com",
      messagingSenderId: "603087453507",
      appId: "1:603087453507:web:48a12c3a552d739f2483f6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding the room"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";

    }
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
   });
 });

}

getData();

function redirectToRoomName(name)
{
 console.log(name);
 localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}