<form onsubmit="return validateBill()">
  Consumer Number: <input type="text" id="cno"><br><br>
  Units Consumed: <input type="number" id="units"><br><br>
  Email: <input type="email" id="email"><br><br>
  <input type="submit">
</form>

<script>
function validateBill() {
  let units = document.getElementById("units").value;

  if (units <= 0) {
    alert("Enter valid units");
    return false;
  }

  return true;
}
</script>