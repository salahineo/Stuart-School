      // Get Custom Checkbox
      let checkbox = document.querySelectorAll('.duty label');
      // Add Listener To All Checkboxes
      for (let i = 0; i < checkbox.length; i++) {
        checkbox[i].addEventListener('click', checkThis);
      }
      // Toggle Check Function
      function checkThis(e) {
        // Get input
        let currentCheckbox = e.target.previousElementSibling;
        // Toggle Checked Attribute
        if (currentCheckbox.checked) {
          currentCheckbox.checked = false;
        } else {
          currentCheckbox.checked = true;
        }
      }
