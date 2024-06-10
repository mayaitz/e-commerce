<template>
  <form class="position-absolute top-50 start-50 translate-middle">
    <div class="mb-3">
      <label class="form-label">First name</label>
      <input class="form-control" id="first-name-input" type="text" />
    </div>
    <div class="mb-3">
      <label class="form-label">Last name</label>
      <input class="form-control" id="last-name-input" type="text" />
    </div>
    <div class="mb-3">
      <label class="form-label">Phone number</label>
      <input class="form-control" id="phone-number-input" type="text" />
    </div>
    <div class="mb-3">
      <label class="form-label">Email address</label>
      <input type="email" class="form-control" id="email-input" />
    </div>
    <div class="mb-3">
      <label class="form-label">Password</label>
      <input type="password" class="form-control" id="password-input" />
    </div>
    <button type="submit" class="btn btn-info">Submit</button>
  </form>
</template>

<script>
export default {};
</script>

<style>
form {
  width: 50%;
  margin-top: 2rem;
}

input {
  background-color: lightblue !important;
}
</style>
