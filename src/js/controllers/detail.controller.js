function DetailController (ContactService, $stateParams) {

  let vm = this;

  init ();

  function init () {
    console.log("DetailController init() running", $stateParams)
    ContactService.readContact($stateParams.id).then( res => {
  vm.contact = res.data;
    console.log(res.data);
      })
  };
}

DetailController.$inject = ['ContactService', '$stateParams'];
export { DetailController };
