// Instantiate Github
const github = new Github();
// Instantiate UI
const ui = new UI();

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', e => {
  // Get input text
  const userText = e.target.value;

  if (userText !== '') {
    // Make http call
    github.getUser(userText).then(data => {
      if (data.profile.message == 'Not Found') {
        // Show Alert
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        // Show Profile
        //console.log(data);
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear profile
    ui.clearProfile();
  }
});
