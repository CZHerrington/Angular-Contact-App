function DetailController (ContactService, $stateParams) {

  let vm = this;
  
  init ();

  function init () {
    console.log("DetailController init() running")
    ContactService.readContact($stateParams.id).then( res => {
  vm.contact = res.data;
      })
  };
}

DetailController.$inject = ['ContactService', '$stateParams'];
export { DetailController };
