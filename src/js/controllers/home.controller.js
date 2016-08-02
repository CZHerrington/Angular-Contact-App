function HomeController (ContactService) {

  let vm = this;
  vm.randNum = (Math.floor(Math.random() * 80) + 1)


  init();

  function init () {
      ContactService.readContacts().then( function(res) {
        console.log("HomeCont Res: ", res.data[1]._id)
        vm.contacts = res.data;
      });
    }

};

HomeController.$inject = ['ContactService'];
export { HomeController };
