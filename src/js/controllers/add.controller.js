function AddController (ContactService, $state, $scope) {

  let vm = this;

  vm.addContact = addContact;


  function addContact (contact) {
    ContactService.createContact(contact).then( (result) => {
      console.log("Result from server: ", result)
      $state.go('root.detail', {'id':`${result.data._id}`});
    });
  };

}

AddController.$inject = ['ContactService', '$state', '$scope'];
export { AddController };
