 if (!window.indexedDB) {
            window.alert("Your browser doesn't support a stable version of IndexedDB.")
         }
         var db;
         var request = window.indexedDB.open("myNewDatabase");
         
         request.onerror = function(event) {
            console.log("error: ");
         };
         
         request.onsuccess = function(event) {
            db = request.result;
            console.log("success: "+ db);
         };
         
         request.onupgradeneeded = function(event) {
            var db = event.target.result;
            var objectStore = db.createObjectStore("student", {keyPath: "roll"});
         }
function read(key) {
      var objectStore = db.transaction("student").objectStore("student");
      var request = objectStore.get(key);
      
      request.onerror = function(event) {
         alert("Unable to retrieve data from database!");
      };
      
      request.onsuccess = function(event) {
         // Do something with the request.result!
         if(request.result) {
            localStorage.setItem("fname", request.result.fname);
            localStorage.setItem("lname", request.result.lname);
            localStorage.setItem("roll", key);
            localStorage.setItem("mno", request.result.mno);
            localStorage.setItem("city", request.result.city);
         } else {
            alert("Failed!!!");
         }
      };
   }
    
 function readAll(updateTableRender, tableRender) {
         var arr = [];
         var objectStore = db.transaction("student").objectStore("student");
         objectStore.openCursor().onsuccess = function(event) {
            var cursor = event.target.result;
            
            if (cursor) {
                 arr.push({fname: cursor.value.fname, lname: cursor.value.lname, roll: cursor.key, mno: cursor.value.mno, city: cursor.value.city});
               cursor.continue();
            } else {
                arr.sort((a,b) => a.roll - b.roll);
                updateTableRender(!tableRender);           
            }
         };
         return arr;
}


     
function add(data) {
      var request = db.transaction(["student"], "readwrite")
      .objectStore("student")
      .add({ roll: data.roll, fname: data.fname, lname: data.lname, mno: data.mno, city: data.city });

      request.onsuccess = function(event) {
      alert("Form data Saved!");
   };

      request.onerror = function(event) {
      alert("Unable to add data\r\nEntered data is aready exist in your database! ");
  }
}

export {add, readAll, read};