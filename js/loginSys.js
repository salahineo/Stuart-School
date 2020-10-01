// Get Username Input
let username = document.getElementById('username');
// Get Password Input
let password = document.getElementById('password');
// Get Submit Button
let loginSubmit = document.getElementById('login-submit');

loginSubmit.onclick = function (e) {
  e.preventDefault();
  if (username.value === '' || password.value === '') {
    // Trigger Error Function
    setError('All Fields Are Required');
  } else if (username.value.length < 3) {
    // Trigger Error Function
    setError('Username Must Be More Then 3 Characters');
  } else if (username.value === 'student' && password.value === 'student') {
    // Redirect To Student Dashboard
    window.location.href = 'student.html';
  } else if (username.value === 'teacher' && password.value === 'teacher') {
    // Redirect To Teacher Dashboard
    window.location.href = 'teacher.html';
  } else if (username.value === 'parent' && password.value === 'parent') {
    // Redirect To Parent Dashboard
    window.location.href = 'parent.html';
  } else {
    // Trigger Error Function
    setError('Invalid Username Or Password');
  }
};
