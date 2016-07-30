$(function(){
  $('#goto_admin').click(function(e){
    e.preventDefault();
    if(document.getElementById("org_name").value != "" &&
      document.getElementById("bill_add").value != "" &&
      document.getElementById("country").value != "" &&
      document.getElementById("state").value != "" &&
      document.getElementById("city").value != "" &&
      document.getElementById("pincode").value != "" &&
      document.getElementById("adm_name").value != "" &&
      document.getElementById("adm_contact").value != "" &&
      document.getElementById("country").value != "- Select Country -" &&
      document.getElementById("state").value != "- Select State -" &&
      document.getElementById("city").value != "- Select City -"){
      $('#mytabs a[href="#admin_details"]').tab('show');
      console.log("'All fields' are filled.");
    }
    else{
      if(document.getElementById("org_name").value == ""){
        document.getElementById("org_name").style.borderColor = "red";
        console.log("'Organization Name' Field is empty.");
      }
      else{
        document.getElementById("org_name").style.borderColor = "green";
      }
      if(document.getElementById("bill_add").value == ""){
        document.getElementById("bill_add").style.borderColor = "red";
        console.log("'Billing Address' Field is empty.");
      }
      else{
        document.getElementById("bill_add").style.borderColor = "green";
      }
      if(document.getElementById("country").value == "" || document.getElementById("country").value == "- Select Country -"){
        document.getElementById("country").style.borderColor = "red";
        console.log("'Country' Field is empty.");
      }
      else{
        document.getElementById("country").style.borderColor = "green";
      }
      if(document.getElementById("state").value == "" || document.getElementById("state").value == "- Select State -"){
        document.getElementById("state").style.borderColor = "red";
        console.log("'State' Field is empty.");
      }
      else{
        document.getElementById("state").style.borderColor = "green";
      }
      if(document.getElementById("city").value == "" || document.getElementById("city").value == "- Select City -"){
        document.getElementById("city").style.borderColor = "red";
        console.log("'City' Field is empty.");
      }
      else{
        document.getElementById("city").style.borderColor = "green";
      }
      if(document.getElementById("pincode").value == ""){
        document.getElementById("pincode").style.borderColor = "red";
        console.log("'Pincode' Field is empty.");
      }
      else{
        document.getElementById("pincode").style.borderColor = "green";
      }
      if(document.getElementById("adm_name").value == ""){
        document.getElementById("adm_name").style.borderColor = "red";
        console.log("'Admin Name' Field is empty.");
      }
      else{
        document.getElementById("adm_name").style.borderColor = "green";
      }
      if(document.getElementById("adm_contact").value == ""){
        document.getElementById("adm_contact").style.borderColor = "red";
        console.log("'Admin Contact Number' Field is empty.");
      }
      else{
        document.getElementById("adm_contact").style.borderColor = "green";
      }
    }
  })
});
$(function(){
  $('#goto_billing').click(function(e){
    e.preventDefault();
    if(document.getElementById("csm_name").value != "" &&
      document.getElementById("csm_email").value != "" &&
      document.getElementById("csm_number").value != ""){
      $('#mytabs a[href="#billing_details"]').tab('show');
      console.log("'All fields' are filled.");
    }
    else{
      if(document.getElementById("csm_name").value == ""){
        document.getElementById("csm_name").style.borderColor = "red";
        console.log("'CSM Name' Field is empty.");
      }
      else{
        document.getElementById("csm_name").style.borderColor = "green";
      }
      if(document.getElementById("csm_email").value == ""){
        document.getElementById("csm_email").style.borderColor = "red";
        console.log("'CSM Email id' Field is empty.");
      }
      else{
        document.getElementById("csm_email").style.borderColor = "green";
      }
      if(document.getElementById("csm_number").value == ""){
        document.getElementById("csm_number").style.borderColor = "red";
        console.log("'CSM Number' Field is empty.");
      }
      else{
        document.getElementById("csm_number").style.borderColor = "green";
      }
    }
  })
});
$(function(){
  $('#goto_packages').click(function(e){
    e.preventDefault();
    if(document.getElementById("country_down").value != "" &&
      document.getElementById("state_down").value != "" &&
      document.getElementById("city_down").value != "" &&
      document.getElementById("bill_add_down").value != "" &&
      document.getElementById("pincode_down").value != "" &&
      document.getElementById("emp_size").value != "" &&
      document.getElementById("emp_comm").value != "" &&
      document.getElementById("user_pm").value != "" &&
      document.getElementById("con_period").value != "- Select Country -"){
      $('#mytabs a[href="#package"]').tab('show');
      console.log("'All fields' are filled.");
    }
    else{
      if(document.getElementById("bill_add_down").value == ""){
        document.getElementById("bill_add_down").style.borderColor = "red";
        console.log("'Billing Address' Field is empty.");
      }
      else{
        document.getElementById("bill_add_down").style.borderColor = "green";
      }
      if(document.getElementById("country_down").value == "" || document.getElementById("country_down").value == "- Select Country -"){
        document.getElementById("country_down").style.borderColor = "red";
        console.log("'Country' Field is empty.");
      }
      else{
        document.getElementById("country_down").style.borderColor = "green";
      }
      if(document.getElementById("state_down").value == "" || document.getElementById("state_down").value == "- Select State -"){
        document.getElementById("state_down").style.borderColor = "red";
        console.log("'State' Field is empty.");
      }
      else{
        document.getElementById("state_down").style.borderColor = "green";
      }
      if(document.getElementById("city_down").value == "" || document.getElementById("city_down").value == "- Select City -"){
        document.getElementById("city_down").style.borderColor = "red";
        console.log("'City' Field is empty.");
      }
      else{
        document.getElementById("city_down").style.borderColor = "green";
      }
      if(document.getElementById("pincode_down").value == ""){
        document.getElementById("pincode_down").style.borderColor = "red";
        console.log("'Pincode' Field is empty.");
      }
      else{
        document.getElementById("pincode_down").style.borderColor = "green";
      }
      if(document.getElementById("emp_size").value == ""){
        document.getElementById("emp_size").style.borderColor = "red";
        console.log("'Employee Size' Field is empty.");
      }
      else{
        document.getElementById("emp_size").style.borderColor = "green";
      }
      if(document.getElementById("emp_comm").value == ""){
        document.getElementById("emp_comm").style.borderColor = "red";
        console.log("'Employee Committment' Field is empty.");
      }
      else{
        document.getElementById("emp_comm").style.borderColor = "green";
      }
      if(document.getElementById("user_pm").value == ""){
        document.getElementById("user_pm").style.borderColor = "red";
        console.log("'User Per Month' Field is empty.");
      }
      else{
        document.getElementById("user_pm").style.borderColor = "green";
      }
      if(document.getElementById("con_period").value == ""){
        document.getElementById("con_period").style.borderColor = "red";
        console.log("'Contact Period' Field is empty.");
      }
      else{
        document.getElementById("con_period").style.borderColor = "green";
      }
    }
  })
});
