function anotherInsecurePassword() {
  // GOOD: the random suffix is generated using a cryptographically secure RNG
  var suffix = crypto.getRandomValues(new Uint32Array(1))[0];
  var password = "sssAAAA" + suffix;
  return password;
}