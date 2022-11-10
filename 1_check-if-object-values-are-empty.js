var address = {
    street: '',
    streetNumber: '',
    postalCode: '',
    city: '',
}

var addressNotEmpty = Object.keys(address).some((k) => {
    return address[k] !== ''
  })

console.log('Address Object not empty: ', addressNotEmpty)