function getCookies() {
  const cookieString = document.cookie;
  const cookieArray = cookieString.split("; ")
  for (let cookie of cookieArray) {
      const singleCookie  = cookie.split("=");
      console.log(singleCookie[0], singleCookie[1])
      
      // add a condition
      if (singleCookie[0] === 'customer' && singleCookie[1] === 'new') {
        console.log('welcome to our store')
      }
}}


