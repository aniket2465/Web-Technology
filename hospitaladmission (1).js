<form onsubmit="return validatePatient()">
  Patient ID: <input type="text" id="pid"><br><br>
  Name: <input type="text" id="pname"><br><br>
  Aadhaar No: <input type="text" id="aadhaar"><br><br>
  Contact No: <input type="text" id="contact"><br><br>
  DOB: <input type="date" id="dob"><br><br>
  Blood Group:
  <select>
    <option>A+</option>
    <option>B+</option>
    <option>O+</option>
  </select><br><br>
  <input type="submit">
</form>

<script>
function validatePatient() {
  let aadhaar = document.getElementById("aadhaar").value;
  let contact = document.getElementById("contact").value;

  if (aadhaar.length != 12) {
    alert("Aadhaar should be 12 digits");
    return false;
  }

  if (contact.length != 10) {
    alert("Contact should be 10 digits");
    return false;
  }

  return true;
}
</script>