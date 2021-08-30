<template>
  <base-card>
    <form action="">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" id="title" name="title" />
      </div>

      <div class="form-control">
        <label for="description">Description</label>
        <input type="text" id="description" name="description" />
      </div>

      <div class="form-control">
        <label for="link">Link</label>
        <input type="url" id="link" name="link"/>
      </div>
      <div>
        <base-button type="submit">Submit</base-button>
      </div>
    </form>
  </base-card>
</template>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
