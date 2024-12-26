function submitForm(event) {
    event.preventDefault();

    // Get form data
    const form = document.getElementById('admissionForm');
    const fullName = form.fullName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const dob = form.dob.value;
    const gender = form.gender.value;
    const course = form.course.value;
    const address = form.address.value;
    const profilePicture = form.profilePicture.files[0];

    // Check if a file was selected
    if (!profilePicture) {
        alert('Please upload a profile picture');
        return;
    }

    // Validate file size (max 2 MB)
    if (profilePicture.size > 2 * 1024 * 1024) {
        alert('Profile picture must be less than 2 MB.');
        return;
    }

    // Display success message
    const successMessage = document.getElementById('successMessage');
    successMessage.innerHTML = `
        <h2>🎉 Registration Successful!</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Course:</strong> ${course}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Profile Picture:</strong> <img src="${URL.createObjectURL(profilePicture)}" alt="Profile Picture" width="100"></p>
    `;
    
    // Optionally clear the form
    form.reset();
}
