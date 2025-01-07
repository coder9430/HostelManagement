import React from 'react'

function ProfileForm() {
  return (
    <div>
      <div className='card'>
        <form class="row g-3">
  <div class="col-md-6">
    <label for="validationDefault01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationDefault01" value="" required/>
  </div>
  <div class="col-md-6">
    <label for="validationDefault02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationDefault02" value="" required/>
  </div>
  <div class="col-md-6">
    <label for="validationDefault01" class="form-label">Father's name</label>
    <input type="text" class="form-control" id="validationDefault01" value="" required/>
  </div>
  <div class="col-md-6">
    <label for="validationDefault02" class="form-label">Mother's name</label>
    <input type="text" class="form-control" id="validationDefault02" value="" required/>
  </div>
  <h4 style={{background:'gray' ,color:'white'}}>CONTACT DETAILS</h4>
  <div class="col-md-6">
    <label for="validationDefault01" class="form-label">Mobile No.1</label>
    <input type="text" class="form-control" id="validationDefault01" value="" required/>
  </div>
  <div class="col-md-6">
    <label for="validationDefault02" class="form-label">Mobile No.2</label>
    <input type="text" class="form-control" id="validationDefault02" value="" required/>
  </div>
  <div class="col-md-6">
    <label for="validationDefault01" class="form-label">Email1</label>
    <input type="text" class="form-control" id="validationDefault01" value="" required/>
  </div>
  <div class="col-md-6">
    <label for="validationDefault02" class="form-label">Email2</label>
    <input type="text" class="form-control" id="validationDefault02" value="" required/>
  </div>

  <h4 style={{background:'gray' ,color:'white'}}>PERMANENT ADDRESS</h4>
  <div class="col-md-6">
    <label for="validationDefault03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationDefault03" required/>
  </div>
  <div class="col-md-3">
    <label for="validationDefault04" class="form-label">State</label>
    <select class="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-3">
    <label for="validationDefault05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationDefault05" required/>
  </div>

  <h4 style={{background:'gray' ,color:'white'}}>COURSE DETAILS</h4>
  <div class="col-md-6">
    <label for="validationDefault01" class="form-label">Course name</label>
    <input type="text" class="form-control" id="validationDefault01" value="" required/>
  </div>
  <div class="col-md-6">
    <label for="validationDefault02" class="form-label">Branch</label>
    <input type="text" class="form-control" id="validationDefault02" value="" required/>
  </div>
  <div class="col-md-6">
    <label for="validationDefault01" class="form-label">Year of joining</label>
    <input type="text" class="form-control" id="validationDefault01" value="" required/>
  </div>
  <div class="col-md-6">
    <label for="validationDefault02" class="form-label">Passing out year</label>
    <input type="text" class="form-control" id="validationDefault02" value="" required/>
  </div>
  <h4 style={{background:'gray' ,color:'white'}}>DETAILS OF LOCAL GUARDIAN</h4>
  <div class="col-md-6">
    <label for="validationDefault01" class="form-label">Name</label>
    <input type="text" class="form-control" id="validationDefault01" value="" required/>
  </div>
  <div class="col-md-6">
    <label for="validationDefault02" class="form-label">Mobile No.</label>
    <input type="text" class="form-control" id="validationDefault02" value="" required/>
  </div>
  <div class="col-md-6">
    <label for="validationDefault03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationDefault03" required/>
  </div>
  <div class="col-md-3">
    <label for="validationDefault04" class="form-label">State</label>
    <select class="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-3">
    <label for="validationDefault05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationDefault05" required/>
  </div>


  <div class="col-12">
    <button class="btn" type="submit" style={{ backgroundImage: 'linear-gradient(to right, #fa709a 0%, #fee140 100%)' }}>Submit form</button>
  </div>
</form>

      
    </div>
    </div>
  )
}

export default ProfileForm
