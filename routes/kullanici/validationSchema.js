


// ## SCHEMAS --- --- ---
export const createValidationSchema = {
  // ## isim ---
  isim: {
    isLength: { // object about is length, represents arguments & helper method calls on the isLength
      options: {
        min:1, max:30
      },
      errorMessage: 'isim must be at least 1 character length with a max of 30 characters'
    }, // isLength ending
    // notEmpty: true,
    notEmpty: {
      errorMessage: 'isim cannot be empty'
    },
    isString: {
      errorMessage: 'isim must be a string'
    }
  },

  // ## soyisim ---
  soyisim: {
    notEmpty: true
  },

  // ## eposta ---
  eposta: {
    notEmpty: true
  },

  // ## parola ---
  parola: {
    notEmpty: true
  }
}