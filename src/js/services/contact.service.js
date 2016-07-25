function ContactService ($http, SERVER) {

  this.createContact = createContact;
  this.readContact   = readContact;
  this.readContacts  = readContacts;
  this.deleteContact = deleteContact;


  function createContact (contact) {
    return $http.post(SERVER.URL, contact);
  }

  function readContact (id) {
    return $http.get(SERVER.URL + id);
  }

  function readContacts () {
    console.log("retrieving contacts from server..")
    return $http.get(SERVER.URL);
  }


  function deleteContact (id) {
    return $http.delete(SERVER.URL + id);
  }

}

ContactService.$inject = ['$http', 'SERVER'];
export { ContactService };
